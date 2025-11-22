import { useState } from 'react'

export default function ReadMore({ text, lines = 3 }) {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <p className={`${expand ? "" : `line-clamp-${lines}`} text-gray-300`}>
                {text}
            </p>
            <button onClick={() => setExpand(!expand)} className='mt-2 text-[#21a7eb] font-semibold hover:underline'>
                {expand ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}
