import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";

// elements
import Home from "./pages/Home";

// layouts
import RootLayout from "./layouts/RootLayout";
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App; 