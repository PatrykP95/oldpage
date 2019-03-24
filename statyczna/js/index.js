var ROOT = document.documentElement;
var MIN = 10;
var THRESHOLD = innerHeight * (1.2 - 0.225);
var update = function update(e) {
  var scroll = Math.floor(scrollY / innerHeight * 100);
  if (scrollY > THRESHOLD) {
    var progress = Math.floor((scrollY - THRESHOLD) / (document.body.scrollHeight - innerHeight - THRESHOLD) * 100);
    ROOT.style.setProperty('--content', progress);
  }
  ROOT.style.setProperty('--scroll', Math.max(0, Math.min(scroll, 100 - MIN)));
};
window.addEventListener('scroll', update);