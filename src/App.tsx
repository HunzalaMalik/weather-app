import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./features/HomePage"
import Weather from "./features/weather/Weather"
import Cities from "./features/cities/Cities"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="" element={<Weather />} />
            <Route path="cities" element={<Cities />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
