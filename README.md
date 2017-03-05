# Cordova Firebase Upload File

A JavaScript function for uploading a local file (using its URI) to Firebase storage.


The function requires [jQuery](https://github.com/jquery/jquery).

## Installing

`npm install cf-upload-file`

or

`bower install cf-upload-file`

## Example Usage

The example usage is taking a picture and uploading it to Firebase

	// Do not forget to include the file (<script src='path/to/cf-upload-file.js'></script>)

	var storageRef = "path/to/firebase/storage";
	var options = { 
		sourceType: Camera.PictureSourceType.CAMERA,
		destinationType: Camera.DestinationType.FILE_URI
	};
	navigator.camera.getPicture(function(imageURI) {
		cf-upload-file(storageRef, imageURI, "image/jpeg")
			.then(function(snapshot) {
				// upload success, handle returned snapshot (firebase.storage.UploadTaskSnapshot)
			}).catch(function(err) {
				// handle error
			});
	}, function(err) {
		// cordova error
	}, options);

The function `cf-upload-file` takes 3 parameters (all string types). The first parameter will be your **Firebase storage path**, which is the location in which you would want to store the file. The second parameter will be the **file URI**. And lastly, the third parameter will be the **file type**.