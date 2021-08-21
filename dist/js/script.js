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
      freeMode:true
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
})



const overlay = document.querySelector('.overlay');
 

const burgerBtn = document.querySelector('.burger'),
  mobileMenu = document.querySelector('.header__mobile')
if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    toggleCLass(burgerBtn, mobileMenu);
    if (mobileMenu.classList.contains('active')) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
    
    
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
  item.addEventListener('click', ({target}) => {
      target.classList.toggle('active');
  })
})
}


const sortItems = document.querySelector('.products__sort-items');
const sortRadioBtns = document.querySelectorAll('.radio-btn'),
  sortBtn = document.querySelector('.products__sort-btn');
if (sortRadioBtns) {
  sortRadioBtns.forEach((item) => {
  item.addEventListener('click', ({target}) => {
    sortRadioBtns.forEach(el => {
      el.classList.remove('active');
    });
    item.classList.add('active');
    sortBtn.textContent = item.textContent;
  })
})
}
if (sortBtn) {
  sortBtn.addEventListener('click', () => {
    toggleCLass(sortBtn, sortItems);
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
  item.addEventListener('click', ({target}) => {
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
const productBtnFavorite =  document.querySelector('.product__btn-favorite');
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
           btnReduce.addEventListener('click', function() {
        if (inputCount.value > 1) {
          inputCount.value--;
        } else if (inputCount.value < 2) {
          inputCount.value--;
          btnReduce.setAttribute("disabled", "disabled")
        }
         else {
          return 1;
        }
      });
     }
  if (btnIncrease) {
    btnIncrease.addEventListener('click', function() {
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
        console.log(target);
      })

      
      function alertWarn() {
        alert('ВНИМАНИЕ! Данный сайт не является коммерческим и вся продукция в ней ненастоящая. И все совпадения случайны. Сайт создан сугубо в личных целях')
      }
      
      setTimeout(alertWarn, 2000);

