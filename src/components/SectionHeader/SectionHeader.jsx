import { Link } from "react-router-dom";
import React from "react";

function SectionHeader({ title, subtitle ,btnShow=true,ref}) {

  return (
    <div className="flex flex-col  justify-between ">
      <div className="flex  flex-col  gap-y-0.5 md:gap-y-1.5 ">
        <h4 className="font-MorabbaBold text-lg md:text-2xl xl:text-3xl text-zinc-700  leading-8 md:leading-12 dark:text-white">
          {title}
        </h4>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        {subtitle && (
          <p className="font-MorabbaLight  text-lg md:text-3xl leading-8 md:leading-12 text-zinc-700 dark:text-white">
            {subtitle}
          </p>
        )}
        {btnShow && (
          <a
            href="#"
            className="   flex gap-x-0 md:gap-x-1 px-3 py-1 items-center font-Dana text-orange-300 bg-none hover:bg-orange-300/20 rounded-lg text-base md:text-xl tracking-tightest"
          >
            <Link to={ref} className="md:hidden">مشاهده همه</Link>
            <Link to={ref} className="hidden md:inline">مشاهده همه محصولات</Link>
            <svg className="w-5 h-5 text-orange-300">
              <use href="#icon-chevron" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
