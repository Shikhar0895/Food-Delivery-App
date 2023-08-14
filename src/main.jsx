import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/globals.css";
import { BrowserRouter } from "react-router-dom";
// import Error from "./Components/Error";
// import AboutUS from "./Components/AboutUs";
// import Cart from "./Components/Cart.jsx";
// import Help from "./Components/Help.jsx";
// import Body from "./Components/Body.jsx";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/Help",
//         element: <Help />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/Cart",
//         element: <Cart />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/AboutUS",
//         element: <AboutUS />,
//         errorElement: <Error />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
