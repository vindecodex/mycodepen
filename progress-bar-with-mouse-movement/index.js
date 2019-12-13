let rating = document.querySelector(".rating")
let rate = document.querySelector(".rate")
// we get the position of the element from the browser
let ratingRect = rating.getBoundingClientRect();
let sp = document.querySelector("span")

rating.addEventListener('mousemove',function(e){
  // mousemove e contains x and y of the mouse from the element
  let val = e.pageX - ratingRect.left //subtract it with element postion left/x to avoid mouse gap
  val = val > 100 ? 100 : val // must not be more than 100
  val = val < 20 ? 20 : val // must not be less than 20
  rate.style.width = val + "%"
  rate.setAttribute("rates",val) // we set custom attribute
  sp.innerHTML = (val * .05).toFixed(1) // multiply it by .05 if we want perfect score will be 5 with decimal places of 1 as we set on toFixed function
})
