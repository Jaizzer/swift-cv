import Education from './Education';
import Area from './Area';
import Image from './Image';
import Header from './Header';
import Contact from './Contact'
import Experience from './Experience';
import Skill from './Skills';
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
                    
                    <Area heading="Education" className="education">
                        <Education></Education>
                    </Area>
                    <Area heading="Contact" className="contact">
                        <Contact></Contact>
                    </Area>
                    <Area heading="Skills" className="skills">
                        <Skill></Skill>
                    </Area>
                </div>
                <div id="right-section" className="work-experience">
                    <Area heading="Work Experience">
                        <Experience></Experience>
                    </Area>
                </div>
            </div>
            <button className={buttonTextContent.toLowerCase()} onClick={handleClick}>{buttonTextContent}</button>
        </IsSubmitContext.Provider>
    );
}
