//pop-up
function show(state)
{
document.getElementById('pop-up').style.display = state;
document.getElementById('wrap-pop-up').style.display = state;
}
//End pop-up


//Header
var header = document.querySelector('.header-top');
var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('fixed') :
                                  header.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);
//End Header