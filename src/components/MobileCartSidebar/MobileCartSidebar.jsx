  import React, { useEffect } from "react";
  import CartItem from "../CartItem/CartItem";
  import Cookies from "js-cookie";
  function MobileCartSidebar({ closeMobileCartSidebar }) {
    const [cartItems, setCartItems] = React.useState([]);

    const getCartItems = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("user")}`,
        },
      });
      const data = await res.json();
      setCartItems(data.items);
    };
    useEffect(() => {
      const token = Cookies.get("user");
      if (token) {
        getCartItems();
      }
    }, []);

    const handleDeleteCourse = async (id) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/cart/remove/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("user")}`,
            },
          }
        );

        const data = await res.json();
        if (res.ok) {
          getCartItems();
        } else {
          console.error("Failed to remove item:", data.message);
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    };

    return (
      <div className="relative lg:hidden">
        <div className="flex flex-col fixed top-0 left-0 bottom-0 px-4 w-64 h-screen bg-white dark:bg-zinc-700 z-101 ">
          {/* header */}
          <div className="flex justify-between items-center py-5  border-b-1 border-gray-300 dark:border-white/10 ">
            <div onClick={closeMobileCartSidebar}>
              <svg className="w-5 h-5 text-zinc-600 dark:text-white">
                <use href="#icon-close" />
              </svg>
            </div>
            <span className="font-DanaMedium text-zinc-700 dark:text-white">
              سبد خرید
            </span>
          </div>

          {cartItems.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500 dark:text-white">
                سبد خرید شما خالی است
              </span>
            </div>
          )}
          {/* cart items */}
          <div className=" overflow-y-auto ">
            {cartItems.map((item) => (
              <CartItem
                titleClassNames="text-sm tracking-tighter"
                imageSize="w-22.5 h-22.5"
                key={item.id}
                course={item.productId}
                deleteItem={handleDeleteCourse}
              />
            ))}
          </div>
          {/* footer */}
          <div className=" mb-8  mt-auto flex justify-between items-end pt-5 gap-x-4">
            <a
              href="#"
              className="text-white bg-teal-600 dark:bg-emerald-500 py-2.5 px-2 text-center w-28 rounded-xl font-Dana text-md transition-colors hover:bg-teal-700 dark:hover:bg-emerald-600"
            >
              ثبت سفارش
            </a>

            <div className="flex flex-col ">
              <span className="text-gray-500 text-xs font-DanaMedium tracking-tighter">
                مبلغ قابل پرداخت
              </span>
              <span className="font-DanaDemiBold text-base    text-zinc-700 dark:text-white">
                {cartItems.reduce(
                  (acc, item) => acc + Number(item.productId.price),
                  0
                )}{" "}
                <span className="font-Dana text-sm dark:text-white">تومان</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="overlay fixed inset-0 bg-black/40 z-100 w-full h-full"
          onClick={closeMobileCartSidebar}
        ></div>
      </div>
    );
  }

  export default MobileCartSidebar;
