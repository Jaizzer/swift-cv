import { useContext, useRef, useState } from 'react';
import { IsFinalizeContext } from './IsFinalizeContext';
import placeHolderImagePath from './assets/avatar.png'

export default function Image() {
    // Check if document is on finalize status
    const isFinalize = useContext(IsFinalizeContext);

    const [status, setStatus] = useState('save');
    const [link, setLink] = useState(placeHolderImagePath);

    // Create reference to the file input
    const imageUploadRef = useRef();

    // Update link everytime the file input value changes
    function handleChange() {
        const uploadedFile = imageUploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);        
        setLink(cachedURL);
    }

    // Toggle between 'edit' and 'save' mode depending on the type of button clicked
    function handleClick(e) {
        e.preventDefault();
        const clickedButton = e.target;
        const newStatus = clickedButton.className;
        setStatus(newStatus);
    }

    if (status === 'edit' && !isFinalize) {
        // Return a form if status is 'edit'
        return (
            <div className="image-container">
                <img src={link} className="profile-image" />
                <form className="image-link">
                    {/* Hide the original input element and access it via the 'Upload Photo' button */}
                    <input type="file" onChange={handleChange} id='upload' ref={imageUploadRef} accept="image/png, image/gif, image/jpeg" hidden/>
                    <button className="photo-uploader" type="button" onClick={ () => { document.getElementById('upload').click()} }>Upload Photo</button>
                    <button className="save" type="finalize" onClick={handleClick}>
                        Save
                    </button>
                </form>
            </div>
        );
    } else if (status === 'save' || isFinalize) {
        // Return an editable photo container if status is save
        return (
            <div className="image-container">
                <img src={link} className="profile-image" />
                {!isFinalize && (
                    <button className="edit" onClick={handleClick}>
                        Change Photo
                    </button>
                )}
            </div>
        );
    }
}
