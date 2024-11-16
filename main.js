// تعريف المتغيرات
const Wt = "darkmode";
const button = document.getElementById("headlessui-switch-:r3:");
const darkModeClass = "darkmode";
const darkClass = "dark";

// دالة لتحديث حالة الوضع الداكن بناءً على القيمة
function setDarkmode(isDark) {
    if (isDark) {
        localStorage.setItem(Wt, true);
        document.body.classList.add(darkModeClass);
        document.body.classList.add(darkClass);
        button.setAttribute("aria-checked", "true");
        // تحديث الأيقونات
        updateIcons(false);
    } else {
        localStorage.removeItem(Wt);
        document.body.classList.remove(darkModeClass);
        document.body.classList.remove(darkClass);
        button.setAttribute("aria-checked", "false");
        // تحديث الأيقونات
        updateIcons(true);
    }
}

// دالة لتحديث حالة الأيقونات بناءً على الوضع
function updateIcons(isDark) {

    const button3 = document.getElementById('headlessui-switch-:r3:');
    const button2 = document.getElementById('headlessui-switch-:r2:');

    if (isDark) {
        // تغيير إلى الوضع الفاتح
        button3.setAttribute('aria-checked', 'false');
        button3.classList.remove('bg-slate-700', 'text-slate-400', 'focus-visible:ring-slate-500');
        button3.classList.add('bg-yellow-300', 'text-yellow-100', 'focus-visible:ring-yellow-300');
        button2.setAttribute('aria-checked', 'false');
        button2.classList.remove('bg-slate-700', 'text-slate-400', 'focus-visible:ring-slate-500');
        button2.classList.add('bg-yellow-300', 'text-yellow-100', 'focus-visible:ring-yellow-300');

        // التحكم في الأيقونات الداخلية
        const svgIcons3 = button3.querySelectorAll('svg');
        const svgIcons2 = button2.querySelectorAll('svg');
        svgIcons3[0].classList.replace('scale-100', 'scale-0');
        svgIcons3[1].classList.replace('scale-0', 'scale-100');
        svgIcons2[0].classList.replace('scale-100', 'scale-0');
        svgIcons2[1].classList.replace('scale-0', 'scale-100');

        const span3 = button3.querySelector('span.absolute');
        const span2 = button2.querySelector('span.absolute');
        span3.classList.remove('translate-x-[2.625rem]');
        span2.classList.remove('translate-x-[2.625rem]');
        const spanIcons3 = span3.querySelectorAll('svg');
        const spanIcons2 = span2.querySelectorAll('svg');
        spanIcons3[0].classList.replace('opacity-0', 'opacity-100');
        spanIcons3[0].classList.replace('scale-0', 'scale-100');
        spanIcons3[1].classList.replace('opacity-100', 'opacity-0');
        spanIcons3[1].classList.replace('scale-100', 'scale-0');

        spanIcons2[0].classList.replace('opacity-0', 'opacity-100');
        spanIcons2[0].classList.replace('scale-0', 'scale-100');
        spanIcons2[1].classList.replace('opacity-100', 'opacity-0');
        spanIcons2[1].classList.replace('scale-100', 'scale-0');
    } else {
        // تغيير إلى الوضع الداكن
        button3.setAttribute('aria-checked', 'true');
        button3.classList.remove('bg-yellow-300', 'text-yellow-100', 'focus-visible:ring-yellow-300');
        button3.classList.add('bg-slate-700', 'text-slate-400', 'focus-visible:ring-slate-500');
        button2.setAttribute('aria-checked', 'true');
        button2.classList.remove('bg-yellow-300', 'text-yellow-100', 'focus-visible:ring-yellow-300');
        button2.classList.add('bg-slate-700', 'text-slate-400', 'focus-visible:ring-slate-500');

        // التحكم في الأيقونات الداخلية
        const svgIcons3 = button3.querySelectorAll('svg');
        const svgIcons2 = button2.querySelectorAll('svg');
        svgIcons3[0].classList.replace('scale-0', 'scale-100');
        svgIcons3[1].classList.replace('scale-100', 'scale-0');

        svgIcons2[0].classList.replace('scale-0', 'scale-100');
        svgIcons2[1].classList.replace('scale-100', 'scale-0');

        const span3 = button3.querySelector('span.absolute');
        const span2 = button2.querySelector('span.absolute');
        span3.classList.add('translate-x-[2.625rem]');
        span2.classList.add('translate-x-[2.625rem]');
        const spanIcons3 = span3.querySelectorAll('svg');
        const spanIcons2 = span2.querySelectorAll('svg');
        spanIcons3[0].classList.replace('opacity-100', 'opacity-0');
        spanIcons3[0].classList.replace('scale-100', 'scale-0');
        spanIcons3[1].classList.replace('opacity-0', 'opacity-100');
        spanIcons3[1].classList.replace('scale-0', 'scale-100');

        spanIcons2[0].classList.replace('opacity-100', 'opacity-0');
        spanIcons2[0].classList.replace('scale-100', 'scale-0');
        spanIcons2[1].classList.replace('opacity-0', 'opacity-100');
        spanIcons2[1].classList.replace('scale-0', 'scale-100');
    }


}

