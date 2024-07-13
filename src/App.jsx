import Education from './Education';
import Area from './Area';
import Image from './Image';
import Name from './Name';
import Title from './Title';
import Contact from './Contact'
import Experience from './Experience';
import { useState } from 'react';

export default function App() {
    const [buttonTextContent, setButtonTextContent] = useState('Submit');
    const [isSubmit, setIsSubmit] = useState(false);

    function handleClick() {
        setButtonTextContent((buttonTextContent === 'Submit'? 'Edit': 'Submit'));
        setIsSubmit(!isSubmit)
    }

    return (
        <>
            <div>Website not yet completed!</div>
            <Image></Image>
            <Name></Name>
            <Title></Title>
            <Area heading="Education">
                <Education></Education>
            </Area>
            <Area heading="Work Experience">
                <Experience></Experience>
            </Area>
            <Area heading="Contact">
                <Contact></Contact>
            </Area>

            <button className={buttonTextContent.toLowerCase()} onClick={handleClick}>{buttonTextContent}</button>
        </>
    );
}
