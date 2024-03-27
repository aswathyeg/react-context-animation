
import { RouterProvider,createBrowserRouter } from "react-router-dom"
import WelcomePage from "./pages/Welcome"
import ChallengePage from "./pages/Challenges"
const router=createBrowserRouter([
{path:'/',element:<WelcomePage/>},
{path:'/challenges',element:<ChallengePage/>}
   ])

function App() {
    return (
   <RouterProvider router={router}/>
  
  )
}

export default App
