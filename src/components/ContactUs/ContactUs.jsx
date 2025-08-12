import React from "react";
import contact from "../../assets/images/contact.png";
import ContactBox from "./ContactBox";
function ContactUs() {
  return (
    <div className="container mb-16 md:mb-28 ">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-8 md:gap-x-5 px-4 md:px-0">
        <div className="shrink-0">
          <img src={contact} alt="ContactUs" className="max-w-74 " />
        </div>

        <div className="dark:text-white text-zinc-700">
          <h3 className="font-MorabbaMedium text-2xl md:text-5xl mb-0.5 md:mb-1.5">
            با دوره‌های سبزلرن برنامه‌نویس حرفه‌ای شوید!{" "}
          </h3>
          <span className="block font-MorabbaLight text-lg md:text-3xl  leading-8 md:leading-12 mb-5 md:mb-6">
          </span>
          <div className="flex gap-x-2.5 mb-7 md:mb-6">
            <span className=" block w-1 h-1 rounded-full bg-zinc-700 dark:bg-white"></span>
            <span className=" block w-1 h-1 rounded-full  bg-zinc-700 dark:bg-white"></span>
            <span className="block w-1 h-1 rounded-full  bg-zinc-700 dark:bg-white"></span>
          </div>
          <p className="text-base leading-7 pr-6 md:text-2xl md:leading-8  mb-5 md:mb-6 ">
            اگر در ابتدای مسیر یادگیری برنامه‌نویسی قرار دارید یا بعد از چند سال
            فعالیت حرفه‌ای به‌عنوان برنامه‌نویس به‌دنبال فتح قله‌های جدید در این
            حوزه هستید، دوره‌های سبزلرن شما را به هدفتان می‌رسانند. در این
            آکادمی همه چیز برای یادگیری برنامه‌نویسی از صفر یا دریافت آموزش‌های
            تکمیلی برای تبدیل شدن به یک برنامه‌نویس کاربلد مهیا است. در سبزلرن
            دوره‌های آموزشی متنوع با کمترین هزینه و پشتیبانی مستمر آماده شده تا
            بدون نیاز به کتاب یا دوره دیگر، بتوانید صفر تا صد برنامه‌نویسی را
            یاد بگیرید. تجربه‌های دانشجویان قبلی نشان می‌دهد که سبک تدریس اساتید
            مجرب سبزلرن نه تنها آموزش‌های استاندارد را با پروژه‌های واقعی ترکیب
            می‌کند، بلکه به دانشجویان انگیزه و اعتمادبه‌نفس لازم برای ادامه مسیر
            برنامه‌نویسی را می‌دهد. سبزلرن با تمرکز بر آموزش‌های منطبق با
            نیازهای بازار کار ایران و استفاده از روش‌های تدریس بومی‌سازی‌شده،
            تضمین می‌کند که نه تنها مطالب به‌روز و حرفه‌ای را یاد بگیرید، بلکه
            با آمادگی کامل وارد بازار کار شوید.
          </p>

          <a
            href="#"
            className="text-base md:text-xl text-orange-300 inline-flex items-center p-4 gap-x-1 md:gap-x-2 px-6  rounded-full border border-orange-300 "
          >
            <svg className="w-5.5 md:w-8 h-5.5 md:h-8">
              <use href="#icon-phoneSimple" />
            </svg>درباره ما </a>
        </div>
      </div>
    
    </div>
  );
}

export default ContactUs;
