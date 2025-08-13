import React, { useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function Sidebar({
  toggleDarkMode,
  darkMode,
  closeSidebar,
  openMobileCartSidebarHandler,
}) {
  const [menus, setMenus] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
const { isLoggedIn } = useContext(AuthContext);
  const { userInfo ,logout} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/menus`)
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.map((menu) => ({
          ...menu,
          submenus: Array.isArray(menu.submenus) ? menu.submenus : [],
        }));
        setMenus(normalized);
      });
  }, []);

  const toggleSubmenu = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleLogout = () => {
swal({
  title: "آیا از خروج از حساب کاربری اطمینان دارید؟",
  icon: "warning",
  buttons: ["نه", "آره"],
}).then((result) => {
  if (result) {
    logout();
    navigate("/");
  }
})
  };
  return (
    <div className="lg:hidden relative">
      <div className="bg-white dark:bg-zinc-700 w-64 min-h-screen fixed top-0 right-0 bottom-0 z-[101] px-4 pt-3 overflow-y-auto">
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pb-5 border-b border-gray-100 dark:border-white/10 mb-6">
          <div className="flex items-center gap-x-3.5">
            <svg className="w-10 h-10">
              <use href="#icon-app-logo" />
            </svg>
            <svg className="w-[100px] h-10 text-orange-300">
              <use href="#icon-app-logo-type" />
            </svg>
          </div>
          <button onClick={closeSidebar}>
            <svg className="w-5 h-5 text-zinc-600 dark:text-white">
              <use href="#icon-close" />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-6 text-zinc-600 dark:text-white">
          <li className="bg-orange-200/20 py-2 text-orange-300 rounded-md">
            <a
              href="#"
              className="inline-flex  pt-1  pr-2 justify-center gap-x-4"
            >
              <svg className="w-5 h-5 text-orange-300">
                <use href="#icon-home" />
              </svg>
              <span>صفحه اصلی</span>
            </a>
          </li>

          {menus.map((menu, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                <Link
                  to="#"
                  className="inline-flex items-center gap-x-4 text-zinc-700 dark:text-white"
                >
                  <span>{menu.title}</span>
                </Link>
                {menu.submenus.length > 0 && (
                  <button onClick={() => toggleSubmenu(index)}>
                    <svg className="w-4 h-4 text-zinc-800 dark:text-orange-300">
                      <use href="#icon-chevron-down" />
                    </svg>
                  </button>
                )}
              </div>

              {menu.submenus.length > 0 && (
                <div
                  className={`flex flex-col gap-y-3 mt-3 pr-7 text-sm leading-6 text-zinc-600 dark:text-white transition-all delay-75 ${
                    openIndex === index ? "visible flex" : "invisible hidden"
                  }`}
                >
                  {menu.submenus.map((submenu, subIndex) => (
                    <Link key={subIndex} to={submenu.href} onClick={closeSidebar}>
                      {submenu.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-y-6 items-start mt-8 border-t border-gray-100 dark:border-white/10 pt-8 text-orange-300">
          {isLoggedIn ? (
            <>
              <div className="flex items-center justify-between w-full">
                <Link to="/" className="flex items-center gap-x-2">
                  <svg className="w-5 h-5">
                    <use href="#icon-user" />
                  </svg>
                  <span>{userInfo.name}</span>
                </Link>
                <svg className="w-4 h-4 text-zinc-800 dark:text-orange-300"
                onClick={() => setOpenUserDropdown(!openUserDropdown)}>
                  <use href="#icon-chevron-down" />
                </svg>
              </div>
              <div
                className={`flex flex-col gap-y-3 mt-3 pr-7 text-sm leading-6 text-zinc-600 dark:text-white transition-all delay-75 ${
                 openUserDropdown? "visible flex" : "invisible hidden"
                }`}
              >
                <Link to="/profile" className="flex items-center gap-x-2">
                  <svg className="w-5 h-5">
                    <use href="#icon-user" />
                  </svg>
                  <span>پروفایل</span>
                </Link>
                <button onClick={()=>{handleLogout();closeSidebar()}}  className="flex items-center gap-x-2">
                  <svg className="w-5 h-5">
                    <use href="#icon-logout" />
                  </svg>
                  <span>خروج</span>
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="flex items-center gap-x-2" >
              <svg className="w-5 h-5">
                <use href="#icon-user" />
              </svg>
              <span>ورود</span>
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className="inline-flex items-center gap-x-2"
          >
            <svg className="w-5 h-5 text-orange-300">
              <use href={darkMode ? "#icon-sun" : "#icon-moon"} />
            </svg>
            <span>{darkMode ? "روشن" : "تاریک "}</span>
          </button>

          <button
            onClick={()=>{
              openMobileCartSidebarHandler();
              closeSidebar();
            }}
            className="inline-flex items-center gap-x-2"
          >
            <svg className="w-5 h-5 text-orange-300">
              <use href="#icon-shopping-cart" />
            </svg>
            <span>سبد خرید</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[100]"
        onClick={closeSidebar}
      ></div>
    </div>
  );
}

export default Sidebar;
