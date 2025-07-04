import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router";

const Dropdown = ({ text, links }) => {
  return (
    <div className="relative inline-block group">
      <button className="relative  cursor-pointer py-3 text-base  font-medium text-indigo-900 hover:text-indigo-900/60 transition-all duration-300 overflow-hidden">
        <span className="relative flex items-center gap-1">
          {text} <FaAngleDown className="text-xl" />
        </span>
      </button>
      <div className="absolute  opacity-0 invisible group-hover:visible group-hover:opacity-100 top-full left-1/2 -translate-x-1/2  w-74 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
        <ul className="relative py-2 bg-white rounded-lg">
          {links.map(({ text, path }, key) => (
            <li key={key} className="w-full px-2 rounded-lg overflow-hidden">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-base w-full font-poppins block py-2  pl-2   hover:bg-gray-200 hover:text-orange-600 ${
                    isActive
                      ? " bg-gray-200 text-orange-600"
                      : " text-indigo-900 "
                  }`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
