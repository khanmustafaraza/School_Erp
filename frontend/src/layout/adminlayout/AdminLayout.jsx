import Left from "components/left/Left";
import Top from "components/top/Top";
// import { useTheme } from "../../context/themecontext/ThemeContext";
import { FaArrowAltCircleUp, FaSchool } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  FaIcons,
  MdIcons,
  PiIcons,
  SiIcons,
  GiIcons,
} from "components/icons/Icons";
import Footer from "../../components/footer/Footer";

const AdminLayout = ({ children }) => {
  // const { theme } = useTheme();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { FaEnvelopeOpenText, FaUser } = FaIcons;
  const { MdOutlineDashboard } = MdIcons;
  const { PiStudentBold } = PiIcons;
  const { SiGoogleclassroom } = SiIcons;
  // const { GiSunglasses } = GiIcons;
  const adminNavItems = [
    {
      id: 0,
      title: "Dashboard",
      icon: <MdOutlineDashboard />,
      link: "/admin/admin-dashboard",
    },
    {
      id: 1,
      title: "School Management",
      icon: <FaSchool />,
      link: "/admin/school-management",
    },
    {
      id: 2,
      title: "Enquiry List",
      icon: <FaEnvelopeOpenText />,
      link: "/admin/enquiry-management",
    },

    {
      id: 3,
      title: "User Management",
      icon: <FaUser />,
      link: "/admin/user-management",
    },
    {
      id: 4,
      title: "Class Mangament",
      icon: <FaEnvelopeOpenText />,
      link: "/admin/class-management",
    },
    {
      id: 5,
      title: "Student List",
      icon: <PiStudentBold />,
      link: "/admin/student-list",
    },
    {
      id: 6,
      title: "Class Teachers List",
      icon: <SiGoogleclassroom />,
      link: "/admin/classteacher-management/classteacher-list",
    },
  ];
  return (
    <>
      <div
        className="flex min-h-screen text-gray-900"
        // className={
        //   theme
        //     ? "flex min-h-screen text-gray-900"
        //     : "flex min-h-screen text-white bg-black transition-all"
        // }
      >
        {/* Sidebar Navigation */}

        <Left data={adminNavItems} />

        {/* Main Content Area */}
        <div className="flex flex-col w-full sm:w-[70%] lg:w-[85%] xl:w-[87%]">
          {/* Top Navigation */}
          <header
          // className={
          //   theme
          //     ? "border-b shadow-sm py-2 px-4"
          //     : "border-b bg-black shadow-sm py-2 px-4"
          // }
          >
            <Top />
          </header>

          {/* Page Content */}
          <main className="flex-1 p-1 sm:p-[2px] relative">
            {children}

            {/* Back to Top Button */}
            {showButton && (
              <>
                <button
                  onClick={scrollToTop}
                  data-tooltip-target="tooltip-top"
                  data-tooltip-placement="left"
                  className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110 z-50"
                >
                  <FaArrowAltCircleUp className="text-2xl" />
                </button>

                <div
                  id="tooltip-top"
                  role="tooltip"
                  className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 tooltip dark:bg-gray-700"
                >
                  Back to Top
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AdminLayout;
