import React from 'react';
import data from './faqData';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke={id === open ? "white" : "white"}
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FAQ = () => {
const [open, setOpen] = React.useState(null);

const handleOpen = (id) => {
setOpen(open === id ? null : id);
};

return (
<section className='FAQ px-10 '>
    <h2 className='text-white text-4xl text-center mb-10 uppercase'>FAQs</h2>
    <div className='accordion'>
    {data.map((faq) => {
        const { id, ques, ans } = faq;
        return (
        <Accordion
            key={id}
            icon={<Icon id={id} open={open} />}
            open={open === id}
            onClick={() => handleOpen(id)}
        >
            <AccordionHeader
            className='capitalize'
            ><div className='accordion-content'>{ques}</div></AccordionHeader>
            <AccordionBody><div className='accordion-content'>{ans}</div></AccordionBody>
        </Accordion>
        );
    })}
    </div>
</section>
);
};

export default FAQ;