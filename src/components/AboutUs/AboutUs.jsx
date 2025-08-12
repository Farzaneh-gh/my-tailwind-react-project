import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function AboutUs() {
  return (
    <div className="container pt-10 md:pt-40">
      <SectionHeader
        title="ما چه کمکی بهتون میکنیم؟"
        subtitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
        btnShow={false}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 sm:gap-7 mt-8">
        <AboutUsBox
          title="دوره های اختصاصی"
          subtitle="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.

"
          icon="book"
        />
        <AboutUsBox
          subtitle="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.

"
          title="پشتیبانی اختصاصی"
          icon="comment"
        />
        <AboutUsBox
          title="پروژه محور در راستای بازار کار
"
          subtitle="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.

"
          icon="chart"
        />

        <AboutUsBox
          title="سراغ حرفه ای ها رفتیم
"
          subtitle="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.

"
          icon="list"
        />
      </div>
    </div>
  );
}
