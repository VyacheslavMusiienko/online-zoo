
function ready() {
  // refresh window after change width 
  let oldWidth = window.innerWidth;

  // durger pop up
  let openBurger = document.querySelector('.burger')
  let menu = document.querySelector('.popup')
  let closeBurger = document.querySelector('.close-header')



// refresh window after change width 

  window.onresize = function () {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;
    }
    location.reload();
  };

// durger pop up
  openBurger.onclick = function() {
    menu.style.right = 0;
  }
  closeBurger.onclick = function() {
    menu.style.right = "-100%";
  }
  window.onclick = function(event) {
    if (event.target == menu) {
      menu.style.right = "-100%";
    }
  }

//carousel cards

// cards data

const data = [
  {
    id:1,
    title: 'giant Pandas',
    description: 'Native to Southwest China',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/giant Pandas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:2,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:3,
    title: 'Gorillas',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Gorillas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:4,
    title: 'Two-toed Sloth',
    description: 'Mesoamerica, South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Two-toed Sloth.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:5,
    title: 'cheetahs',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/cheetahs.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:6,
    title: 'Penguins',
    description: 'Native to Antarctica',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Penguins.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:7,
    title: 'Penguins',
    description: 'Native to Antarctica',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Penguins.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:8,
    title: 'cheetahs',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/cheetahs.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:9,
    title: 'cheetahs',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/cheetahs.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:10,
    title: 'Gorillas',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Gorillas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:11,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:12,
    title: 'giant Pandas',
    description: 'Native to Southwest China',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/giant Pandas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:13,
    title: 'giant Pandas',
    description: 'Native to Southwest China',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/giant Pandas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:14,
    title: 'Gorillas',
    description: 'Native to Africa',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Gorillas.png",
    iconUrl: "./assets/img/icon/banana-bamboo_icon.svg"
  },
  {
    id:15,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:16,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:17,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
  {
    id:18,
    title: 'Eagles',
    description: 'Native to South America',
    location: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum?',
    imageUrl: "./assets/img/cards/Eagles.png",
    iconUrl: "./assets/img/icon/meet-fish_icon.svg"
  },
]
// randomaizer
const shuffle = function(array) {
  // from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// card renderer

const cardHtml = function(imageUrl, title, description, iconUrl, location) {
  return `
    <div class="card">
      <div class="card-in">
            <img class="card__image" src="${imageUrl}" alt="pikcher">
            <div class="card__content">
              <div class="cards__info">
                <div class="card__title">${title}</div>

                <div class="card__discription">${description}</div>
              </div>

              <img class="cards_icon" src="${iconUrl}" alt="fish_icon">
        </div>
      </div>
      <div class="card-out">
          <span class="card-name">${title}</span>

          <div class="card-location">${location}</div>
      </div>
    </div>
  `
}

const dataSliders = shuffle(data);

let carouselBlockItemsAmount
  if(window.innerWidth > 980){
    carouselBlockItemsAmount = 6
  } else{
    carouselBlockItemsAmount = 4
  }
  const carouselBlockAmount = Math.round(data.length / carouselBlockItemsAmount);
  const carousel = document.querySelector(".carousel");
  const carouselInner = document.querySelector(".carousel__inner");
  let currTransl = [];
  let currentIndex = 0;
  let translationComplete = true;
  let moveOffset = 0;

  const transitionCompleted = function() {
    translationComplete = true;
  }

  moveOffset = parseInt(window.getComputedStyle(carousel).width, 10);
  carouselInner.style.width = (carouselBlockAmount * moveOffset) + 'px';

  for (let blockIndex = 0; blockIndex < carouselBlockAmount; blockIndex++) {
    currTransl[blockIndex] = -moveOffset;
    const newBlock = document.createElement("div");
    newBlock.classList.add('carousel__block');
    newBlock.addEventListener("transitionend", transitionCompleted, true);                    
    newBlock.addEventListener("webkitTransitionEnd", transitionCompleted, true); 

    for (let blockItemIndex = 0; blockItemIndex < carouselBlockItemsAmount && dataSliders.length; blockItemIndex++) {
      const blockItemData = dataSliders.shift();
      const newBlockItem = document.createElement("div");
      newBlockItem.classList.add('carousel__block-item');
      const newBlockCardHtml = cardHtml(blockItemData.imageUrl, blockItemData.title, blockItemData.description, blockItemData.iconUrl, blockItemData.location);
      newBlockItem.innerHTML = newBlockCardHtml;
      newBlock.appendChild(newBlockItem);
    }

    carouselInner.appendChild(newBlock);
  }

  carouselInner.insertBefore(carouselInner.children[carouselBlockAmount - 1], carouselInner.children[0]);

  document.querySelector('.botton-list__left').addEventListener('click', prev, true);
  document.querySelector('.botton-list__right').addEventListener('click', next, true);


  function prev() {
    if (translationComplete === true) {
      translationComplete = false;
      currentIndex--;
      if (currentIndex == -1) {
          currentIndex = carouselBlockAmount-1;
      }
      let outerIndex = (currentIndex) % carouselBlockAmount;
      for (let i = 0; i < carouselBlockAmount; i++) {
        let slide = document.getElementsByClassName("carousel__block")[i];    
        slide.style.opacity = '1';    
        slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
        currTransl[i] = currTransl[i]+moveOffset;
      }
      let outerSlide = document.getElementsByClassName("carousel__block")[outerIndex];
      outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*carouselBlockAmount))+'px)';
      outerSlide.style.opacity = '0';
      currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(carouselBlockAmount);
    }
  }

  function next() { 
    if (translationComplete === true) {
      translationComplete = false;
      let outerIndex = (currentIndex) % carouselBlockAmount;
      currentIndex++;
      for(let i = 0; i < carouselBlockAmount; i++) {
        let slide = document.getElementsByClassName("carousel__block")[i];    
        slide.style.opacity = '1';    
        slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
        currTransl[i] = currTransl[i]-moveOffset;
      }
      let outerSlide = document.getElementsByClassName("carousel__block")[outerIndex];
      outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*carouselBlockAmount))+'px)';
      outerSlide.style.opacity = '0';
      currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(carouselBlockAmount);
    }
  }

