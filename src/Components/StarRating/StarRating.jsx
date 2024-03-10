/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(currIdx) {
        setRating(currIdx)
    }
    function handleMouseEnter(currIdx) {
        setHover(currIdx)

    }
    function handleMouseLeave() {
        setHover(rating)
    }



    return (
        <div className="h-screen flex flex-col gap-8 p-3 text-center justify-center items-center bg-slate-300">
            <div className='text-2xl font-semibold'>How are you Liking my Projects?</div>
            <div className='flex flex-wrap'>
                {[...Array(noOfStars)].map((_, idx) => {
                    idx += 1
                    return (
                        <FaStar
                            size={40}
                            key={idx}
                            // style={{idx <= (hover || rating ) ? color:"yellow" : color: "black"}}
                            className={idx <= (hover || rating) ? 'fill-amber-400' : 'fill-slate-700'}
                            onClick={() => handleClick(idx)}
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    )
                })}
            </div>
            <h3 className='text-2xl font-semibold'>Rating : <span className='text-rose-500 font-bold'>{rating}</span></h3>
        </div>
    )
}

export default StarRating