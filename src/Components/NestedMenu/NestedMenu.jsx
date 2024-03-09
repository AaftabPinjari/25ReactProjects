import MenuList from "./MenuList"
import dataList from "./data"


function NestedMenu() {
    // console.log(dataList)
    return (
        <div className="w-screen h-screen">
            <div className="w-1/4 h-full p-4 flex bg-teal-600">
                <MenuList list={dataList} />
            </div>
        </div>
    )
}

export default NestedMenu