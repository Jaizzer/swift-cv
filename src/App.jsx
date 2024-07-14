import Education from './Education';
import Area from './Area';
import Image from './Image';
import Header from './Header';
import Contact from './Contact'
import Experience from './Experience';
import Skill from './Skills';
import { useState } from 'react';
import { IsSubmitContext } from './IsSubmitContext';
import jsPDF from 'jspdf';

export default function App() {
    const [buttonTextContent, setButtonTextContent] = useState('Submit');
    const [isSubmit, setIsSubmit] = useState(false);

    function handleClick() {
        setButtonTextContent((buttonTextContent === 'Submit'? 'Edit': 'Submit'));
        setIsSubmit(!isSubmit)
        
        // Add or remove root 'submit' class depending on documents submit status
        if (!isSubmit) {
            document.querySelector('.document').classList.add('submit');
        } else {
            document.querySelector('.document').classList.remove('submit');
        }
    }

    async function createPDF() {
        // Get the document element
        const cv = document.querySelector('.document');

        // Add submit class to document for styling purpose
        cv.classList.add('submit');
        
        // Get document's dimension
        const cvWidth = cv.clientWidth;
        const cvHeight = cv.clientHeight;

        // Create pdf document
        const pdf = new jsPDF('p', 'px', [cvWidth, cvHeight]);

        // Add pdf title
        pdf.setProperties({title: "cv"});
        
        pdf.html(cv).then(() => {
            // Remove the last page that is empty
            const lastPage = pdf.internal.getNumberOfPages()
            pdf.deletePage(lastPage);    

            // Open pdf in new tab
            window.open(pdf.output('bloburl'))
        });
    }

    return (
        <IsSubmitContext.Provider value={isSubmit}>
            <div className="document">
                <div className="top-section">
                    <Image></Image>
                    <Header></Header>
                </div>
                <div id="left-section">
                    
                    <Area heading="Education" className="education" isDeleteButtonActive={true} isAddButtonActive={true}>
                        <Education></Education>
                        <Education></Education>
                        <Education></Education>
                    </Area>
                    <Area heading="Contact" className="contact" isDeleteButtonActive={false} isAddButtonActive={false}>
                        <Contact></Contact>
                    </Area>
                    <Area heading="Skill" className="skills" isDeleteButtonActive={true} isAddButtonActive={true}>
                        <Skill></Skill>
                        <Skill></Skill>
                        <Skill></Skill>
                        <Skill></Skill>
                    </Area>
                </div>
                <div id="right-section">
                    <Area heading="Work Experience" className="work-experience" isDeleteButtonActive={true} isAddButtonActive={true}>
                        <Experience></Experience>
                        <Experience></Experience>
                        <Experience></Experience>
                        <Experience></Experience>
                    </Area>
                </div>
            </div>
            <button className={buttonTextContent.toLowerCase()} onClick={handleClick}>{buttonTextContent + " Resume"}</button>
            <button className="download" onClick={createPDF}>Download Resume</button>
        </IsSubmitContext.Provider>
    );
}
