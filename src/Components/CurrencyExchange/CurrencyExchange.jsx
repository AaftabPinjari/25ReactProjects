// import { useCurrencyInfo } from '../../hooks/useCurrenceyInfo.js'
import { useState } from 'react';
import InputBox from './InputBox.jsx'
import useCurrencyInfo from "./hooks/useCurrenceyInfo.js"
function CurrencyExchange() {




    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(fromCurrency);
    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setConvertedAmount(amount);
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[toCurrency])
    }


    return (
        <div className="w-full p-4 bg-slate-300 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border-2 border-gray-900 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                selectedCurrency={fromCurrency}


                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md bg-black text-white px-2 py-0.5"
                                onClick={swap}
                            >swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                selectedCurrency={toCurrency}
                                amountDisabled

                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CurrencyExchange;