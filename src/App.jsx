import Education from './Education';
import Area from './Area';
import Image from './Image';
import Header from './Header';
import Contact from './Contact'
import Experience from './Experience';
import Skill from './Skills';
import { useState } from 'react';
import { IsFinalizeContext } from './IsFinalizeContext';
import jsPDF from 'jspdf';

export default function App() {
    const [buttonTextContent, setButtonTextContent] = useState('Finalize');
    const [isFinalize, setIsFinalize] = useState(false);

    function handleClick() {
        setButtonTextContent((buttonTextContent === 'Finalize'? 'Edit': 'Finalize'));
        setIsFinalize(!isFinalize)
        
        // Add or remove root 'finalize' class depending on documents finalize status
        if (!isFinalize) {
            document.querySelector('.document').classList.remove('edit');
            document.querySelector('.document').classList.add('finalize');
        } else {
            document.querySelector('.document').classList.remove('finalize');
            document.querySelector('.document').classList.add('edit');
        }
    }

    async function createPDF() {
        // Get the document element
        const cv = document.querySelector('.document');

        // Add finalize class to document for styling purpose
        cv.classList.add('finalize');

        // Remove paper guidelines
        cv.querySelectorAll('.guideline').forEach(guideline => {
            cv.removeChild(guideline);
        });

        // Preserve the 'bold' effect by relying on bold tag since jsPDF does not recognize font-weight stylings
        [
            ...cv.querySelectorAll('.first-name > div'),
            ...cv.querySelectorAll('.cv-area .work-title > div'),
            ...cv.querySelectorAll('.company > div'),
            ...cv.querySelectorAll('.working-years > div'),
            ...cv.querySelectorAll('.institution > div'),
            ...cv.querySelectorAll('.course > div'),
            ...cv.querySelectorAll('.heading'),
        ].forEach(element => {
            // Create div with text content that are inside <b> tag
            const boldElement = document.createElement('b');
            boldElement.textContent = element.textContent;
            const newDiv = document.createElement('div');
            newDiv.className = element.className;
            newDiv.appendChild(boldElement);

            // Replace the old element that relies on font-weight styling by new one that uses <b> tag
            const parent = element.parentElement;
            parent.replaceChild(newDiv, element);
        })
        
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

            // Download pdf in new tab
            pdf.save("cv.pdf")
        });
    }

    return (
        <IsFinalizeContext.Provider value={isFinalize}>
            <button className={buttonTextContent.toLowerCase()} onClick={handleClick}>{buttonTextContent + " Resume"}</button>
            { isFinalize && <button className="download" onClick={createPDF}>Download Resume</button>}
            <div className="document edit">
                <div className='guideline letter'><div className="size">8.5x11</div></div>
                <div className='guideline long'><div className="size">8.5x13</div></div>
                <div className='guideline legal'><div className="size">8.5x14</div></div>
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
        </IsFinalizeContext.Provider>
    );
}
