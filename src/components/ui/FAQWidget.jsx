import {useState} from "react";
import { CirclePlus, CircleMinus } from "lucide-react";
import FaqData from "../../data/FaqData";

const FAQWidget = () => {
    
    const [faqSelected, setFaqSelected] = useState(null);

    //Reassign the FaqData
    const faqData = FaqData;

    //Divide the FAQ List in two rows.
    const faqLeft = faqData.filter((_, index) => index % 2 === 0);
    const faqRight = faqData.filter((_, index) => index % 2 === 1);

    //Handle FAQ Expand
    const handleExpand = (id) => {
        setFaqSelected(prev => prev === id ? null : id)
    }

    return (
        <div className="faq-container flex flex-col md:flex-row flex-wrap justify-center items-start p-5 gap-5">
            <div className="faq-col faq-left flex flex-col gap-5">
                {faqLeft && faqLeft.map((faqItem, index) => (
                    <div className="faq-item flex flex-col p-5 gap-1 bg-(--color-white)" key={faqItem.id} onClick={() => handleExpand(faqItem.id)}>
                        <div className="question-container flex justify-around items-start">
                            <h6 className="faq-question w-[85%]">{faqItem.question}</h6>
                            <div className="icon-container flex justify-center w-[10%]">
                                {faqSelected === faqItem.id ? <CircleMinus className="w-[30px] h-[30px] xl:w-[25px] xl:h-[25px]"/> : <CirclePlus className="w-[30px] h-[30px] xl:w-[25px] xl:h-[25px]"/>}
                            </div>
                        </div>
                        
                        <p className={`faq-answer ${faqSelected === faqItem.id ? 'expanded' : "" }`}><span>{faqItem.answer}</span></p>
                    </div>
                ))}
            </div>
            <div className="faq-col faq-right flex flex-col gap-5">
                {faqRight && faqRight.map((faqItem, index) => (
                    <div className="faq-item flex flex-col p-5 gap-1 bg-(--color-white)" key={faqItem.id} onClick={() => handleExpand(faqItem.id)}>
                        <div className="question-container flex justify-around items-start">
                            <h6 className="faq-question w-[85%]">{faqItem.question} </h6>
                            <div className="icon-container flex justify-center w-[10%]">
                                {faqSelected === faqItem.id ? <CircleMinus className="w-[30px] h-[30px] xl:w-[25px] xl:h-[25px]"/> : <CirclePlus className="w-[63px] h-[30px] xl:w-[25px] xl:h-[25px]"/>}
                            </div>
                        </div>
                        
                        <p className={`faq-answer ${faqSelected === faqItem.id ? 'expanded' : "" }`}><span>{faqItem.answer}</span></p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default FAQWidget;