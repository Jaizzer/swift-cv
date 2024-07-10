import Input from './Input';
import phoneIconPath from './assets/phone.png';
import addressIconPath from './assets/address.png';
import websiteIconPath from './assets/website.png';
import emailIconPath from './assets/email.png';

export default function Contact() {
    return (
        <div className="contact">
            <Phone />
            <Email />
            <Website />
            <Address />
        </div>
    );
}

function Phone() {
    return (
        <div className="contact-item">
            <img src={phoneIconPath} alt="Phone" className="icon" />
            <Input label="Phone" placeholder="555-555-5555" className="phone"></Input>
        </div>
    );
}

function Email() {
    return (
        <div className="contact-item">
            <img src={emailIconPath} alt="Email" className="icon" />
            <Input label="Email" placeholder="not.real@gmail.com" className="email"></Input>
        </div>
    );
}

function Website() {
    return (
        <div className="contact-item">
            <img src={websiteIconPath} alt="website" className="icon" />
            <Input label="Website" placeholder="www.notrealsite.com" className="website"></Input>
        </div>
    );
}

function Address() {
    return (
        <div className="contact-item">
            <img src={addressIconPath} alt="address" className="icon" />
            <Input label="Address" placeholder="123 Anywhere St. Any City, ST 12345" className="address"></Input>
        </div>
    );
}
