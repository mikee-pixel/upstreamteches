import { LayoutGrid, Mail, MessageSquare, MousePointer2, MoveRight, Phone, SquareUser } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactFormWidget = ({title, subheading, display_in}) => {
    const form = useRef();
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [hideMessageResponse, setHideMessageResponse] = useState(null);
    const timeOutResponse = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kurufeb', 'template_m9j6vp9', form.current, {
                publicKey: 'eegWjDT5Z9ZRBRqqg',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                    setSubmissionStatus(true);
                    timeOutResponse.current = setTimeout(() => {
                        setSubmissionStatus(null)
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSubmissionStatus(false);
                    timeOutResponse.current = setTimeout(() => {
                        setSubmissionStatus(null);
                    }, [3000])
                },
            );
    };

    useState(() => {
        timeOutResponse.current = setTimeout(() => {
            setSubmissionStatus(null)
        }, 5000);
    }, [submissionStatus])


    return (
        <div className={`contact-form-container ${display_in} flex flex-col gap-5 p-10`}>
            <h4 className="title">{title}</h4>
            <p className="subheading">{subheading}</p>
            <form action="" className="flex flex-row justify-between flex-wrap gap-5" ref={form} onSubmit={sendEmail}>
                <div className="input-field-container flex flex-row w-full sm:w-[47%]">
                    <div className="field-icon">
                        <SquareUser />
                    </div>
                    <input className="input-field w-full" type="text" name="full-name" id="full_name" placeholder="Full Name" required/>
                </div>
                <div className="input-field-container flex flex-row w-full sm:w-[47%]">
                    <div className="field-icon">
                        <Mail />
                    </div>
                    <input className="input-field w-full" type="email" name="email-address" id="email_address" placeholder="Email Address" required/>
                </div>
                <div className="input-field-container flex flex-row w-full sm:w-[47%]">
                    <div className="field-icon">
                        <Phone />
                    </div>
                    <input className="input-field w-full" type="text" name="phone-number" id="phone_number" placeholder="Phone Number"/>
                </div>
                <div className="input-field-container flex flex-row w-full sm:w-[47%]">
                    <div className="field-icon">
                        <LayoutGrid />
                    </div>
                    <select className="input-select w-full" name="service-type" id="service-type" placeholder="How can we help you?" required>
                        <option value="Graphics Design">Graphics Design</option>
                        <option value="Search Engine Optimization">Search Engine Optimization</option>
                        <option value="Website Development">Website Development</option>
                        <option value="E-Commerce">E-Commerce</option>
                    </select>
                </div>
                <div className="input-field-container textarea-field-container flex flex-row w-full">
                    <div className="field-icon">
                        <MessageSquare />
                    </div>
                    <textarea className="input-text-area w-full" name="message" id="your-message" placeholder="Your Message" required></textarea>
                </div>
                <button className="btn primary-button"><span className="flex items-center justify-center gap-2">Send Message <MoveRight /></span></button>
                <div className="form-message-response-container w-full">
                    {submissionStatus === true && <p className="message-success">Thank you! Your form has been submitted successfully. We'll get back to you shortly.</p>}
                    {submissionStatus === false && <p className="message-error">Oops! Something went wrong while submitting your form. Please try again later.</p>}
                </div>
                
            </form>
        </div>
    )
}

export default ContactFormWidget;