/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Input({ placeholder, label }) {
    const [status, setStatus] = useState('edit');
    const [textContent, setTextContent] = useState('');

    // Update textContent everytime the input value changes
    function handleChange(event) {
        const updatedInput = event.target;
        setTextContent(updatedInput.value);
    }

    // Toggle between 'edit' and 'save' mode depending on the type of button clicked
    function handleClick(e) {
        const clickedButton = e.target;
        const newStatus = clickedButton.className;
        setStatus(newStatus);
    }

    if (status === 'edit') {
        // Return an input if status is 'edit'
        return (
            <div className="form">
                <label>
                    {label + ": "}
                    <input type="text" placeholder={placeholder} value={textContent} onChange={handleChange} />
                </label>
                <button className="save" onClick={handleClick}>
                    Save
                </button>
            </div>
        );
    } else if (status === 'save') {
        // Return a div containing the text that was previously provided in the input
        return (
            <div>
                <div className="editable-div">{textContent}</div>
                <button className="edit" onClick={handleClick}>
                    Edit
                </button>
            </div>
        );
    }
}
