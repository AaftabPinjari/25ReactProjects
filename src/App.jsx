import { Accordian, LoadMore, NestedMenu, RandomColorGenerator, StarRating } from "./Components"


function App() {


  return (
    <>
      {/*
      
      <NestedMenu />
    */}
      <Accordian />
      <RandomColorGenerator />
      <StarRating noOfStars={5} />
      <LoadMore />
    </>
  )
}

export default App
