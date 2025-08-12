import React from "react";
import AuthContext from "../../contexts/authContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

export default function CommentsTextArea({
  comments = [],

}) {

  const [commentText, setCommentText] = React.useState("");
  const { courseName } = useParams();
  const { isLoggedIn } = useContext(AuthContext);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!commentText) {
      swal("لطفا نظر خود را وارد کنید");
      return;
    }
    try {
      const body = {
        courseShortName: courseName,
        body: commentText,
        score: 5,
      };
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("user")}`,
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 201) {
        swal({
          title: "نظر شما ثبت شد",
          icon: "success",
          button: "باشه",
        });
        setCommentText("");
      } else {
        throw new Error("نظر شما ثبت نشد");
      }
    } catch (err) {
      console.error(err);
      swal({
        title: "خطا",
        text: "لطفا اطلاعات را به درستی وارد کنید",
        icon: "error",
        button: "باشه",
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-4 mt-10 md:mt-30 mb-8 md:mb-10 ">
      <div className="flex items-center gap-x-2 mb-4">
        <div className="">
          <svg className="w-10 h-10 text-orange-300">
            <use href="#icon-comment" />
          </svg>
        </div>
        <span className="text-lg font-MorabbaBold md:text-2xl text-zinc-700 dark:text-white">
          نظرات
        </span>
      </div>
      <div className="">
        {comments.length === 0 ? (
          <div className="alert alert-warning">
            هنوز کامنتی برای این دوره ثبت نشده
          </div>
        ) : (
          <>
            {comments.map((comment, index) => (
              <>
                <div
                  className="border-dashed border-1 w-full border-gray-300  p-3 md:p-10 bg-white rounded-2xl mb-4   dark:bg-zinc-700"
                  key={index}
                >
                  <div className="">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 gap-x-9">
                      <div className="flex self-start items-center gap-x-2 md:gap-x-9">
                        <span className="text-lg font-MorabbaBold text-zinc-700 dark:text-white">
                          {comment.creator
                            ? comment.creator.name
                            : "کاربر ناشناس"}
                        </span>
                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                          {comment.creator
                            ? comment.creator.role === "ADMIN"
                              ? "مدیر"
                              : "کاربر"
                            : "کاربر ناشناس"}
                        </span>
                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                          {comment.createdAt.slice(0, 10)}
                        </span>
                      </div>
                      <div className="flex self-end items-center gap-x-2 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-1 xxs:px-6 xxs:py-2 bg-orange-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <Link
                          className="text-gray-700 dark:text-gray-200 hover:text-orange-300 text-base md:text-lg font-MorabbaBold"
                          to="#"
                        >
                          پاسخ
                        </Link>
                      </div>
                    </div>
                    <div className="comments__question-text">
                      <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-MorabbaRegular">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col gap-y-2 mb-4 md:mb-8">
        <span className="text-zinc-700 dark:text-white text-lg font-MorabbaBold md:text-xl mb-4 md:mb-6">
          قوانین ثبت دیدگاه
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
          <svg className="w-5 h-5 text-green-500 inline-block mx-2">
            <use href="#icon-check" />
          </svg>
          اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش انلاین
          استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
          <svg className="w-5 h-5 text-green-500 inline-block mx-2">
            <use href="#icon-check" />
          </svg>
          دیدگاه های نامرتبط به دوره تایید نخواهد شد.
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
          <svg className="w-5 h-5 text-green-500 inline-block mx-2">
            <use href="#icon-check" />
          </svg>
          سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
        </span>
        <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
          <svg className="w-5 h-5 text-green-500 inline-block mx-2">
            <use href="#icon-check" />
          </svg>
          از درج دیدگاه های تکراری پرهیز نمایید.
        </span>
      </div>
      {isLoggedIn ? (
        <div className="flex flex-col ">
          <div className="comments__respond-content">
            <div className="font-MorabbaBold text-lg md:text-2xl text-zinc-700 dark:text-white">
              دیدگاه شما *
            </div>
            <textarea
              className="textarea outline-none focus:outline-none border-gray-200 rounded-2xl my-4 md:my-8 w-full h-32 md:h-48 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-300  w-fit self-end text-white text-lg md:text-xl px-8 py-3 rounded-2xl hover:bg-orange-400 transition-colors"
            onClick={submitComment}
          >
            ارسال
          </button>
        </div>
      ) : (
        <div className="alert alert-info mt-3">
          برای ثبت دیدگاه ابتدا باید وارد حساب کاربری خود شوید.
          <Link to="/login" className="alert-link p-3">
            ورود به حساب کاربری
          </Link>
        </div>
      )}
    </div>
  );
}
