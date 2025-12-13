import { NavLink } from "react-router-dom";
import { FaIcons, GiIcons } from "../icons/Icons";

const Left = ({ data }) => {
  const { FaMoon, FaSun } = FaIcons;
  const { GiSunglasses } = GiIcons;

  return (
    <div
      className="w-[40%] xl:w-[15%] lg:w-[20%] md:w-[26%] sm:w-[30%]
      bg-white text-gray-700 border-r border-gray-200
      min-h-screen flex flex-col justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200">
        <div className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-md">
          <GiSunglasses className="text-xl text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-gray-900 text-sm">School ERP</h1>
          <p className="text-xs text-gray-500 mt-0.5">Admin Panel</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-3 px-2 space-y-1">
        {data?.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `group flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition
              ${isActive 
                ? "bg-emerald-100 text-emerald-800 font-semibold" 
                : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"}`
            }
          >
            <span className={`text-lg flex-shrink-0 ${"text-gray-400 group-hover:text-emerald-600"}`}>
              {item.icon}
            </span>
            <span>{item.title}</span>
            <span className="ml-auto h-5 w-1 rounded bg-transparent group-hover:bg-emerald-600" />
          </NavLink>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="px-4 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
          Theme
        </p>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-900 hover:bg-gray-800 transition">
            <FaMoon className="text-white text-xs" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition">
            <FaSun className="text-amber-500 text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
