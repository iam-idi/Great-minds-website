import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
// elements
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
// layouts
import RootLayout from "./layouts/RootLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="blogs" element={<Blogs />}/>
          <Route path="blogs/:id" element={<Blog />}/>
          <Route path="team" element={<Team />}/>
      </Route>
          <Route path="*" element={<NotFound />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App; 