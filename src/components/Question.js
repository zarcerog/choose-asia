import { useState } from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Question({question, answer}) {
    const [expand, setExpand] = useState(false);
    const expandClass = expand ? 'display' : 'hidden';
    const ansClass = `${expandClass} p-4`

    return (
        <div className='shadow rounded border border-gray-100 border-t-0'>
            <div className='p-4 text-xl relative font-medium'>
                <div className='w-5/6'>
                    {question}
                </div>
                <button aria-label='question-expander' 
                        className='text-xl absolute top-0 right-0 p-4 focus:outline-none'
                        onClick={() => setExpand(!expand)}>
                    {expand ? <FaChevronUp className='w-5'></FaChevronUp> : <FaChevronDown className='w-5'></FaChevronDown>}
                </button>
            </div>
            <div className={ansClass}>
                {answer}
            </div>
        </div>
    )
}

export default Question;