(function() {
	var cordovaFirebaseUploadFile = function(storageRef, fileUri, uFileType) {
		var d = $.Deferred();
		window.resolveLocalFileSystemURL(
			fileUri,
			onResolveSuccess,
			onResolveError
		);

		function onResolveSuccess(fileEntry) {
			fileEntry.file(function(file) { 
				var reader = new FileReader();
				reader.onloadend = function() {
					var type = uFileType || file.type;
				    var blob = new Blob([new Uint8Array(this.result)], { type: type });
				    uploadToFirebase(blob);
			 	};
			 	reader.readAsArrayBuffer(file);
			});
		}

		function onResolveError(err) {
			d.reject(err);
		}

		function uploadToFirebase(blob) {
		    firebase.storage().ref(storageRef).put(blob, {contentType: blob.type})
		        .then(function(snapshot) {
		        	d.resolve(snapshot);
		        })
		        .catch(function(err) {
		            d.reject(err);
		        });
		}
		return d.promise();
	};

	window.cfUploadFile = cordovaFirebaseUploadFile;
})();