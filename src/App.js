import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Allcountries from "./Components/Allcountries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Allcountries/>
  },
]);






function App(){
  return(
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App;