import { useState } from 'react';
import data from './data.js'



function Accordian() {


    const [selected, setSelected] = useState(null);
    function handleSingleSelection(currId) {
        setSelected(currId === selected ? null : currId)
    }

    return (
        <div className='h-[100vh] w-[100vw]  bg-white flex flex-col items-center justify-evenly'>
            {/*COntainer */}
            <h1 className='text-4xl'>Accordian</h1>
            <div className='w-[500px]'>
                {/*Question */}
                {data && data.length > 0 ? data.map(item => (
                    <div className='mb-2 text-lg font-semibold' onClick={() => handleSingleSelection(item.id)} key={item.id}>
                        {/*title */}
                        <div className='flex px-2 py-1 border-b-black border-b-2 items-center justify-between cursor-pointer bg-blue-300'>
                            <h3 className=''>{item.question}</h3>
                            {selected && selected === item.id ? <span className='text-2xl'>-</span> : <span className='text-2xl'>+</span>}
                        </div>
                        {selected && selected === item.id ? <div className='h-auto italic w-auto px-2 py-1  bg-blue-300'>{item.answer}</div> : null}
                    </div>
                ))
                    : <div className=''>Data Not Found</div>
                }

            </div>
        </div>
    )
}

export default Accordian;









