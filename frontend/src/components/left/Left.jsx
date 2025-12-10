import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/themecontext/ThemeContext";
import { FaIcons, GiIcons } from "../icons/Icons";

const Left = ({ data }) => {
  const { handleTheme } = useTheme();
  const { FaMoon, FaSun } = FaIcons;
  const { GiSunglasses } = GiIcons;

  return (
    <div
      className="w-[40%] xl:w-[15%] lg:w-[20%] md:w-[26%] sm:w-[30%]
      bg-gradient-to-b from-gray-800 via-gray-900 to-black
text-gray-500
 border-r border-gray-200 min-h-screen flex flex-col justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <div className="w-9 h-9 flex items-center justify-center bg-blue-100 rounded">
          <GiSunglasses className="text-lg text-blue-600" />
        </div>
        <h1 className="font-medium text-base text-gray-700">
          Krishna School
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-3">
        {data?.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            title={item.title}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-sm mx-2
              transition-colors
              ${isActive
                ? "text-blue-900 bg-blue-50"
                : "text-white hover:bg-gray-600"}`
            }
          >
            <div className="text-lg">{item.icon}</div>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2 font-medium">Theme</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleTheme("dark")}
            className="w-7 h-7 flex items-center justify-center
            bg-gray-800 hover:bg-gray-700 transition rounded"
          >
            <FaMoon className="text-white text-xs" />
          </button>

          <button
            onClick={() => handleTheme("light")}
            className="w-7 h-7 flex items-center justify-center
            bg-gray-200 hover:bg-gray-300 transition rounded"
          >
            <FaSun className="text-yellow-500 text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
