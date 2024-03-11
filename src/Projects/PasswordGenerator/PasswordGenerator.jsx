import { useEffect, useRef } from "react";
import { useState } from "react"
import { useCallback } from "react"


function PasswordGenerator() {
    const [length, setLength] = useState(10);
    const [numsAllowed, setNumsAllowed] = useState(false);
    const [charsAllowed, setCharsAllowed] = useState(false);
    const [password, setPassword] = useState('');

    //useEffect , useCallBack and useRef hook in one project

    const passwordReference = useRef(null)

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCjklDEmnoFGHabcdefghiIJKLMNOPQRSTUVWXYZpqrstuvwxyz"

        if (numsAllowed) {
            str += "1234567890";
        }

        if (charsAllowed) {
            str += "!@#$%^&*";
        }

        for (let i = 0; i <= length; i++) {
            let letter = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(letter)
        }

        setPassword(pass)




    }, [length, numsAllowed, charsAllowed, setPassword])

    const copyToClipboard = useCallback(() => {
        passwordReference.current?.select()
        window.navigator.clipboard.writeText(password);
    }, [password])

    useEffect(() => {
        generatePassword()
    }, [length, numsAllowed, charsAllowed, generatePassword])


    return (
        <>
            <div className="h-screen bg-slate-300 flex flex-col gap-5 items-center justify-start pt-10">
                <h1 className="text-3xl font-semibold">Password Generator</h1>
                <div className="flex flex-col items-center justify-center rounded shadow-lg p-4 bg-white">
                    <div>
                        <input
                            className="p-1 outline-none bg-slate-300 rounded-l"
                            type="text"
                            value={password}
                            readOnly
                            ref={passwordReference}

                        />
                        <button
                            onClick={copyToClipboard}
                            className="bg-gray-600 text-white hover:bg-gray-900 rounded-r p-1">Copy</button>
                    </div>
                    <div className="flex flex-col items-start flex-wrap gap-2">
                        <div className="flex gap-2">
                            <input
                                type="range"
                                name="length"
                                min={4}
                                max={100}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <div className="font-semibold">Length : <span className="text-red-400">{length}</span></div>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                value={numsAllowed}
                                onChange={() => setNumsAllowed((prev) => !prev)}
                            />
                            <div className="font-semibold">Include Numbers</div>
                        </div>
                        <div className="flex gap-2 ">
                            <input
                                type="checkbox"
                                value={charsAllowed}
                                onChange={() => setCharsAllowed((prev) => !prev)}
                            />
                            <div className="font-semibold">Include Characters</div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordGenerator