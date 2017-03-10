# Cordova Firebase Upload File

A JavaScript function for uploading a local file (using its URI) to Firebase storage.


The function requires [jQuery](https://github.com/jquery/jquery).

## Installation

Include [the javascript file (minified)](https://raw.githubusercontent.com/raxkaynan/Cordova-Firebase-Upload-File/master/cf-upload-file.min.js).

## Example Usage

The example usage is taking a picture and uploading it to Firebase

	var storageRef = "path/to/firebase/storage";
	var options = { 
		sourceType: Camera.PictureSourceType.CAMERA,
		destinationType: Camera.DestinationType.FILE_URI
	};
	navigator.camera.getPicture(function(imageURI) {
		cfUploadFile(storageRef, imageURI, "image/jpeg")
			.then(function(snapshot) {
				// upload success, handle returned snapshot (firebase.storage.UploadTaskSnapshot)
			}).fail(function(err) {
				// handle error
			});
	}, function(err) {
		// cordova error
	}, options);

The function `cfUploadFile` takes 3 parameters (all string types). The first parameter will be your **Firebase storage path**, which is the location in which you would want to store the file. The second parameter will be the **file URI**. And lastly, the third parameter will be the **file type**.
