/* eslint-disable react/prop-types */

import { useId } from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {

    const amountId = useId();
    return (
        <div className={`bg-white border-black border-2 p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label
                    htmlFor={amountId}
                    className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e) => onAmountChange &&
                        onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>

                        ))
                    }


                </select>
            </div>
        </div>
    );
}

export default InputBox;
