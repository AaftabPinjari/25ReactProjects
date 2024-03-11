import { Link } from "react-router-dom"


function Header() {
    return (
        <header className="flex bg-slate-300 py-1 justify-center items-center">
            <Link
                to="/"
                className=" bg-black text-white border-2 rounded border-black px-2 py-1">Home</Link>
        </header>
    )
}

export default Header