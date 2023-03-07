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

// input lenght
const dataAttr = document.querySelectorAll('[data-dot-amount]');
const inputValue = document.querySelector('.another-money')
const inputValues = [];

inputValue.addEventListener('input', function(){
  if(this.value.length > 4) {
    this.value = this.value.slice(0,4); 
  }
  const isIndex = inputValues.indexOf(this.value)
  if(isIndex !== -1){
    const selector = isIndex + 1
    document.getElementById(selector).checked = true
    // console.log(dataAttr[isIndex].children);
    // console.log(dataAttr[isIndex].children.item(0));
    // dataAttr[isIndex].children.item(0).checked = true
  }
})

const reviewer = function(review){
  review.addEventListener('click', function(e) {
    const userId = +e.target.closest("[data-dot-amount]").getAttribute('data-dot-amount').slice(1);
    inputValue.value = userId
  })
}

dataAttr.forEach(function(review){
  inputValues.push(review.getAttribute('data-dot-amount').slice(1));
  reviewer(review);
})



}

document.addEventListener("DOMContentLoaded", ready);