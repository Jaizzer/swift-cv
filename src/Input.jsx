/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Input({ placeholder, label, className='' }) {
    const [status, setStatus] = useState('save');
    const [textContent, setTextContent] = useState(placeholder);

    // Update textContent everytime the input value changes
    function handleChange(event) {
        const updatedInput = event.target;
        setTextContent(updatedInput.value);
    }

    // Toggle between 'edit' and 'save' mode depending on the type of button clicked
    function handleClick(e) {
        e.preventDefault();
        const clickedButton = e.target;
        const newStatus = clickedButton.className;
        setStatus(newStatus);
    }

    if (status === 'edit') {
        // Return a form if status is 'edit'
        return (
            <form className={className}>
                <label>
                    {label + ": "}
                    <input type="text" placeholder={placeholder} value={textContent} onChange={handleChange} />
                </label>
                <button className="save" type="submit" onClick={handleClick}>
                    Save
                </button>
            </form>
        );
    } else if (status === 'save') {
        // Return a div containing the text that was previously provided in the input
        return (
            <div className={"editable-div " + className}>
                <div>{textContent}</div>
                <button className="edit" onClick={handleClick}>
                    Edit
                </button>
            </div>
        );
    }
}
