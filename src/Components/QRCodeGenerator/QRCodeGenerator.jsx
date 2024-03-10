import { useState } from "react"
import QRCode from "react-qr-code"


function QRCodeGenerator() {
    const [input, setInput] = useState("")
    const [qrCode, setQrCode] = useState("")

    function handleGenrate() {
        setQrCode(input);
        setInput('')
    }

    return (
        <div className="h-screen flex bg-slate-300 flex-col items-center justify-center gap-3 p-5">
            <input
                onChange={(e) => setInput(e.target.value)}
                className="border-2 border-black"
                name="qr-code"
                type="text"
                value={input}
                placeholder="Enter a value" />
            <button
                className={input && input.trim() !== "" ? "bg-black px-2 py-1 text-white rounded font-semibold"
                    : "bg-gray-500 px-2 py-1 text-white rounded font-semibold"}
                disabled={!(input && input.trim() !== "")}
                onClick={handleGenrate}
            >Generate</button>
            <QRCode
                id="qr-code"
                value={qrCode} size={400} />
        </div>
    )
}

export default QRCodeGenerator