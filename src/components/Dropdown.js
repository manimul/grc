import React, { useState } from "react";
import { Link } from "gatsby";

function Dropdown({
  key,
  to,
  pageName,
  master,
  subs,
  className,
  activeClassName,
}) {
  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);
  const toggleHover = () => setActive(!isActive);

  //const subs = [
  //{ route: "/this1", title: "this 1" },
  //{ route: "/this2", title: "this 2" },
  // ];

  return (
    <div key={key} className={className}>
      <div onMouseOver={toggleHover} onMouseOut={toggleHover}>
        <Link to={to} activeClassName={activeClassName} master={master}>
          {pageName}
        </Link>
        {subs && (
          <ul
            className={`${
              !isActive
                ? `hidden `
                : `block hover:-translate-y-3 transition-all duration-500 ease-in-out transform`
            }  md:items-center   py-3  absolute w-32  rounded-md  `}
          >
            {subs.map((sub) => (
              <li
                key={sub.title}
                className="bg-white p-3  pl-3 -ml-3 inline-block w-full cursor-pointer hover:bg-gray-200 transition-all duration-500 ease-in-out transform"
              >
                <Link
                  to={sub.route}
                  key={sub.title}
                  className="text-black"
                  activeClassName="font-bold    "
                >
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
