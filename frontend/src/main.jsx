import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthAppProvider } from "./context/admincontext/authcontext/AuthContext.jsx";
import { ClassAppProvider } from "./context/admincontext/classcontext/ClassContext.jsx";
import { ClassTeacherAppProvider } from "./context/admincontext/classteachercontext/ClassTeacherContext.jsx";
import { ThemeAppProvider } from "./context/themecontext/ThemeContext.jsx";
import { StudentAppProvider } from "./context/admincontext/studentcontext/StudentContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeAppProvider>
      <AuthAppProvider>
        <ClassAppProvider>
          <ClassTeacherAppProvider>
            <StudentAppProvider>
              <App />
            </StudentAppProvider>
          </ClassTeacherAppProvider>
        </ClassAppProvider>
      </AuthAppProvider>
    </ThemeAppProvider>
  </BrowserRouter>
);