// دالة لتبديل حالة الوضع عند الضغط على الزر
function toggleDarkmode() {
    const isDark = localStorage.getItem(Wt) === "true";
    setDarkmode(!isDark);
}

// تعيين وظيفة التبديل على الزر
//button.addEventListener("click", toggleDarkmode);

// تعيين الحالة الحالية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem(Wt) === "true";
    //setDarkmode(isDark);
});




function show_mobile_menu() {

    if (document.getElementById("nav-icon").classList.contains('open')) {
        //alert("ooo");
        document.getElementById("nav-icon").classList.remove('open');
        document.getElementById("headlessui").style.display = 'none';

    } else {
        document.getElementById("nav-icon").classList.add('open');
        document.getElementById("headlessui").style.display = 'block';
        //alert("cvv");


    }

}
///////////////////////////////////////----------------------------------------------
function getPercentageStatus(percentage) {
    let result = {};
    if (percentage > 1) {
        result.percentage = 1;
        result.status = "after";
    } else if (percentage < 0) {
        result.percentage = 0;
        result.status = "before";
    } else {
        result.percentage = percentage;
        result.status = "passing";
    }
    return result;
}

function getPartialPercentage(percentage, start = 0, end = 1) {
    const result = (percentage - start) / (end - start);
    if (result >= 1) {
        return 1;
    } else if (result <= 0) {
        return 0;
    } else {
        return result;
    }
}

function getScrollingPercentage(
    windowTop,
    offsetTop,
    height,
    sConstant = 0,
    eConstant = 0,
    isNegative = false
) {
    const windowHeight = window.innerHeight;

    const scrollingTop = windowTop + windowHeight;

    const animationStartPoint = offsetTop + sConstant;

    const animationEndPoint = height + eConstant - sConstant;
    const scrollingOnElement = scrollingTop - animationStartPoint;

    const percentage = scrollingOnElement / animationEndPoint;

    return getPercentageStatus(percentage);
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
};

