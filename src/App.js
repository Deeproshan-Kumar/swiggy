import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {
  Home,
  About,
  RestaurantPage,
  Offers,
  Help,
  SignIn,
  Cart,
} from "./pages/index";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RouteError from "./components/errors/RouteError";
import { ThemeContextProvider } from "../src/contexts/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <main className="w-full font-poppins">
        <Outlet />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
      },
      {
        path: "/offers-near-me",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <RouteError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);