// scroll bar

const testimonials =[
  {
    id:1,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Michael John",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:2,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:3,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Fredericka Michelin",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:4,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Mila Riksha",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:5,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Mila Riksha",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:6,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:7,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:8,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:9,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:10,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Oskar Samborsky",
    act: "Local Austria • Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
  },
  {
    id:11,
    avatar: "./assets/img/icon/user_icon.svg",
    name: "Mila Riksha",
    act: "Local Austria • Today",
    text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals"
  },
]
let htmlCode = ``;

testimonials.forEach(function(singleObjects) {
  htmlCode =
    htmlCode +
    `
    <div class="testimonials-reviews-column" data-uid="${singleObjects.id}">
      <img class="testimonials-reviews-column__avatar" src="${singleObjects.avatar}" alt="avatar">
      <div class="testimonials-reviews-column__name">${singleObjects.name}</div>
      <div class="testimonials-reviews-column__act">${singleObjects.act}</div>
      <p class="testimonials-reviews-column__text">${singleObjects.text}
      </p>
    </div>
    `
  
  })
const testimonialsCards = document.querySelector(".testimonials-reviews");
testimonialsCards.innerHTML = htmlCode;
function sliderRow() {
  const input = document.querySelector('.testimonials__range');
  const container = document.querySelector('.testimonials-reviews');
  const row = document.querySelector('.testimonials__range');

  input.addEventListener('input', moveRow);

  function moveRow() {
    let num = 7;
    if (window.innerWidth < 1001) {
      num = 8;
      row.setAttribute('max', 8);
    }
    container.style.right = (container.scrollWidth - container.clientWidth) * input.value / num + 'px';
  }
}
sliderRow();
// cards pop up

  const getRenderedModalBody = function(avatar, name, text, act){
    return `
    <div class="pop_up_container">
      <div class="pop_up_body">
        <div class="slider-header">
          <div class="slider-header-logo"><img src="${avatar}" alt="user_icon"></div>

          <div class="header-status">
            <div class="status-name">${name}</div>

            <div class="substatus">
              <div class="location">${act}</div>
            </div>
          </div>
        </div>

        <div class="pop_up-discription">${text}
        </div>
      </div>
      <div class="close">&times;</div>
    </div>
    `
  }

  const reviewBlocks = document.querySelectorAll(".testimonials-reviews-column");
  const modalBlock = document.querySelector(".wrapper")

  const reviewPopupOpener = function(review) {
    review.addEventListener('click', function(e) {
        const userId = +e.target.closest(".testimonials-reviews-column").getAttribute('data-uid');
        const user = testimonials.find((testimonials) => testimonials.id === userId);
        let div = document.createElement('div');
        div.className = "pop_up";
        let modal = getRenderedModalBody(user.avatar, user.name, user.text, user.act)
        div.innerHTML = modal
        modalBlock.appendChild(div)
        
        const popUpModal = document.querySelector(".pop_up")
        const closeModal = document.querySelector(".close")

        closeModal.addEventListener('click', function(){
          popUpModal.remove()
        })
        
        popUpModal.addEventListener('click', function(){
          popUpModal.remove()
        })
        
    });
  };

  reviewBlocks.forEach(function(review){
    reviewPopupOpener(review);
  })

}

document.addEventListener("DOMContentLoaded", ready);

