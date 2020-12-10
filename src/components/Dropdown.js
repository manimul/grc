import React, { useState } from 'react';
import { Link } from 'gatsby';

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
                ? `hidden  `
                : `block md:hover:-translate-y-3 md:transition-all duration-500 ease-in-out transform`
            }  md:items-center   md:py-3  md:absolute md:w-32  md:rounded-md  `}
          >
            {subs.map((sub) => (
              <li
                key={sub.title}
                className='md:bg-white md:p-3  md:pl-3 md:-ml-3 inline-block w-full cursor-pointer hover:bg-gray-200 transition-all duration-500 ease-in-out transform'
              >
                <Link
                  to={sub.route}
                  key={sub.title}
                  className='md:text-black text-gray-700 text-sm'
                  activeClassName='font-bold    '
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
