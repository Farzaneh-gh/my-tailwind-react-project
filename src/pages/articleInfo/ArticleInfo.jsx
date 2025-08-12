import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import Html from "../../components/Html/Html"; // For rendering HTML safely


function ArticleInfo() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [articleCategory, setArticleCategory] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles/${articleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        setArticleCategory(data.categoryID);
      })
      .catch((error) => console.error("Error fetching article data:", error));
  }, [articleId]);

  return (
    <div className="bg-gray-100 dark:bg-zinc-800 pt-32">
 
      <div className="container mx-auto px-4">
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            { id: 2, title: "مقالات", to: `/articles/1` },
          ]}
        />

        <div className="col-span-full lg:col-span-8 xl:col-span-9 mb-5">
          <div className="bg-white dark:bg-zinc-700 rounded-xl p-4.5 sm:p-5 text-zinc-700 dark:text-white">
            <div>
              <div class="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative">
                <span class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-sky-500 rounded-r-sm"></span>
                <h1 class="font-DanaDemiBold text-xl md:text-[1.625rem]/10">
                  {article ? article.title : "بارگذاری مقاله..."}
                </h1>
              </div>

              <div>
                <Link to="#" className="font-DanaMedium text-xl md:text-xl">
                  {articleCategory
                    ? articleCategory.title
                    : "بارگذاری دسته بندی..."}
                </Link>
              </div>
              <div className="flex items-center justify-start xxs:gap-x-2 md:gap-x-5 mt-5 text-gray-500 dark:text-gray-400">
                <div className="flex items-center  justify-center xxs:gap-x-1 gap-x-2">
                  <svg className="xxs:w-5 xxs:h-5 w-7 h-7 flex-center text-gray-500">
                    <use href="#icon-user" />
                  </svg>
                  <span className="font-DanaDemiBold  text-xs md:text-lg">
                    {article?.creator?.username}
                  </span>
                </div>

                <div className="flex items-center  justify-center xxs:gap-x-1 gap-x-2">
                  <svg className="xxs:w-5 xxs:h-5 w-7 h-7 flex-center text-gray-500">
                    <use href="#icon-clock" />
                  </svg>
                  <span className="font-DanaDemiBold  text-xs md:text-lg">
                    {article?.createdAt
                      ? new Date(article?.createdAt).toLocaleDateString("fa-IR")
                      : "بارگذاری تاریخ..."}
                  </span>
                </div>

                <div className="flex items-center  justify-center xxs:gap-x-1 gap-x-2">
                  <svg className="xxs:w-5 xxs:h-5 w-7 h-7 flex-center text-gray-500">
                    <use href="#icon-eye" />
                  </svg>
                  <span className="font-DanaDemiBold  text-xs md:text-lg">
                    {article?.views} بازدید
                  </span>
                </div>
              </div>

              <img
                src={`http://localhost:4001/courses/covers/${article?.cover}`}
                alt="Article Cover"
                className="w-full h-auto mt-5 rounded-2xl object-cover"
              />

              {article ? (
                <div className="mt-5 px -5 text-zinc-700 dark:text-white">
                  <Html testHtmlTemplate={article.description} />
                </div>
              ) : (
                <p className="text-gray-500 dark:text-white mt-5">
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است...
                </p>
              )}

              <div className="bg-gray-500/9 dark:bg-zinc-800 mt-10 mb-10 rounded-4xl p-7">
                <span className="article-read__title">
                  آنچه در این مقاله خواهید خواند
                </span>
                <ul className="text-blue-700 pr-4 mt-2">
                  <li className="article-read__item">
                    <Link to="#" className="article-read__link">
                      معرفی بهترین سایت ‌های آموزش جاوا اسکریپت
                    </Link>
                  </li>
                  <li className="article-read__item">
                    <Link to="#" className="article-read__link">
                      یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
                    </Link>
                  </li>
                  <li className="article-read__item">
                    <Link to="#" className="article-read__link">
                      ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-center">
                <img
                  src="/images/blog/4.png"
                  alt="article body img"
                  className="rounded-2xl"
                />
              </div>
              <div className="mt-4 mb-4">
                <h2 className="afont-DanaDemiBold text-xl md:text-2xl">
                  معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                </h2>
                {article?.body ? (
                  <Html testHtmlTemplate={article?.body} />
                ) : (
                  <p className="text-gray-500 mt-2 text-sm md:text-base lg:text-lg">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                )}

                <div className="flex-center rounded-2xl mt-4">
                  <img
                    src="/images/blog/1.jpg"
                    alt="article body img"
                    className="article-section__img rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ArticleInfo;
