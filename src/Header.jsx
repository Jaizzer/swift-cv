import Input from './Input';

export default function Header() {
    return (
        <div className="header">
            <Input placeholder="John" label="First name" className="first-name"></Input>
            <Input placeholder="Smith" label="Last name" className="last-name"></Input>
            <Input placeholder="Full Stack Developer" label="Work Title" className="work-title"></Input>
        </div>
    );
}
