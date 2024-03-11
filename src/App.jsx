import { Outlet } from "react-router-dom"
import { Header } from "./Projects"


function App() {


  return (
    <>
      {/*layout component outlet allows */}
      <Header />
      <Outlet />
    </>
  )
}

export default App
