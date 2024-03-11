import useTheme from "../context/Theme"

function Card() {
    const { themeMode } = useTheme();

    return (
        <div
            className="h-[200px] 
        w-[200px]
        rounded-lg
        shadow-lg 
        bg-white 
        dark:bg-gray-800 
        text-black 
        dark:text-white
        flex items-center justify-center text-xl 
        font-semibold
        ">
            {themeMode.toUpperCase()}
        </div>
    )
}

export default Card