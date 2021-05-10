// to learn how to download a file, get/use file metadata, delete files, and list files see https://firebase.google.com/docs/storage/web/start

import { useRef, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'

const UploadFile = () => {
    const inputEl = useRef(null)
    const [value, setValue] = useState(0)
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function uploadFile() {
        // get file
        let file = inputEl.current.files[0]

        // create a storage ref
        let storageRef = firebase.storage().ref('user_uploads/' + file.name)

        // upload file
        let task = storageRef.put(file)

        // update progress bar
        task.on('state_change',

            function progress(snapshot) {
                setValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + progress + '% done');
            },

            function error(err) {
                alert(error)
                // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                case 'storage/unauthorized':
          // User doesn't have permission to access the object
                        break;
                case 'storage/canceled':
          // User canceled the upload
                        break;
                case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            function complete() {
                alert('Uploaded to firebase storage successfully!');
                 // Upload completed successfully, now we can get the download URL
            task.snapshot.ref.getDownloadURL().then((url) => {
            setFile(null);
            setURL(url);
            });
            }
        );
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <progress value={value} max="100" style={{width: '100%'}}></progress>
            <br />
            <input
                type="file"
                onChange={uploadFile}
                ref={inputEl}
            />
            <img src={url} alt="" />
        </div>
    )
}

export default UploadFile;
