const multiSelect = () => {
  const elements = document.querySelectorAll('.hero__item');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
    });
  })

}

multiSelect();


// galerry
// select

const element = document.querySelector('.select-gallery');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

// swiper galerry


const swiper = new Swiper('.gallery-swiper', {
  speed: 400,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  breakpoints: {

    577: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 3,
    },
    0: {
      spaceBetween: 34,
      slidesPerView: 1,
      slidesPerGroup: 1

    },
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
      },

    }

  }
});


let slide = document.querySelectorAll('.gallery-slide')
let cardBtn = document.querySelectorAll('.card__btn')
let filter = document.querySelector('.filter')

slide.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.card').forEach(el => {
      document.querySelector('.filter').classList.add('filter--on')
      document.querySelector('.filter').classList.add('filter--active')


      document.querySelector(`[data-target="${path}"]`).classList.add('card--active');

      filter.addEventListener('click', () => {
        document.querySelector(`[data-target="${path}"]`).classList.remove('card--active');
        document.querySelector('.filter').classList.remove('filter--active');
        setTimeout(() => {
          document.querySelector('.filter').classList.remove('filter--on')
        }, 300)
      })

      cardBtn.forEach(el => {
        el.addEventListener('click', el => {
          document.querySelector(`[data-target="${path}"]`).classList.remove('card--active');
          document.querySelector('.filter').classList.remove('filter--active');
          setTimeout(() => {
            document.querySelector('.filter').classList.remove('filter--on')
          }, 300)
        })
      })
    })
  })
})






// swiper event

const swiperEvent = new Swiper('.event-swiper', {
  speed: 400,
  pagination: {
    el: '.event-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //     delay: 5000,
  //   },
  breakpoints: {
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,

    },
    769: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 2,


    },

    577: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
    0: {
      spaceBetween: 15,
      slidesPerView: 1,

    }
  }

});



// swiper hero


const swiperHero = new Swiper('.hero-swiper', {
  loop: true,
  speed: 3000,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,

  },


});

// swiper project


const swiperProject = new Swiper('.project__swiper', {

  speed: 3000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1025: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,

    },
    769: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 4,
    },
    577: {
      spaceBetween: 33,
      slidesPerView: 2,

    },
    321: {
      slidesPerView: 1,
    },
    0: {
      spaceBetween: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,

    }
  }

});

//   accordion

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
  });


});

document.querySelectorAll('.column__link').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.card-accordion').classList.add('card__accordion--active');
    document.querySelector('.catalog__card').classList.add('catalog__card--none');
    setTimeout(() => {
      document.querySelector('.card-accordion').classList.remove('card__accordion--active');
      document.querySelector('.catalog__card').classList.remove('catalog__card--none');
    }, 10000)
  })
})



//   map


ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {

    zoom: 15,
    center: [56.46667, 84.97278],
    controls: ['zoomControl']
  },
    {
      zoomControlPosition: {
        right: 10,
        top: 350,

      },
      zoomControlSize: 'small',
    },



  );

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Надпись, которая всплаывет при наведении на метку',
      balloonContent: ''
    }, {

      iconLayout: 'default#image',
      iconImageHref: 'img/mark.jpg',
      iconImageSize: [40, 40],
    }),


    myMap.geoObjects
      .add(myPlacemark)
}




const options = {
  treshold: [0.001, 0.5, 1],
}


const callback = function (entries, observed) {
  entries.forEach(element => {
    const { target, isInterseting, intersectionRatio } = element;
    if (isInterseting, intersectionRatio >= 0.00001) {
      target.classList.add('section--active')



    }

  });
}

const observed = new IntersectionObserver(callback, options);


const target = document.querySelectorAll('.section')

target.forEach(el =>
  observed.observe(el))



// validate

var selector = document.querySelector("#tel");

var im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);

const validation = new JustValidate('#form', {

})
validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },

    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',

    },

  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели номер',
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Недопустимый формат'
    },

  ])


// burger

let burgerNav = document.querySelector('.burger-nav')
burgerMenu = document.querySelector('.burger__menu')
burgerTop = document.querySelector('.burger__line-top')
burgerMiddle = document.querySelector('.burger__line-middle')
burgerBottom = document.querySelector('.burger__line-bottom')


burgerMenu.addEventListener('click', (el) => {

  if (burgerMenu.classList.contains('burger__menu--active')) {
    burgerNav.classList.remove('burger-nav--active')
    burgerMenu.classList.remove('burger__menu--active')
    burgerTop.classList.remove('burger__line-top--active')
    burgerMiddle.classList.remove('burger__line-middle--active')
    burgerBottom.classList.remove('burger__line-bottom--active')
  } else {
    burgerNav.classList.add('burger-nav--active')
    burgerMenu.classList.add('burger__menu--active')
    burgerTop.classList.add('burger__line-top--active')
    burgerMiddle.classList.add('burger__line-middle--active')
    burgerBottom.classList.add('burger__line-bottom--active')

  }
})



// search-table


let searchIcon = document.querySelector('.search-table');
closeIcon = document.querySelector('.search-table-close');
searchDescr = document.querySelector('.search-table-descr')

searchIcon.addEventListener('click', () => {
  searchIcon.classList.add('search__table--active');
  closeIcon.classList.add('search__table-close--active');
  searchDescr.classList.add('search__table-descr--active')


})

closeIcon.addEventListener('click', () => {
  searchIcon.classList.remove('search__table--active');
  closeIcon.classList.add('search__table-close--anime');
  searchDescr.classList.remove('search__table-descr--active');

  setTimeout(() => {
    closeIcon.classList.remove('search__table-close--active');
    closeIcon.classList.remove('search__table-close--anime');
  }, 300)
})














