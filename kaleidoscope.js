var pieSize = 30;

for (i=1;i<4;i++) {
  $(".pie__corner:first-child").clone().appendTo(".pie");
}

const moveBg = () => {
  $('.pie__piece').width(pieSize+pageYOffset/$('.container').height()*pieSize+'rem');
};

moveBg();

window.addEventListener('scroll', function() {
  moveBg();
 });
