import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthAppProvider } from "adminContext/authcontext/AuthContext.jsx";
// import { ClassAppProvider } from "adminContext/classcontext/ClassContext.jsx";
// import { ClassTeacherAppProvider } from "adminContext/classteachercontext/ClassTeacherContext.jsx";
// import { StudentAppProvider } from "adminContext/studentcontext/StudentContext.jsx";
import "./index.css";
// import { ThemeAppProvider } from "./context/themecontext/ThemeContext.jsx";
import { AuthAppProvider } from "./store/authcontext/AuthContext.jsx";
import { ClassAppProvider } from "./store/admincontext/classcontext/ClassContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ThemeAppProvider> */}
    <AuthAppProvider>
      <ClassAppProvider>
          {/* <ClassTeacherAppProvider>
            <StudentAppProvider> */}
      <App />
      {/* </StudentAppProvider>
          </ClassTeacherAppProvider> */}
        </ClassAppProvider>
    </AuthAppProvider>
    {/* </ThemeAppProvider> */}
  </BrowserRouter>
);
