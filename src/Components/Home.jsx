import { Link } from "react-router-dom"


function Home() {
    return (
        <div className="h-full flex flex-col items-center justify-evenly gap-4 py-5">
            <h1 className="text-3xl font-bold">25 React Projects</h1>
            {/*Projects container */}
            <div className="border-2 border-black gap-2  grid grid-cols-2 lg:grid-cols-5 p-3">
                {/*Project card */}
                {
                    projects.map((project) => (
                        <Link to={project.url} key={project.id} className="h-20 bg-slate-200 p-2 text-center flex items-center justify-center border-2 border-black rounded shadow-lg">{project.name}</Link>
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
        name: "Scroll progress",
        url: ""
    },
    {
        id: 8,
        name: "Light Dark Toggle",
        url: ""
    },
    {
        id: 9,
        name: "Tic Tac Toe",
        url: ""
    },
    {
        id: 10,
        name: "Tabs",
        url: ""
    },
    {
        id: 11,
        name: "Github Profile finder",
        url: ""
    },
    {
        id: 12,
        name: "Feature Flag",
        url: ""
    },
    {
        id: 13,
        name: "Scroll to top and Bottom",
        url: ""
    },
    {
        id: 14,
        name: "Modal Popup",
        url: ""
    },
]