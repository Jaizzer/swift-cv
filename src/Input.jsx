/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { IsFinalizeContext } from './IsFinalizeContext';

export default function Input({ placeholder, label, className = '', textArea = false }) {
    const [status, setStatus] = useState('save');
    const [textContent, setTextContent] = useState(placeholder);

    // Check if document is on finalize status
    const isFinalize = useContext(IsFinalizeContext);

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

    if (status === 'edit' && !isFinalize) {
        // Return a form if status is 'edit' and document is not on finalize status
        return (
            <form className={className}>
                <label>
                    {label + ': '}
                    {!textArea && <input type="text" placeholder={placeholder} value={textContent} onChange={handleChange} />}
                    {textArea && <textarea type="text" placeholder={placeholder} value={textContent} onChange={handleChange}></textarea>}
                </label>
                <button className="save" type="finalize" onClick={handleClick}>
                    Save
                </button>
            </form>
        );
    } else if (status === 'save' || isFinalize) {
        // Return a div containing the text that was previously provided in the input
        return (
            <div className={'editable-div ' + className}>
                <div>{textContent}</div>
                {/* Hide buttons if document is in finalize status */}
                {!isFinalize && (
                    <button className="edit" onClick={handleClick}>
                        Edit
                    </button>
                )}
            </div>
        );
    }
}
