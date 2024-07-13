import Input from "./Input";

export default function Header() {
    return (
        <div className="name">
            <Input placeholder="John" label="First name" className="first-name"></Input>
            <Input placeholder="Smith" label="Last name" className="last-name"></Input>
            <Input placeholder="Software Engineer" label="Work Title" className="work-title"></Input>
        </div>
    )
}