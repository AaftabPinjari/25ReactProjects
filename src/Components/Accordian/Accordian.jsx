import { useState } from 'react';
import data from './data.js'



function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    // single selection

    function handleSingleSelection(currId) {
        setSelected(currId === selected ? null : currId)
    }

    //Multi Selection

    function handleMultipleSelection(currId) {
        let copyofMultiple = [...multiple]

        const indexOfCurrId = copyofMultiple.indexOf(currId);

        if (indexOfCurrId == -1) {
            copyofMultiple.push(currId)
        }
        else {
            copyofMultiple.splice(indexOfCurrId, 1)
        }

        setMultiple(copyofMultiple)
        console.log(multiple)
    }

    return (
        <>
            {/*Container */}
            <div className='h-screen w-full bg-slate-200 flex flex-col items-center justify-evenly py-4'>
                <h1 className='text-3xl'>Accordian</h1>
                <div className='w-3/2'>
                    {/*Question */}
                    {data && data.length > 0 ? data.map(item => (
                        <div className='mb-2 text-lg font-semibold'
                            onClick={enableMultiSelection ? () => handleMultipleSelection(item.id) : () => handleSingleSelection(item.id)}
                            key={item.id}>
                            {/*title */}
                            <div className='flex px-2 py-1 border-b-black border-b-2 items-center justify-between cursor-pointer bg-blue-300'>
                                <h3 className=''>{item.question}</h3>
                                {
                                    enableMultiSelection ? multiple.indexOf(item.id) == -1 &&
                                        <span className='text-2xl'>+</span> : <span className='text-2xl'>-</span> &&
                                            selected && selected === item.id ? <span className='text-2xl'>-</span> : <span className='text-2xl'>+</span>}
                            </div>
                            {
                                enableMultiSelection ? multiple.indexOf(item.id) !== -1 &&
                                    (<div className='h-auto italic w-auto px-2 py-1  bg-blue-300'>{item.answer}</div>)
                                    : selected === item.id &&
                                    (<div className='h-auto italic w-auto px-2 py-1  bg-blue-300'>{item.answer}</div>)
                            }
                            {/*{
                            selected && selected === item.id ?
                                <div className='h-auto italic w-auto px-2 py-1  bg-blue-300'>{item.answer}</div>
                                : null
                        }*/}
                        </div>
                    ))
                        : <div className=''>Data Not Found</div>
                    }
                </div>
                <button
                    className='bg-black text-white rounded p-1 hover:bg-gray-500'
                    onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                >{enableMultiSelection ? "Enable Single Selection" : "Enable Multiple Selection"}
                </button>
            </div>
        </>
    )
}

export default Accordian;









