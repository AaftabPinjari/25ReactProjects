import { useEffect } from "react";
import { useState } from "react"


function LoadMore() {
    //https://dummyjson.com/products?skip=0&limit=10

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);


    async function fetchProducts() {
        try {
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/products?skip=${count === 0 ? 0 : count * 20}&limit=20`)
            const data = await res.json();
            if (data && data.products && data.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...data.products])
                setLoading(false)
            }
            // console.log(loading)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length == 100) {
            setDisabledButton(true)
        }
    }, [products])


    if (loading) {
        return <div>Loading please wait!</div>
    }

    return (
        <div className="h-full w-full p-3 bg-slate-300 flex flex-col items-center gap-3">
            <h1 className="text-xl font-bold ">Products</h1>
            {/**products container */}
            <div className="border-black rounded-lg border-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-3">
                {
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="p-3 border-2 shadow-lg rounded-lg border-black flex gap-1 flex-col items-center justify-between"
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-[200px] h-[200px]" />
                            <h1 className="text-sm font-semibold">{product.title}</h1>
                        </div>
                    ))
                }
            </div>
            <button
                disabled={disabledButton}
                className={disabledButton ? "bg-gray-600 text-white p-2 shadow-lg rounded text-lg font-semibold" : "bg-black text-white p-2 shadow-lg rounded text-lg font-semibold"}
                onClick={() => setCount(count + 1)}>
                Load more Products
            </button>
            {disabledButton && <div
                className="text-lg font-semibold text-red-600 text-center"
            >You have Reached the Limit of 100 Products</div>}
        </div>
    )
}

export default LoadMore