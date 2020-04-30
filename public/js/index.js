function setTransformOriginToElementCenter (element) {
  var box = element.getBBox();
  var x = box.x + (box.width / 2);
  var y = box.y + (box.height / 2);

  element.style.transformOrigin = x + 'px ' + y + 'px';
}

var svg = document.getElementById('svg');
var homeBtn = document.getElementById('home-btn');
var backElements = document.querySelectorAll('#back-elements > g');

homeBtn.addEventListener('click', function (e) {
  svg.classList.toggle('active');

  var rect = this.querySelector('rect');

  rect.style.animation = 'scaledown .3s';
  setTimeout(function () { rect.style.animation = ''; }, 300);
});

setTransformOriginToElementCenter(homeBtn);
setTransformOriginToElementCenter(homeBtn.querySelector('rect'));
setTransformOriginToElementCenter(document.getElementById('shadow'));
setTransformOriginToElementCenter(document.getElementById('screen'));
setTransformOriginToElementCenter(document.getElementById('blinking-eye'));

backElements.forEach(function (g) {
  setTransformOriginToElementCenter(g);

  g.addEventListener('mouseenter', function (e) {
    if (g.classList.contains('cross')) {
      g.style.animation = 'rotate cubic-bezier(.68,-0.55,.27,1.55) .8s';
      setTimeout(function () { g.style.animation = ''; }, 800);
    } else {
      g.style.animation = 'scale .5s';
      setTimeout(function () { g.style.animation = ''; }, 500);
    }
  });
});