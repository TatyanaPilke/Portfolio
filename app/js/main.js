//  start SWIPER skills
var swiper = new Swiper('.skills__container', {
  spaceBetween: 30,
  slidesPerView: 9,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
//  end SWIPER  

//  start SWIPER reviews
var swiper = new Swiper('.reviews__container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
});
//  end SWIPER reviews

// start Anchor links in header

$(".menu__link, .back-top").on("click", function (event) {
	event.preventDefault();
	 var id  = $(this).attr('href'),
		 top = $(id).offset().top;		
	 $('body,html').animate({scrollTop: top}, 1500);
 }); 
// end Anchor links in header

// background-color in header__top 
$window = $(window);
$window.scroll(function(){
		$scrollPosition = $window.scrollTop();
		console.log($scrollPosition);
		if ($scrollPosition > 50) {
				$('.header__top').addClass('header__top--bg');
				$('.back-top').addClass('show');
		} else {
				$('.header__top').removeClass('header__top--bg');
				$('.back-top').removeClass('show');
		}
})

// start ACCORDION(FAQ) 
$(document).ready(function() {
	$('.accordion__trigger').click(function(event) {
		if($('.accordion__list').hasClass('one')){
			$('.accordion__trigger').not($(this)).removeClass('active');
			$('.accordion__collapse').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
// end ACCORDION 

// Start popup 

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which ===27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


// end popup 

// start button effect

const button = document.getElementById('btn');

button.addEventListener("mousemove", (e)=> {
  
  const posX = e.pageX - e.target.offsetLeft;
  const posY = e.pageY - e.target.offsetTop;
  
  e.target.style.setProperty("--x", `${posX}px`);
  e.target.style.setProperty("--y", `${posY}px`);
  
});