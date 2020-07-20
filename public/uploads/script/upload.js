const uploader = document.getElementById("uploader");
const fileBtn = document.getElementById("fileBtn");

fileBtn.addEventListener('change', (e) => {
    // Get file
    var file = e.target.files[0];

    // var storageRef = storage().ref();

    var uploadTask = storageRef.child('tutorials/' + file.name).put(file);

    uploadTask.on(storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
                case storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, error => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log("User doesn't have permission to access the object")
                    break;
                case 'storage/canceled':
                    // // User canceled the upload
                    console.log("User canceled the upload")
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log("Unknown error occurred, inspect error.serverResponse");
                    break;
            }
        }, () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log('File available at', downloadURL);
            });
        }
    );
});