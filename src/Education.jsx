import Input from './Input';

export default function Education() {
    return (
        <div className="education">
            <Input label="Institution" placeholder="Stanford University" className="institution"></Input>
            <Input label="Course" placeholder="BS Computer Science" className="course"></Input>
            <Input label="Year" placeholder="2023-2024" className="education-years"></Input>
        </div>
    );
}
