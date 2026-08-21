import useAPIrequest from "../../customhooks/useAPIrequest";
import {useEffect, useState} from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

const FAQWidget = () => {
    // const {data, loading, errorMessage} = useAPIrequest("http://localhost:8000/faq");
    const {data, loading, errorMessage} = useAPIrequest("https://upstreamteches-backend.onrender.com/faq");
    const [faqSelected, setFaqSelected] = useState(null);


    //Divide the FAQ List in two rows.
    const faqLeft = data.filter((_, index) => index % 2 === 0);
    const faqRight = data.filter((_, index) => index % 2 === 1);

    //Handle FAQ Expand
    const handleExpand = (id) => {
        setFaqSelected(prev => prev === id ? null : id)
    }

    return (
        <div className="faq-container flex flex-col md:flex-row flex-wrap justify-center items-start p-5 gap-5">
            {loading && <p>Loading...</p>}
            <div className="faq-col faq-left flex flex-col gap-5">
                {faqLeft && faqLeft.map((faqItem, index) => (
                    <div className="faq-item flex flex-col p-5 gap-1" key={faqItem.id} onClick={() => handleExpand(faqItem.id)}>
                        <h6 className="faq-question flex justify-between items-start">{faqItem.question} {faqSelected === faqItem.id ? <CircleMinus/> : <CirclePlus />}</h6>
                        <p className={`faq-answer ${faqSelected === faqItem.id ? 'expanded' : "" }`}><span>{faqItem.answer}</span></p>
                    </div>
                ))}
            </div>
            <div className="faq-col faq-right flex flex-col gap-5">
                {faqRight && faqRight.map((faqItem, index) => (
                    <div className="faq-item flex flex-col p-5 gap-1" key={faqItem.id} onClick={() => handleExpand(faqItem.id)}>
                        <h6 className="faq-question flex justify-between items-start">{faqItem.question} {faqSelected === faqItem.id ? <CircleMinus/> : <CirclePlus />}</h6>
                        <p className={`faq-answer ${faqSelected === faqItem.id ? 'expanded' : "" }`}><span>{faqItem.answer}</span></p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default FAQWidget;