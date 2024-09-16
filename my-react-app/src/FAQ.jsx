import React, { useState, useRef, useEffect } from 'react';
import ChevronDown from './assets/img/chevron-down.svg';
import ChevronUp from './assets/img/chevron-up.svg';
import arrowImage from "./assets/img/arrow.svg";


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const bannerRef = useRef(null);

    const faqs = [
        {
            question: "What is PortfoliOH?",
            answer: "PortfoliOH is a comprehensive solution that enables students to own their work-based learning journey. Intuitive interfaces allow students to see WBL opportunities in terms of the skills they will acquire when they participate. During any WBL activity, no matter where or when it occurs in or out of schools, the student captures rich evidence of their experience and self-reported reflections. By seeing experiences as skills acquisition, PortfoliOH reveals to students how the skills they have acquired relate to career pathways they may be interested in. The solution also"
        },
        {
            question: "What need does PortfoliOH solve for students?",
            answer: "Many students find themselves grappling with a lack of self-awareness concerning their own skills and interests, which poses significant hurdles to their academic and career pursuits. Despite concerted efforts by educational institutions and businesses to provide guidance, students often remain ill-equipped to make informed decisions about their educational paths and future careers. This pervasive issue results in a lack of self-confidence, skills mismatches, career transitions fraught with uncertainty, and a missed opportunity to tap into students full potential. It underscores the critical need for more effective strategies, tools, and support systems that empower students to develop self-awareness, enabling them to thrive in an ever-evolving educational and professional landscape."
        },
        {
            question: "What does PortfoliOH do for educators?",
            answer: "PortfoliOH was designed to meet educators where they are at through a detailed understanding of the workflow constraints of the educator’s busy schedule. It reduces the load on educators while fulfilling reporting requirements. Our solutions balance reporting requirements AND accessibility (dashboards vs. reports when appropriate). Our solution not only fulfills this goal, but does so in a way that incentivizes even more engagement, helps the school and the work based provider celebrate and strengthen the partnership to advance students. The solution also eliminates the busy work we have seen in our field interviews. The educators and counselors have more time for quality interactions with students."
        },
        {
            question: "What are the design philosophies behind PortfoliOH’s development?",
            answer: "This solution provides comprehensive collection of student evidence and confirmation/evaluation by educators or supervisors at the work-based learning location. Features of this tool have been developed based on extensive interviews with students, educators, and employers about what they need for the tool to be useful in their context. Of most importance, use of PortfoliOH matches the workflow of educators and employers so that it seamlessly integrates with their daily lives and does not add additional tasks into their busy day. Our user testing shows that the student-centered PortoliOH tool actually reduces the burden for documenting work-based learning."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current.style.marginTop = activeIndex !== null ? '64px' : '0';
        }
    }, [activeIndex]);

    return (
        <>
            <div className="faq-container">
                <div className='main-section'>
                    <h1 className='faq-heading'>
                        Frequently Asked Questions
                    </h1>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'open' : ''}`}
                        >
                            <div
                                className="faq-question"
                                onClick={() => handleToggle(index)}
                            >
                                {faq.question}
                                <img
                                    src={activeIndex === index ? ChevronUp : ChevronDown}
                                    alt="chevron icon"
                                    className="faq-icon" />
                            </div>
                            <div
                                className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="red-banner" ref={bannerRef}>
                <div className="banner-text-content">
                <p className="banner-text1">Get in touch</p>
                <p className="banner-text2">Our friendly team would love to get in touch with you.</p>
                </div>
                <button className="custom-button8">
                    <span className="button-text">Contact Us</span>
                    <img src={arrowImage} alt="arrow" className="arrow-icon" />
                </button>
            </div>
        </>
    );
};

export default FAQ;
