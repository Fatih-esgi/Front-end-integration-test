
//containers assignation
const topContainer = document.querySelector('#topContainer');
const sliderContainer = document.querySelector('#slides');

//get post with tops category
const topPost = catsArray.find(post => post.category === 'Tops');
console.log("top post", topPost);

//remove top post from catsArray
catsArray.splice(topPost, 1);
console.log('catsArray after top remove', catsArray);

//create new array with 3 post per array
let arrays = [], size = 3;

for (let i = 0; i < catsArray.length; i += size)
    arrays.push(catsArray.slice(i, i + size));

console.log('array after rebuild', arrays);


//create topPost in #topContainer
function createTopPost() {
    topContainer.innerHTML = `
    <article class="topPost" style="background-image: url('${topPost.image}');">
        <div class="gradientOverlay">
            <p class="postCat">${topPost.category}</p>
            <h1 class="postTitle">${topPost.title}</h1>
            <p class="postContent">${topPost.content}</p>
            <a class="readMore" href="#">
                <span>Read More!</span>
                <svg class="pawWhite" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M7.95073 3.13542C7.95073 3.5 8.00769 3.84483 8.12161 4.16992C8.23553 4.49501 8.4244 4.77604 8.68822 5.01302C8.95203 5.25 9.26681 5.36849 9.63256 5.36849C10.0882 5.36849 10.5019 5.19379 10.8737 4.8444C11.2454 4.49501 11.5212 4.08333 11.7011 3.60937C11.881 3.13542 11.9709 2.67665 11.9709 2.23307C11.9709 1.86849 11.914 1.52365 11.8 1.19857C11.6861 0.873481 11.4972 0.592448 11.2334 0.355469C10.9696 0.11849 10.6548 0 10.2891 0C9.82742 0 9.41221 0.174696 9.04347 0.524089C8.67473 0.873481 8.40042 1.28364 8.22055 1.75456C8.04067 2.22548 7.95073 2.68576 7.95073 3.13542ZM11.0266 7.53776C11.0266 8.02387 11.1525 8.44618 11.4043 8.80469C11.6561 9.16319 12.0129 9.34245 12.4746 9.34245C12.9302 9.34245 13.3544 9.17383 13.7472 8.83659C14.1399 8.49935 14.4412 8.09375 14.651 7.61979C14.8609 7.14583 14.9658 6.68403 14.9658 6.23437C14.9658 5.74826 14.8399 5.32444 14.5881 4.96289C14.3363 4.60135 13.9795 4.42057 13.5178 4.42057C13.0622 4.42057 12.638 4.58919 12.2452 4.92643C11.8525 5.26367 11.5512 5.67079 11.3414 6.14779C11.1315 6.62478 11.0266 7.08811 11.0266 7.53776ZM7.48306 7.29167C6.77556 7.29167 6.01109 7.58789 5.18967 8.18034C4.36824 8.77279 3.68172 9.49284 3.13011 10.3405C2.5785 11.1882 2.30269 11.9614 2.30269 12.6602C2.30269 12.9397 2.35365 13.1721 2.45558 13.3574C2.55751 13.5428 2.70291 13.6795 2.89178 13.7676C3.08065 13.8557 3.27401 13.9164 3.47187 13.9499C3.66973 13.9833 3.89757 14 4.15539 14C4.56311 14 5.12521 13.8633 5.84171 13.5898C6.55821 13.3164 7.10533 13.1797 7.48306 13.1797C7.87878 13.1797 8.45588 13.3149 9.21435 13.5853C9.97282 13.8557 10.5739 13.9909 11.0176 13.9909C12.1148 13.9909 12.6634 13.5473 12.6634 12.6602C12.6634 12.1376 12.4956 11.5558 12.1598 10.9147C11.824 10.2737 11.4058 9.6888 10.9052 9.16016C10.4045 8.63151 9.84241 8.18793 9.21885 7.82943C8.59528 7.47092 8.01669 7.29167 7.48306 7.29167ZM5.33357 5.36849C5.69931 5.36849 6.01409 5.25 6.27791 5.01302C6.54172 4.77604 6.73059 4.49501 6.84451 4.16992C6.95843 3.84483 7.01539 3.5 7.01539 3.13542C7.01539 2.68576 6.92545 2.22548 6.74558 1.75456C6.5657 1.28364 6.2914 0.873481 5.92265 0.524089C5.55391 0.174696 5.1387 0 4.67703 0C4.31128 0 3.9965 0.11849 3.73269 0.355469C3.46887 0.592448 3.28001 0.873481 3.16609 1.19857C3.05217 1.52365 2.99521 1.86849 2.99521 2.23307C2.99521 2.67665 3.08514 3.13542 3.26502 3.60937C3.44489 4.08333 3.7207 4.49501 4.09244 4.8444C4.46418 5.19379 4.87789 5.36849 5.33357 5.36849ZM1.44829 4.42057C0.986612 4.42057 0.629862 4.60135 0.378039 4.96289C0.126215 5.32444 0.000303268 5.74826 0.000303268 6.23437C0.000303268 6.68403 0.10523 7.14583 0.315083 7.61979C0.524936 8.09375 0.826225 8.49935 1.21895 8.83659C1.61167 9.17383 2.03588 9.34245 2.49156 9.34245C2.95323 9.34245 3.30998 9.16319 3.56181 8.80469C3.81363 8.44618 3.93954 8.02387 3.93954 7.53776C3.93954 7.08811 3.83462 6.62478 3.62476 6.14779C3.41491 5.67079 3.11362 5.26367 2.7209 4.92643C2.32817 4.58919 1.90397 4.42057 1.44829 4.42057Z"
                    fill="#CECECE" />
                </svg>
            </a>
        </div>
    </article>`;
}

