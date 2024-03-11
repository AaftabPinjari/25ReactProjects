import { Link } from "react-router-dom"


function Home() {
    return (
        <div className="h-full lg:h-screen bg-slate-300 flex flex-col items-center justify-evenly lg:justify-start gap-4 py-5">
            <h1 className="text-3xl font-bold">20 React Projects</h1>
            {/*Projects container */}
            <div className=" gap-2  grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 p-3">
                {/*Project card */}
                {
                    projects.map((project) => (
                        <Link
                            to={project.url}
                            key={project.id}
                            className="h-20 bg-slate-100 hover:bg-slate-400 p-2 font-semibold text-center flex items-center justify-center border-2 border-black rounded shadow-lg">{project.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home

const projects = [
    {
        id: 1,
        name: "Accordian",
        url: "accordian"
    },
    {
        id: 2,
        name: "Random Color Generator",
        url: "random-color-generator"
    },
    {
        id: 3,
        name: "Star Rating",
        url: "star-rating"
    },
    {
        id: 4,
        name: "Image Slider",
        url: ""
    },
    {
        id: 5,
        name: "Load More",
        url: "load-more"
    },
    {
        id: 6,
        name: "Nested Menu",
        url: "nested-menu"
    },
    {
        id: 7,
        name: "QR Code Generator",
        url: "qr-code-generator"
    },
    {
        id: 8,
        name: "Password Generator",
        url: "/password-generator"
    },
    {
        id: 9,
        name: "Currency Exchange",
        url: "currency-exchange"
    },
    {
        id: 10,
        name: "Toggle Theme",
        url: "toggle-theme"
    },
    {
        id: 11,
        name: "Todo App",
        url: "todo-app"
    },
    {
        id: 12,
        name: "Feature Flag",
        url: ""
    },
    {
        id: 13,
        name: "Scroll To Top And Bottom",
        url: ""
    },
    {
        id: 14,
        name: "Tabs",
        url: ""
    },
    {
        id: 15,
        name: "Modal Popup",
        url: ""
    },
    {
        id: 16,
        name: "Tic Tac Toe",
        url: ""
    },
    {
        id: 17,
        name: "Scroll Indicator",
        url: ""
    },
    {
        id: 18,
        name: "Github Profile Finder",
        url: ""
    },
    {
        id: 19,
        name: "Modal Popup",
        url: ""
    },
    {
        id: 20,
        name: "Modal Popup",
        url: ""
    },
]