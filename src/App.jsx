import Education from './Education';
import Area from './Area';
import Image from './Image';
import Header from './Header';
import Contact from './Contact'
import Experience from './Experience';
import { useState } from 'react';
import { IsSubmitContext } from './IsSubmitContext';

export default function App() {
    const [buttonTextContent, setButtonTextContent] = useState('Submit');
    const [isSubmit, setIsSubmit] = useState(false);

    function handleClick() {
        setButtonTextContent((buttonTextContent === 'Submit'? 'Edit': 'Submit'));
        setIsSubmit(!isSubmit)
        
        // Add or remove root 'submit' class depending on documents submit status
        if (!isSubmit) {
            document.querySelector('#root').classList.add('submit');
        } else {
            document.querySelector('#root').classList.remove('submit');
        }
    }

    return (
        <IsSubmitContext.Provider value={isSubmit}>
            {/* <div>Website not yet completed!</div> */}
            <div className="document">
                <div className="top-section">
                    <Image></Image>
                    <Header></Header>
                </div>
                <div id="left-section">
                    
                    <Area heading="Education">
                        <Education></Education>
                    </Area>
                    <Area heading="Contact">
                        <Contact></Contact>
                    </Area>
                </div>
                <div id="right-section">
                    <Area heading="Work Experience">
                        <Experience></Experience>
                    </Area>
                </div>
            </div>
            <button className={buttonTextContent.toLowerCase()} onClick={handleClick}>{buttonTextContent}</button>
        </IsSubmitContext.Provider>
    );
}
