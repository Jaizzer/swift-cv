import Input from "./Input";

export default function Experience() {
    return (
        <div className="experience">
            <Input label="Work Title" placeholder="Cloud Engineer" className="work-title"></Input>
            <Input label="Company" placeholder="Netflix" className="company"></Input>
            <Input label="Year" placeholder="2023-2024" className="working-years"></Input>
            <Input label="Description" placeholder="Add Description" className="job-description"></Input>
        </div>
    )
}
