const showHeader = () => {
  const navBlock = document.getElementById('nav-cont');
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 1) {
      if (st > lastScrollTop) {
        navBlock.classList.remove('visible');
        navBlock.classList.remove('nav-color');
        navBlock.style.display = 'none';
      } else {
        navBlock.classList.add('visible');
        navBlock.classList.add('nav-color');
        navBlock.style.display = 'flex';
      }
      lastScrollTop = st <= 0 ? 0 : st;
    } else {
      navBlock.classList.remove('nav-color');
    }
  }, false);
}
showHeader();

const accordeon = () => {
  const chapterTopArr = [...document.getElementsByClassName('chapter-top')];
  const chapterBoxArr = [...document.getElementsByClassName('chapter-text-box')];
  const chapterArrow = [...document.getElementsByClassName('chapter-arrow')];
  const bottomLeftArr = [...document.getElementsByClassName('bottom-left')];
  const hideAllBox = () => {
    chapterBoxArr.forEach((e) => e.classList.add('display-none'));
  }
  const hideAllImg = () => {
    bottomLeftArr.forEach((e) => e.classList.add('hide'));
  }
  const noRotate = () => {
    chapterArrow.forEach((e) => e.classList.remove('rotate-arrow'))
  }
  const accordeonButtons = () => {
    for (let i = 0; i < chapterTopArr.length; i++) {
      chapterTopArr[i].onclick = () => {
        if (chapterBoxArr[i].classList.contains('display-none')) {
          hideAllBox();
          hideAllImg();
          bottomLeftArr[i].classList.toggle('hide');
          chapterBoxArr[i].classList.toggle('display-none');
          noRotate();
          chapterArrow[i].classList.toggle('rotate-arrow');
        } else {
          chapterBoxArr[i].classList.toggle('display-none');
          hideAllBox();
          chapterArrow[i].classList.toggle('rotate-arrow');
          noRotate();
        }
      }
    }
  }
  accordeonButtons();
}
accordeon();

const slider = () => {
  const quoteArrowLeft = document.getElementById('left-arrow');
  const quoteArrowRight = document.getElementById('right-arrow');
  const quoteContent = document.getElementById('quote-box-content');
  const testimonialArrowLeft = document.getElementById('testimonial-arrow-left');
  const testimonialArrowRight = document.getElementById('testimonial-arrow-right');
  const testimonialContent = document.getElementById('testimonial-box-content');
  let counter = 0;
  const nextSlide = (content) => {
    if (counter === -66.66666) {
      counter = 0;
      content.style.transform = 'translateX(' + counter + '%)';
    } else {
      counter -= 33.33333;
      content.style.transform = 'translateX(' + counter + '%)';
    }
  };
  const prevSlide = (content) => {
    if (counter === 0) {
      counter = -66.66666;
      content.style.transform = 'translateX(' + counter + '%)';
    } else {
      counter += 33.33333;
      content.style.transform = 'translateX(' + counter + '%)';
    }
  };
  quoteArrowLeft.addEventListener('click', () => prevSlide(quoteContent));
  quoteArrowRight.addEventListener('click', () => nextSlide(quoteContent));
  testimonialArrowLeft.addEventListener('click', () => prevSlide(testimonialContent));
  testimonialArrowRight.addEventListener('click', () => nextSlide(testimonialContent));
}
slider();

const popUp = () => {
  const workImgArr = [...document.getElementsByClassName('work-img')];
  const img = document.getElementById('img');
  const modal = document.querySelector('.modal');
  workImgArr.forEach(e => {
    e.onclick = function () {
      console.log(e);
      modal.classList.add('modal-flex');
      img.src = this.src;
    }
  });
  modal.onclick = () => {
    modal.classList.remove('modal-flex');
  }
}
popUp();


