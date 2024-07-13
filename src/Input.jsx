/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { IsSubmitContext } from './IsSubmitContext';

export default function Input({ placeholder, label, className='' }) {
    const [status, setStatus] = useState('save');
    const [textContent, setTextContent] = useState(placeholder);

    // Check if document is on submit status
    const isSubmit = useContext(IsSubmitContext)

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

    if (status === 'edit' && !isSubmit) {
        // Return a form if status is 'edit' and document is not on submit status
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
    } else if (status === 'save' || isSubmit) {
        // Return a div containing the text that was previously provided in the input
        return (
            <div className={"editable-div " + className}>
                <div>{textContent}</div>
                {/* Hide buttons if document is in submit status */}
                { 
                    (!isSubmit) && 
                    <button className="edit" onClick={handleClick}>
                        Edit
                    </button>
                }
            </div>
        );
    } 
}
