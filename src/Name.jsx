import Input from "./Input";

export default function Name() {
    return (
        <div className="name">
            <Input placeholder="John" label="First name" className="first-name"></Input>
            <Input placeholder="Smith" label="Last name" className="last-name"></Input>
        </div>
    )
}