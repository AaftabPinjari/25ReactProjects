import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import Card from "./components/Card";
import ToggleButton from "./components/ToggleButton";

//Toggling dark mode with the help of Context Api
function ToggleTheme() {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => {
        setThemeMode("dark")
    }
    const lightTheme = () => {
        setThemeMode("light")
    }

    //changing theme
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
            <div className="h-screen bg-slate-300   flex flex-col items-center justify-center gap-5">
                <h1 className="text-lg font-bold">ContextAPI Theme Toggle</h1>
                {/*Card */}
                <Card />
                {/*toggle button */}
                <ToggleButton />

            </div>
        </ThemeProvider>
    )
}

export default ToggleTheme;