import Input from './Input';

export default function Experience() {
    return (
        <div className="experience">
            <Input label="Work Title" placeholder="Full-Stack Developer" className="work-title"></Input>
            <Input label="Company" placeholder="Netflix" className="company"></Input>
            <Input label="Year" placeholder="2023-2024" className="working-years"></Input>
            <Input
                textArea={true}
                label="Description"
                placeholder="I developed and maintained scalable web applications, enhancing user experience and system performance. I collaborated with cross-functionalteams to design and implement innovative solutions, utilizing Agile methodologies to ensure timely and efficient project delivery. I also conducted thorough code reviews and implemented best practices to maintain high standards of code quality."
                className="job-description"
            ></Input>
        </div>
    );
}
