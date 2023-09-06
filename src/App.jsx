import {Routes,Route} from "react-router-dom"
import Mainpage from "./pages/Main"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
    </Routes>
  )
}

export default App
