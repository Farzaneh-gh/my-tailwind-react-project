import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
function RoadMap() {
  return (
    <section className="pt-10 md:pt-40" id="roadmaps">
      <div className="container relative">
        <SectionHeader
          title="نقشه راه یادگیری"
          subtitle="نقشه های راه برای شروع اصولی یادگیری"
          btnShow={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-8">
          {/* Item 1 */}
          <div className="py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden rounded-xl">
            <a
              href="https://sabzlearn.ir/course-cat/front-end/"
              className="flex flex-col justify-center items-center h-full"
              title="فرانت اند"
            >
              <svg
                className="w-10 sm:w-12 sm:h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 44.8125H15M33.1875 14.7188L36.8641 18.3866C37.962 19.4812 37.962 21.2558 36.8641 22.3504L33.1875 25.9688M15 14.7188L11.3234 18.3866C10.2255 19.4812 10.2255 21.2558 11.3234 22.3504L15 25.9688M21.9375 27.8438L26.25 12.8438M46.125 12.5625V27.9375C46.125 33.1151 41.9276 37.3125 36.75 37.3125H11.248C6.07144 37.3125 1.875 33.1161 1.875 27.9395V12.5625C1.875 7.38487 6.07237 3.1875 11.25 3.1875H36.75C41.9276 3.1875 46.125 7.38487 46.125 12.5625Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-center text-white mt-3 sm:mt-4">
                <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">
                  فرانت اند
                </h3>
                <span className="inline-block font-danaMedium text-sm sm:text-base">
                  30 دوره
                </span>
              </div>
            </a>
          </div>

          {/* Item 2 */}
          <div className="py-5 bg-gradient-to-r from-[#30C5E4] to-[#28E55D] overflow-hidden rounded-xl">
            <a
              href="https://sabzlearn.ir/course-cat/security/"
              className="flex flex-col justify-center items-center h-full"
              title="امنیت"
            >
              <svg
                className="w-10 sm:w-12 sm:h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M42.9536 13.0656C42.93 12.5461 42.9167 12.0367 42.9092 11.5333C42.8808 9.61376 41.3707 8.04729 39.454 7.94022C33.5919 7.61276 29.0073 5.66285 25.1349 1.88838C24.4869 1.29438 23.515 1.29438 22.867 1.88838C18.9945 5.66285 14.41 7.61276 8.54786 7.94022C6.63114 8.04729 5.12102 9.61376 5.09252 11.5332C5.08511 12.0367 5.0718 12.5461 5.04817 13.0656C4.83274 24.3778 4.50977 39.8814 23.3253 46.4423C23.4152 46.4737 23.5077 46.4988 23.6011 46.5174C23.8654 46.5702 24.1364 46.5702 24.3998 46.5176C24.4937 46.4988 24.5869 46.4735 24.6774 46.4419C43.4383 39.881 43.1691 24.4314 42.9536 13.0656Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M34.5384 24C34.5384 29.8202 29.8203 34.5384 24.0002 34.5384C18.1801 34.5384 13.4619 29.8202 13.4619 24C13.4619 18.1798 18.1801 13.4617 24.0002 13.4617C29.8203 13.4617 34.5384 18.1798 34.5384 24Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M28.4274 21.2858L21.885 27.8282"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.385 25.328L21.8851 27.8282"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-center text-white mt-3 sm:mt-4">
                <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">
                  امنیت
                </h3>
                <span className="inline-block font-danaMedium text-sm sm:text-base">
                  9 دوره
                </span>
              </div>
            </a>
          </div>

          {/* Item 3 */}
          <div className="py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden rounded-xl">
            <a
              href="https://sabzlearn.ir/course-cat/front-end/"
              className="flex flex-col justify-center items-center h-full"
              title="فرانت اند"
            >
              <svg
                className="w-10 sm:w-12 sm:h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 44.8125H15M33.1875 14.7188L36.8641 18.3866C37.962 19.4812 37.962 21.2558 36.8641 22.3504L33.1875 25.9688M15 14.7188L11.3234 18.3866C10.2255 19.4812 10.2255 21.2558 11.3234 22.3504L15 25.9688M21.9375 27.8438L26.25 12.8438M46.125 12.5625V27.9375C46.125 33.1151 41.9276 37.3125 36.75 37.3125H11.248C6.07144 37.3125 1.875 33.1161 1.875 27.9395V12.5625C1.875 7.38487 6.07237 3.1875 11.25 3.1875H36.75C41.9276 3.1875 46.125 7.38487 46.125 12.5625Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-center text-white mt-3 sm:mt-4">
                <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">
                  فرانت اند
                </h3>
                <span className="inline-block font-danaMedium text-sm sm:text-base">
                  30 دوره
                </span>
              </div>
            </a>
          </div>
          {/* Item 4 */}
          <div className="py-5 bg-gradient-to-r from-[#30C5E4] to-[#28E55D] overflow-hidden rounded-xl">
            <a
              href="https://sabzlearn.ir/course-cat/security/"
              className="flex flex-col justify-center items-center h-full"
              title="امنیت"
            >
              <svg
                className="w-10 sm:w-12 sm:h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M42.9536 13.0656C42.93 12.5461 42.9167 12.0367 42.9092 11.5333C42.8808 9.61376 41.3707 8.04729 39.454 7.94022C33.5919 7.61276 29.0073 5.66285 25.1349 1.88838C24.4869 1.29438 23.515 1.29438 22.867 1.88838C18.9945 5.66285 14.41 7.61276 8.54786 7.94022C6.63114 8.04729 5.12102 9.61376 5.09252 11.5332C5.08511 12.0367 5.0718 12.5461 5.04817 13.0656C4.83274 24.3778 4.50977 39.8814 23.3253 46.4423C23.4152 46.4737 23.5077 46.4988 23.6011 46.5174C23.8654 46.5702 24.1364 46.5702 24.3998 46.5176C24.4937 46.4988 24.5869 46.4735 24.6774 46.4419C43.4383 39.881 43.1691 24.4314 42.9536 13.0656Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M34.5384 24C34.5384 29.8202 29.8203 34.5384 24.0002 34.5384C18.1801 34.5384 13.4619 29.8202 13.4619 24C13.4619 18.1798 18.1801 13.4617 24.0002 13.4617C29.8203 13.4617 34.5384 18.1798 34.5384 24Z"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M28.4274 21.2858L21.885 27.8282"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.385 25.328L21.8851 27.8282"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-center text-white mt-3 sm:mt-4">
                <h3 className="font-danaDemiBold sm:text-lg mb-0 sm:mb-1">
                  امنیت
                </h3>
                <span className="inline-block font-danaMedium text-sm sm:text-base">
                  9 دوره
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 translate-x-2/3 -translate-y-[60%] w-60 h-60 bg-red-500 opacity-25 blur-[125px] -z-10 rounded-full"></div>
      </div>
    </section>
  );
}

export default RoadMap;
