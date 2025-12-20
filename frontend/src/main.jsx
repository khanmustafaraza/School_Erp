import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthAppProvider } from "adminContext/authcontext/AuthContext.jsx";
// import { ClassAppProvider } from "adminContext/classcontext/ClassContext.jsx";
// import { ClassTeacherAppProvider } from "adminContext/classteachercontext/ClassTeacherContext.jsx";
// import { StudentAppProvider } from "adminContext/studentcontext/StudentContext.jsx";
import "./index.css";
// import { ThemeAppProvider } from "./context/themecontext/ThemeContext.jsx";
import { AuthAppProvider } from "store/authcontext/AuthContext.jsx";
import { ClassAppProvider } from "store/admincontext/classcontext/ClassContext.jsx";
import { ClassTeacherAppProvider } from "store/admincontext/classteachercontext/ClassTeacherContext.jsx";
import { PageAppProvider } from "store/pagelocationcontext/PageLocationContext.jsx";
import { SchoolAppProvider } from "./store/schoolcontext/SchoolContext.jsx";
import { AdminStudentAppProvider } from "./store/admincontext/adminstudentcontext/AdminStudentContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageAppProvider>
      <SchoolAppProvider>
        {/* <ThemeAppProvider> */}
        <AuthAppProvider>
          <ClassAppProvider>
            <ClassTeacherAppProvider>
              <AdminStudentAppProvider>
                <App />
              </AdminStudentAppProvider>
            </ClassTeacherAppProvider>
          </ClassAppProvider>
        </AuthAppProvider>
      </SchoolAppProvider>
    </PageAppProvider>
    {/* </ThemeAppProvider> */}
  </BrowserRouter>
);
