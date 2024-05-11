import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThreeD_ModelGeneration from "./components/ThreeD_ModelGeneration";
import MultiViewImage from "./components/MultiViewImage";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import ErrorPage from "./error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
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
          <Footer />
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
          <Footer />
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
          <Footer />
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
          <Footer />
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

// https://getcssscan.com/css-box-shadow-examples ----- box shadow designs
