import React, { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { storage } from '../../configs/firebaseConfig';
import ProfilePhoto from './ProfilePhoto';
import CropEasy from './CropEasy';

const Test = () => {

    const [progrss, setProgrss] = useState(0);

    const uploadFile = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            setProgrss((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => console.log(url))
            }
        )
    }

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFile(file);



    }



    return (
        <div class="flex justify-center">
            {/* <div>
                <form onSubmit={formHandler}>
                    <input type="file"></input>
                    <button type='submit'>Upload</button>
                    <h3>{progrss}</h3>
                </form>
            </div> */}
            <div>
                <ProfilePhoto></ProfilePhoto>
            </div>
        </div>
    )
}

export default Test