//create carousel in #carouselContainer
function createSlider() {
  let n = 1;
    for (let i of arrays) {
        console.log(i);
        
        sliderContainer.innerHTML += `
        <ul class="slide" id="slide${n++}">
            <li class="carouselItem1" style="background-image: url('${i[0].image}');">
            <a href="#">
                <div class="gradientOverlay">
                    <p class="postCat">${i[0].category}</p>
                    <h1 class="postTitle">${i[0].title}</h1>
                    <div class="infoPost">
                        <svg class="readTimeIco" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2209 8.15H6.8334V3.6M7.4834 1C3.8993 1 0.983398 3.9159 0.983398 7.5C0.983398 11.0841 3.8993 14 7.4834 14C11.0675 14 13.9834 11.0841 13.9834 7.5C13.9834 3.9159 11.0675 1 7.4834 1Z" stroke="#CECECE" stroke-width="1.5"/>
                        </svg>
                        <p class="readTime">${i[0].readingTime}</p>
                        <svg class="commentIco" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.58347 1C2.89388 1 2.23255 1.27393 1.74494 1.76154C1.25733 2.24915 0.983398 2.91049 0.983398 3.60007V8.8002C0.983398 9.48978 1.25733 10.1511 1.74494 10.6387C2.23255 11.1263 2.89388 11.4003 3.58347 11.4003V13.3503C3.58353 13.4679 3.61548 13.5833 3.67592 13.6841C3.73635 13.785 3.82302 13.8675 3.92667 13.923C4.03033 13.9785 4.1471 14.0049 4.26454 13.9993C4.38199 13.9936 4.49571 13.9563 4.59359 13.8911L8.32989 11.4003H11.3837C12.0732 11.4003 12.7346 11.1263 13.2222 10.6387C13.7098 10.1511 13.9837 9.48978 13.9837 8.8002V3.60007C13.9837 2.91049 13.7098 2.24915 13.2222 1.76154C12.7346 1.27393 12.0732 1 11.3837 1H3.58347Z" stroke="#CECECE" stroke-width="1.5"/>
                        </svg>
                        <p class="comment">${i[0].comments}</p>
                    </div>
                </div>
                </a>
            </li> 
            <div class="leftCol">  
            <li class="carouselItem2" style="background-image: url('${i[1].image}');">
            <a href="#">
                <div class="gradientOverlay">
                    <h1 class="postTitle">${i[1].title}</h1>
                </div>
                </a>
            </li>
            <li class="carouselItem3" style="background-image: url('${i[2].image}');">
            <a href="#">
                <div class="gradientOverlay">
                    <h1 class="postTitle">${i[2].title}</h1>
                </div>
                </a>
            </li>
            </div>
        </ul>
        `;

    }
}

//slider functions 
let slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

function slide(wrapper, items, prev, next) {
  let posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}

//running scripts
createTopPost();
createSlider();
slide(slider, sliderItems, prev, next);


