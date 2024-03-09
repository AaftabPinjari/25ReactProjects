/* eslint-disable react/prop-types */

import { useState } from "react"
import MenuList from "./MenuList"


function MenuItem({ item }) {
    const [displaychildren, setDisplayChildren] = useState({})

    // console.log(item)
    function toggleChildrenDisplay(currLabel) {
        setDisplayChildren({
            ...displaychildren,
            [currLabel]: !displaychildren[currLabel],
        })
        console.log(displaychildren)
    }

    return (
        <li >
            <div className="flex w-1/2 justify-center gap-2 p-1">
                <p>{item.label}</p>
                {item && item.children && item.children.length ?
                    (<span
                        className="cursor-pointer"
                        onClick={() => toggleChildrenDisplay(item.label)}>
                        {displaychildren[item.label] ? "-" : "+"}
                    </span>)
                    : null}
            </div>
            {
                item && item.children && item.children.length > 0 && displaychildren[item.label] ?
                    (<MenuList list={item.children} />)
                    : null

            }
        </li>
    )
}

export default MenuItem