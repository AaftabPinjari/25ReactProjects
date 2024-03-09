/* eslint-disable react/prop-types */

import MenuItem from "./MenuItem"


function MenuList({ list = [] }) {

    // console.log(list)
    return (
        <ul className="mt-0 mb-0 flex flex-col">
            {
                list && list.length ? list.map((item) => (
                    <MenuItem key={item.label} item={item} />
                ))
                    : <div>No Menu Present</div>}
        </ul>
    )
}

export default MenuList