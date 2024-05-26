import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Router/Router";
import "./index.css";
import AuthProvider from "./providers/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>
  </>
);
