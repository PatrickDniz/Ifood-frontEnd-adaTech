var feedClass = ".feed.swiper"
var feed = document.querySelector(feedClass);
if (!!feed){
        new Swiper(feedClass, {
            direction: 'horizontal',
            slidesPerView: 1,
            slidesPerGroup: 1,
            effect: "cards",
            grabCursor: true,
            on: {
                init: function () {
                    feed.classList.add('show');
                },
            },
        }); 
    }