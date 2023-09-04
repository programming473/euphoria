import {Routes,Route} from "react-router-dom"
import Mainpage from "./components/Mainpage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
    </Routes>
  )
}

export default App
