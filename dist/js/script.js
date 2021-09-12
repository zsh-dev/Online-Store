const bannerSlider = new Swiper('.banner__slide', {
  loop: true,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__btn_next',
    prevEl: '.swiper__btn_prev',
  },


});

const productSliderNav = document.querySelector('.product__slider-nav'),
  productSliderMain = document.querySelector('.product__slider-main');

const swiperProductNav = new Swiper(productSliderNav, {
  slidesPerView: 'auto',
  loopedSlides: 5,
  freeMode: true,

  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
    },
    576: {
      direction: 'vertical',
      touchRatio: 0,
    },

  },
})

const swiperProductMain = new Swiper(productSliderMain, {

  spaceBetween: 40,
  loopedSlides: 5,
  mousewheel: true,
  centeredSlides: true,
  speed: 600,
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
    },
    576: {
      direction: 'vertical',
    },

  },
  navigation: {
    nextEl: '.product__slider-btn_next',
    prevEl: '.product__slider-btn_prev',
  },
  thumbs: {
    swiper: swiperProductNav
  }
})

const complectSlider = new Swiper('.complect__slider', {
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      freeMode: true
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      freeMode: false,

    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4,

      slidesPerGroup: 4,
      loopFillGroupWithBlank: true,
    }
  },
  pagination: {
    el: '.complect__slider-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.complect__slider-btn_next',
    prevEl: '.complect__slider-btn_prev',
  },





});

function toggleCLass(firstSelector, secondSelector) {
  firstSelector.classList.toggle('active');
  secondSelector.classList.toggle('active');
}

document.addEventListener('click', ({target}) => {

  if (target.classList.contains('header__interaction-btn')) {
    document.querySelector('.header__catalog-list').classList.toggle('active');
  } else {
    document.querySelector('.header__catalog-list').classList.remove('active');
  }
  if (document.querySelector('.products__sort-form')) {
    if (target.classList.contains('products__sort-btn')) {
      document.querySelector('.products__sort-items').classList.toggle('active');
    } else if (!target.classList.contains('products__sort-btn')) {
      document.querySelector('.products__sort-items').classList.remove('active');
    }
  }
  

})



const overlay = document.querySelector('.overlay');


const burgerBtn = document.querySelector('.burger'),
  btnCloseMenu = document.querySelector('.btn-close[data-close-menu]'),
  mobileMenu = document.querySelector('.header__mobile')
if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
    document.body.classList.add('lock');

  })
}

if (btnCloseMenu) {
  btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
    document.body.classList.remove('lock');
  })
}

const mobileCatalogBtn = document.querySelectorAll('.header__mobile-btn'),
  mobileMenuContent = document.querySelector('.header__mobile-first'),
  mobileCatalog = document.querySelector('.header__mobile-catalog');
if (mobileCatalogBtn) {
  mobileCatalogBtn.forEach((item) => {
    item.addEventListener('click', () => {
      mobileCatalog.classList.toggle('active')
      mobileMenuContent.classList.toggle('not-active')
    })
  })
}





const cardBtns = document.querySelectorAll('.card__btn');
if (cardBtns) {
  cardBtns.forEach((item) => {
    item.addEventListener('click', ({
      target
    }) => {
      target.classList.toggle('active');
    })
  })
}



const sortRadioBtns = document.querySelectorAll('.radio-btn'),
  sortBtn = document.querySelector('.products__sort-btn');
if (sortRadioBtns) {
  sortRadioBtns.forEach((item) => {
    if (item.firstElementChild.checked) {
      item.classList.add('active');
      sortBtn.textContent = item.textContent;
    } else if (!item.firstElementChild.checked) {
      item.classList.remove('active');
    }

    item.addEventListener('click', ({
      target
    }) => {
      sortRadioBtns.forEach(el => {
        el.classList.remove('active');
      });

      item.classList.add('active');
      sortBtn.textContent = item.textContent;
    })
  })
}




const rangeSlider = document.querySelector('.filter__range-slider');
const rangeMinInput = document.getElementById('rangeMin'),
  rangeMaxInput = document.getElementById('rangeMax');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 999999],
    connect: true,
    range: {
      'min': 0,
      'max': 999999
    }
  });
}

const inputs = [rangeMinInput, rangeMaxInput];
if (rangeSlider) {
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}



const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  console.log(arr);

  rangeSlider.noUiSlider.set(arr);
};


if (inputs) {
  inputs.forEach((el, index) => {
    if (el) {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    }

  });
}


const checkbox = document.querySelectorAll('.checkbox-btn');
if (checkbox) {
  checkbox.forEach((item) => {
    if (item.firstElementChild.checked) {
      item.classList.add('active');
    } else if (!item.firstElementChild.checked) {
      item.classList.remove('active');
    }
    item.addEventListener('click', ({
      target
    }) => {
      target.classList.toggle('active');
    })
  })
}





const filterClose = document.querySelectorAll('[data-close]'),
  btnFilterOpen = document.querySelector('.products__btn-filter'),
  filter = document.querySelector('.filter');



if (btnFilterOpen) {
  btnFilterOpen.addEventListener('click', () => {
    filter.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('lock');
  })
}

if (filterClose) {
  filterClose.forEach((item) => {
    item.addEventListener('click', () => {
      filter.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('lock');

    })
  })

}
const productBtnFavorite = document.querySelector('.product__btn-favorite');
if (productBtnFavorite) {
  productBtnFavorite.addEventListener('click', () => {
    productBtnFavorite.classList.toggle('active');
  })
}

const btnReduce = document.querySelector('.product__btn-reduce'),
  btnIncrease = document.querySelector('.product__btn-increase'),
  inputCount = document.querySelector('.product__input-count');
if (inputCount) {
  if (inputCount.value < 1) {
    btnReduce.setAttribute("disabled", "disabled")
  } else {
    btnReduce.removeAttribute('disabled')
  }
}


if (btnReduce) {
  btnReduce.addEventListener('click', function () {
    if (inputCount.value > 1) {
      inputCount.value--;
    } else if (inputCount.value < 2) {
      inputCount.value--;
      btnReduce.setAttribute("disabled", "disabled")
    } else {
      return 1;
    }
  });
}
if (btnIncrease) {
  btnIncrease.addEventListener('click', function () {
    if (btnReduce.hasAttribute("disabled")) {
      btnReduce.removeAttribute('disabled')
    }

    inputCount.value++;

  });
}




const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelectorAll('.header__contact-btn');
modalOpenBtn.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.classList.add('lock')
  })
})


modal.addEventListener('click', ({target}) => {
  if (target.classList.contains('modal__overlay') || target.classList.contains('btn-close')) {

    modal.classList.remove('active')
    if (mobileMenu.classList.contains('active')) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }
})

const modalForm = document.querySelector('.modal__form'),
  modalInputs = modalForm.querySelectorAll('.modal__input');

function clearInputs() {
  modalInputs.forEach(item => {
    item.value = '';
  })
}

async function sendForm(data) {
  let res = await fetch('mailer/smart.php', {
    method: "POST",
    body: data
  });
}


modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(modalForm);

  sendForm(formData)
  .then(() => alert('Данные отправлены!'))
    .finally(() => clearInputs())
});



function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    console.log(template);
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }

  }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

}
maskPhone('.modal__number', '+7 (___) ___-__-__');

