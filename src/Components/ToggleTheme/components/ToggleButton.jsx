import useTheme from "../context/Theme"


function ToggleButton() {
    const { themeMode, darkTheme, lightTheme } = useTheme();
    console.log(themeMode)

    const onChangeBtn = (e) => {
        const status = e.currentTarget.checked
        if (status) {
            darkTheme();
        } else {
            lightTheme();
        }
    }

    return (
        <div className="bg-white rounded px-2 py-1">
            <input
                className="cursor-pointer"
                type="checkbox"
                value=""
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <span className="ml-2 font-semibold">Toggle</span>
        </div>
    )
}

export default ToggleButton