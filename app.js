
const cat1 = document.createElement('img');
const cat2 = document.createElement('img');
const name1 = document.createTextNode('Excited Cat');
const name2 = document.createTextNode('Lazy Cat');

cat1.src = "image/excitedcat.jpeg";
cat1.className = "img-fluid"
cat2.src = "image/lazycat.jpeg";
cat2.className = "img-fluid"

document.querySelector(".name1").appendChild(name1);
document.querySelector(".name2").appendChild(name2);
document.querySelector(".cat1").appendChild(cat1);
document.querySelector(".cat2").appendChild(cat2);

let clicks1 = 0;
let clicks2 = 0;

$('.cat1').click(function() {
  clicks1 ++;
  $('.counter1').html(clicks1);
})

$('.cat2').click(function() {
  clicks2 ++;
  $('.counter2').html(clicks2);
})
