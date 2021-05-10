// import { upload } from "../../pages/api/upload-url";
import { useRef, useState } from 'react'
import GridLoader from "react-spinners/GridLoader";
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

export default function Upload () {
  const [uploading, setUploading] = useState(false);
  const inputEl = useRef(null)
  const uploadPhoto = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${ filename }`);
    const { url, fields } = await res.json();
    console.log({ url});
    setUploading(true);
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');

    } else {
      console.error('Upload failed.');
    }

    if (uploading) {
      return <GridLoader />;
    }


  };


  // export function DropZone () {
  //   const [uploading, setUploading] = useState(false);
  //   const onDrop = useCallback(async (acceptedFiles) => {
  //     setUploading(true);
  //     await Promise.all(accpetedFiles.map(uploadFile));
  //     setUploading(false);
  //   }, []);

  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //   })
  // }


  return (
    <>
      <p>Upload a .png or .jpg image (max 10MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        ref={inputEl}
        accept="image/png, image/jpeg"
      />
       <img src='' alt="" />
    </>
  );
}