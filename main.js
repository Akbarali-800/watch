// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
// });


// swiper.on('slideChange', function () {
//     const aktivSlaydRaqami = swiper.realIndex

//     if(aktivSlaydRaqami == 1){
//         document.body.style.backgroundColor = "red"
//     }
//     else if(aktivSlaydRaqami == 2){
//         document.body.style.backgroundColor = "blue"
//     }
//     else if(aktivSlaydRaqami == 3){
//         document.body.style.backgroundColor = "green"
//     }
// })



// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// // Fonga class qo'shish funksiyasi
// function setBodyBackground(slideIndex) {
//     document.body.classList.remove('bg-slide-1', 'bg-slide-2', 'bg-slide-3', 'bg-slide-4');

//     if (slideIndex == 0) {
//         document.body.classList.add('bg-slide-1');
//     } else if (slideIndex == 1) {
//         document.body.classList.add('bg-slide-2');
//     } else if (slideIndex == 2) {
//         document.body.classList.add('bg-slide-3');
//     } else if (slideIndex == 3) {
//         document.body.classList.add('bg-slide-4');
//     }

//     // So'nggi holatni saqlash
//     localStorage.setItem('lastSlide', slideIndex);
// }

// // Sahifa yuklanganda oxirgi fonni tiklash
// document.addEventListener('DOMContentLoaded', function () {
//     const lastSlide = localStorage.getItem('lastSlide');
//     if (lastSlide !== null) {
//         setBodyBackground(parseInt(lastSlide)); // Saqlangan holatni tiklash
//     } else {
//         setBodyBackground(0); // Agar saqlangan holat bo'lmasa, 1-slideni fon rangini o'rnatish
//     }
// });

// // Slayd o'zgarganda fonni o'zgartirish
// swiper.on('slideChange', function () {
//     const aktivSlaydRaqami = swiper.realIndex;
//     setBodyBackground(aktivSlaydRaqami);
// });



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Soatlarning narxlari
const watchPrices = ["$100", "$150", "$200", "$250"];

// Fonga class va narx qo'shish funksiyasi
function setSlideContent(slideIndex) {
    document.body.classList.remove('bg-slide-1', 'bg-slide-2', 'bg-slide-3', 'bg-slide-4');

    if (slideIndex == 0) {
        document.body.classList.add('bg-slide-1');
    } else if (slideIndex == 1) {
        document.body.classList.add('bg-slide-2');
    } else if (slideIndex == 2) {
        document.body.classList.add('bg-slide-3');
    } else if (slideIndex == 3) {
        document.body.classList.add('bg-slide-4');
    }

    document.getElementById('watch-price').textContent = "Narx: " + watchPrices[slideIndex];

    // orqani rangini sax qilish
    localStorage.setItem('lastSlide', slideIndex);
}

document.addEventListener('DOMContentLoaded', function () {
    const lastSlide = localStorage.getItem('lastSlide');
    if (lastSlide !== null) {
        setSlideContent(parseInt(lastSlide)); 
    } else {
        setSlideContent(0);
    }
});

// Slayd o'zgarganda fon va narxni o'zgartirish
swiper.on('slideChange', function () {
    const aktivSlaydRaqami = swiper.realIndex;
    setSlideContent(aktivSlaydRaqami);
});
