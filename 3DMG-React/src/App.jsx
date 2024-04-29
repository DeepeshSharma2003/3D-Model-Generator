import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThreeD_ModelGeneration from "./components/ThreeD_ModelGeneration";
import MultiViewImage from "./components/MultiViewImage";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Login from "./components/Login";
import ErrorPage from "./error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/3-D Model Generation",
      element: (
        <>
          <Navbar />
          <ThreeD_ModelGeneration />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/Multi-View Image Generation",
      element: (
        <>
          <Navbar />
          <MultiViewImage />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/Gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
