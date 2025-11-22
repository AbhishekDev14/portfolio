import { useState } from 'react'

export default function ReadMore({ text }) {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <p className={`${expand ? "" : `line-clamp-3 overflow-hidden`} text-gray-300`}>
                {text}
            </p>
            <button onClick={() => setExpand(!expand)} className='mt-2 text-[#21a7eb] font-semibold hover:underline'>
                {expand ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}
