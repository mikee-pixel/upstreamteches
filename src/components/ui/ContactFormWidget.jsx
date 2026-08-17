import { MoveRight } from "lucide-react";

const ContactFormWidget = ({title, subheading, display_in}) => {
    return (
        <div className={`contact-form-container ${display_in} flex flex-col gap-5 p-10`}>
            <h4>{title}</h4>
            <p>{subheading}</p>
            <form action="" className="flex flex-row justify-between flex-wrap gap-5">
                <input className="input-field w-full sm:w-[47%]" type="text" name="full_name" id="full_name" placeholder="Full Name"/>
                <input className="input-field w-full sm:w-[47%]" type="email" name="email_address" id="email_address" placeholder="Email Address"/>
                <input className="input-field w-full sm:w-[47%]" type="text" name="phone_number" id="phone_number" placeholder="Phone Number"/>
                <input className="input-field w-full sm:w-[47%]" type="text" name="subject" id="subject" placeholder="Subject"/>
                <select className="input-select w-full" name="service-type" id="service-type" placeholder="How can we help you?">
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Search Engine Optimization">Search Engine Optimization</option>
                    <option value="Website Development">Website Development</option>
                    <option value="E-Commerce">E-Commerce</option>
                </select>
                <textarea className="input-text-area w-full" name="your-message" id="your-message" placeholder="Your Message"></textarea>
                <button className="btn primary-button"><span className="flex items-center justify-center gap-2">Send Message <MoveRight /></span></button>
            </form>
        </div>
    )
}

export default ContactFormWidget;