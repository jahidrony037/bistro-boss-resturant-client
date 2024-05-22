import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </>
);
