import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item text-black-100 p-4 mb-6">
            <div className="accordion-title flex justify-between items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <div className='flex gap-3 items-center font-work'>
                    <div className='font-poppins lg:text-2xl text-lg font-semibold'>
                        {title}
                    </div>
                </div>
                <div className='bg-blue-100 p-1 text-white-100 w-8 h-8 text-center rounded-full text-xl'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content font-poppins text-white-50 mt-4">{content}</div>}
        </div>
    );
};

export default Accordion