function animateMainSection() {
    var mainSection = document.getElementById("mainSection");
    var header = document.getElementById("header-original");
    var dnaOverlay = document.getElementById("dna_overlay");
    var profileImg = document.getElementById("profileImg");
    var mainSectionContentContainer = document.getElementById("mainSectionContentContainer");
    var mainSectionContent = document.getElementById("mainSectionContent");
    var mainSectionContentBottomText = document.getElementById("mainSectionContentBottomText");
    var mainSectionContainer = document.getElementById("mmm");
    var dnaCanvas = document.getElementById("canvas");




    let scrolling = $(window).scrollTop();
    const { percentage } = getScrollingPercentage(
        scrolling,
        0,
        mainSection.getBoundingClientRect().height,
        window.innerHeight
    );

    const headerMoving = getPartialPercentage(percentage, 0, 0.5);

    const headerTransformX =
        (header.getBoundingClientRect().width - 0.5 * window.innerWidth) *
        (1 - headerMoving);

    const headerTransformY = -100 * easeOutCubic(1 - headerMoving);
    if (percentage < 1) {
        dnaOverlay.style.opacity = easeOutCubic(headerMoving) * 0.7;
    }
    header.style.transform = `translate(${headerTransformX}px,${headerTransformY}px)  scale(${1 - 0.3 * (1 - headerMoving)
        })`;


    const profileImageTransformX =
        (-15 -
            45 -
            profileImg.getBoundingClientRect().width +
            0.5 * window.innerWidth) *
        (1 - headerMoving);
    profileImg.style.transform = `translate(${profileImageTransformX}px, ${50 * (1 - headerMoving)
        }px) scale(${1 - 0.3 * (1 - headerMoving)})`;
    const contentPercentage = getPartialPercentage(percentage, 0.4, 1);
    const contentOffsetTop = mainSectionContentContainer.getBoundingClientRect().top;
    const contentTranslateY =
        (window.innerHeight -
            (contentOffsetTop +
                mainSectionContent.getBoundingClientRect().height / 2)) *
        (1 - contentPercentage);
    mainSectionContent.style.opacity = contentPercentage;
    mainSectionContent.style.transform = `translateY(${contentTranslateY}px) scale(${1 - 0.2 * (1 - contentPercentage)
        })`;

    const contentTopPercentage = getPartialPercentage(percentage, 0.6, 1);
    const contetTopTranslateY = 50 * (1 - contentTopPercentage);
    mainSectionContentBottomText.style.transform = `translateY(${contetTopTranslateY}px) scale(${1 - 0.2 * (1 - contentTopPercentage)
        })`;

    if (percentage === 1) {
        if (!mainSectionContainer.classList.contains("stable")) {
            mainSectionContainer.classList.add("stable");
        }
        if (!dnaCanvas.classList.contains("stable")) {
            dnaCanvas.classList.add("stable");
        }
    } else if (percentage < 1) {
        if (mainSectionContainer.classList.contains("stable")) {
            mainSectionContainer.classList.remove("stable");
        }
        if (dnaCanvas.classList.contains("stable")) {
            dnaCanvas.classList.remove("stable");
        }
    }



}

//////////////////////////////////////-----------------------------------------------

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };




function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.body.classList.add('scrolled');
        document.getElementById("my_navbar").classList.add('bg-primary-container');
        document.getElementById("progress-bar__track").classList.remove('opacity-0');
        /*
          if (typeof canvas !== "undefined") {
                    document.getElementById("canvas").classList.add('stable');
                  document.getElementById("mmm").classList.add('stable');
          }
          */


    } else {
        document.body.classList.remove('scrolled');
        document.getElementById("my_navbar").classList.remove('bg-primary-container');
        document.getElementById("progress-bar__track").classList.add('opacity-0');
        /*
        if (typeof canvas !== "undefined") {
        document.getElementById("canvas").classList.remove('stable');
        document.getElementById("mmm").classList.remove('stable');
          }
          */

    }

    let scroll = $(window).scrollTop();
    const height = $(window).height();
    const width = $(window).width();
    let percentage = scroll / ($(document).height() - height);
    $(".progress-bar__moving").width(percentage * width);

    $(window).on("scroll", () => {
        scroll = $(window).scrollTop();
        percentage = scroll / ($(document).height() - height);
        $(".progress-bar__moving").width(percentage * width);
    });
    if (window.innerWidth > 768) {
        if (typeof canvas !== "undefined") {
            animateMainSection();
        }

    }





}
