import React, { useEffect, useRef } from "react";
import Navebar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "../../components/CommentsTextArea/CommentsTextArea";
import swal from "sweetalert";
import Cookies from "js-cookie";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const CourseInfo = () => {
  const videoRef = useRef(null);
  const { courseName } = useParams();
  const [courseInfo, setCourseInfo] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [sessions, setSessions] = React.useState([]);


  function formatPersianDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR");
  }
  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: [
        "play-large",
        "play",
        "rewind",
        "fast-forward",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "fullscreen",
      ],
    });

    return () => player.destroy(); // cleanup
  }, []);

  useEffect(() => {
    const token = Cookies.get("user");
    fetch(`${import.meta.env.VITE_BACKEND_URL}/courses/${courseName}`, {
      headers: {
        Authorization: `Bearer ${token ? token : {}}`,
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourseInfo(data);
        setComments(data.comments);
        setSessions(data.sessions);
      });
    });
  }, [courseName]);

  const registerHandler = () => {
    swal({
      title: "آیا از ثبت نام در دوره اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (!result) return;
      if (courseInfo.price === 0) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/courses/${
              courseInfo._id
            }/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("user")}`,
              },
              body: JSON.stringify({ price: courseInfo.price }),
            }
          );
          if (response.status === 201) {
            swal({
              title: "ثبت نام با موفقیت انجام شد",
              icon: "success",
              button: "باشه",
            }).then(() => {
              window.location.reload();
            });
          } else {
            throw new Error("ثبت نام با خطا مواجه شد");
          }
        } catch (err) {
       
          swal({
            title: err.message || "ثبت نام با خطا مواجه شد",
            icon: "error",
            button: "باشه",
          });
        }
      } else {
       if (!Cookies.get("user")) {
         swal({
           title: "برای خرید ابتدا وارد حساب کاربری خود شوید",
           icon: "error",
           button: "باشه",
         });
         return;
       }

        try {
          const respnse = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/cart/add`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("user")}`,
              },
              body: JSON.stringify({
                productId: courseInfo._id,
                quantity: 1,
                price: courseInfo.price,
              }),
            }
          );
          if (respnse.status === 201) {
            swal({
              title: "محصول به سبد خرید شما افزوده شد",
              icon: "success",
              button: "باشه",
            }).then(() => {
              window.location.reload();
            });
          } else {
            throw new Error("لطفاً مجدداً امتحان کنید");
          }
        } catch (err) {
    
          swal({
            title: err.message || "ثبت نام با خطا مواجه شد",
            icon: "error",
            button: "باشه",
          });
        }
      }
    });
  };
  return (
    <div className="bg-gray-100 dark:bg-zinc-800 pt-32">
      <div className="container mx-auto px-4">
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            {
              id: 2,
              title: "آموزش برنامه نویسی فرانت‌اند",
              to: "category-info/frontend",
            },
            {
              id: 3,
              title: "دوره متخصص جاوا اسکریپت",
              to: "course-info/js-expert",
            },
          ]}
        />
        <div className="mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 sm:gap-x-7 lg:items-center xl:items-stretch mt-8 sm:mt-10 rounded-xl p-4.5 lg:p-0 bg-white dark:bg-zinc-700 lg:!bg-transparent">
            <div className="flex flex-col justify-between order-2 lg:order-1 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white p-2 rounde-2xl">
              <div>
                <h1 className="font-DanaLight text-base md:text-lg mt-2 text-white mb-4.5 bg-orange-400 w-fit px-4 py-2 rounded-2xl hover:bg-orange-500 transition-colors">
                  {courseInfo.categoryID?.title}{" "}
                </h1>
                <h1 className="font-DanaDemiBold text-lg md:text-2xl my-4 text-zinc-700 ">
                  {courseInfo.name}
                </h1>
                <p className="sm:text-lg line-clamp-4 sm:line-clamp-5">
                  {courseInfo.description}
                </p>
              </div>
              <div className="space-y-4 lg:space-y-8 mt-4 lg:mt-4">
                <div className="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6 pb-3">
                  <button
                    id="register-in-course"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-DanaMedium px-4 py-2 rounded-lg flex items-center gap-x-2 transition-colors"
                    onClick={registerHandler}
                    disabled={courseInfo.isUserRegisteredToThisCourse}
                  >
                    <svg className="w-6 h-6">
                      <use href="#icon-academic" />
                    </svg>
                    {courseInfo.isUserRegisteredToThisCourse
                      ? "دانشجوی دوره هستید"
                      : " ثبت نام در دوره"}
                  </button>
                  <div className="flex items-end gap-x-2.5">
                    <span className="text-slate-500 dark:text-white/70 text-xl line-through">
                      {courseInfo.price
                        ? courseInfo.price.toLocaleString("fa-IR")
                        : ""}
                    </span>

                    <span className="font-DanaDemiBold text-2xl text-zinc-800 dark:text-white">
                      {courseInfo.price && courseInfo.discount
                        ? (
                            (courseInfo.price * courseInfo.discount) /
                            100
                          ).toLocaleString("fa-IR")
                        : ""}
                      <span className="font-danaMedium text-lg"> تومان </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="course_intro_wrap order-1 w-full  rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full rounded-xl"
                poster="https://sabzlearn.ir/wp-content/uploads/2025/03/English22-1-1.webp"
                controls
              >
                <source
                  src="https://tech.sabzlearn.ir/uploads/bahador_arab/english_learning/1-intro.MP4?h=pHngKz8f_S2lzDba_kj6gw&t=1753725811"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <CourseDetailBox
                icon="academic"
                title="وضعیت دوره:"
                text={
                  courseInfo.isComplete === 1
                    ? "به اتمام رسیده"
                    : "در حال برگزاری"
                }
              />
              <CourseDetailBox
                icon="clock"
                title=" زمان برگزاری دوره:"
                text={
                  courseInfo.createdAt
                    ? formatPersianDate(courseInfo.createdAt)
                    : "در حال بارگذاری..."
                }
              />
              <CourseDetailBox
                icon="calender"
                title="آخرین بروزرسانی:"
                text={
                  courseInfo.updatedAt
                    ? formatPersianDate(courseInfo.updatedAt)
                    : "در حال بارگذاری..."
                }
              />
              <CourseDetailBox
                icon="users"
                title="شتیبان دوره:"
                text={courseInfo.support}
              />
              <CourseDetailBox
                icon="briefcase"
                title=" مدرس دوره:"
                text={courseInfo.creator?.name}
              />
              <CourseDetailBox
                icon="video"
                title=" قیمت دوره:"
                text={courseInfo.price}
              />
            </div>

            <div className="join join-vertical w-full text-zinc-700 dark:text-white mt-8 bg-white rounded-md mb-3">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title font-semibold text-lg">
                  معرفی دوره
                </div>

                <div className="collapse-content flex flex-col gap-4">
                  {sessions.length > 0 ? (
                    sessions.map((session, index) => (
                      <div
                        key={session._id || index}
                        className="flex flex-col md:flex-row justify-between items-center p-3 bg-gray-100 dark:bg-zinc-700 rounded-md"
                      >
                        {/* Left: Count + Icon + Title */}
                        <div className="flex self-start items-center gap-2">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-300 text-white text-xs font-bold">
                            {index + 1}
                          </span>
                          <i className="fab fa-youtube text-red-500 text-lg"></i>

                          {courseInfo.isUserRegisteredToThisCourse ||
                          courseInfo.free === 1 ? (
                            <Link
                              to={`/${courseName}/${session._id}`}
                              className="text-blue-600 hover:underline font-medium"
                            >
                              {session.title}
                            </Link>
                          ) : (
                            <span className="text-gray-600">
                              {session.title}
                            </span>
                          )}
                        </div>

                        {/* Right: Time + Lock */}
                        <div className="flex self-end items-center gap-2">
                          <span className="text-sm text-gray-500">
                            {session.time}
                          </span>
                          {!courseInfo.isUserRegisteredToThisCourse && (
                            <i className="fas fa-lock text-gray-400 text-sm"></i>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500">
                      هیچ جلسه‌ای وجود ندارد.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <CommentsTextArea
              comments={comments}
              courseShortName={courseName}
            />
          </div>
          <div className="col-span-12 lg:col-span-4"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CourseInfo;
