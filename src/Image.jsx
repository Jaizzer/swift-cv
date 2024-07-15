import { useContext, useState } from 'react';
import { IsFinalizeContext } from './IsFinalizeContext';

export default function Image() {
    // Check if document is on finalize status
    const isFinalize = useContext(IsFinalizeContext);

    const [status, setStatus] = useState('save');
    const [link, setLink] = useState(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7MUmh1RzEs_HxN1gBUW_2H_v5W3hbuT0F_BKVypVfiR_WazXQBb9_dDlUecKw7vvy3U&usqp=CAU'
    );

    // Update link everytime the input value changes
    function handleChange(event) {
        const updatedInput = event.target;
        setLink(updatedInput.value);
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
                <img src={link} alt="profile image" className="profile-image" />
                <form className="image-link">
                    <label>
                        {'Link: '}
                        <input type="text" placeholder="www.image.com" value={link} onChange={handleChange} />
                    </label>
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
                <img src={link} alt="profile image" className="profile-image" />
                {!isFinalize && (
                    <button className="edit" onClick={handleClick}>
                        Change Photo
                    </button>
                )}
            </div>
        );
    }
}
