import { useState } from "react"


function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState("#cbd5e1")

    function colorGeneratorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleHexColor() {
        setTypeOfColor('hex')
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[colorGeneratorUtility(hex.length)]
        }
        setColor(hexColor)


    }
    function handleRgbColor() {
        setTypeOfColor('rgb')
        let r = colorGeneratorUtility(256)
        let g = colorGeneratorUtility(256)
        let b = colorGeneratorUtility(256)
        setColor(`rgb(${r},${g},${b})`)

    }

    return (
        <>
            <div className="h-screen w-full p-4" style={{ backgroundColor: color }}>
                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={() => { handleHexColor() }}
                        className="bg-white rounded p-1 font-semibold  shadow-xl border-black border-2">Hex Color</button>
                    <button
                        onClick={() => { handleRgbColor() }}
                        className="bg-white rounded p-1 font-semibold  shadow-xl border-black border-2">RGB Color</button>
                    <button
                        onClick={typeOfColor == 'hex' ? () => handleHexColor() : () => handleRgbColor()}
                        className="bg-white rounded p-1 font-semibold  shadow-xl border-black border-2">Generate Random Color</button>
                </div>
                <div className="mt-44 text-center">
                    <h3 className="text-4xl font-bold">{color}</h3>
                </div>
            </div>

        </>
    )
}

export default RandomColorGenerator