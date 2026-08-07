(function () {
	var toggle = document.querySelector('.nav-toggle');
	var navigation = document.querySelector('.site-nav');

	if (!toggle || !navigation) {
		return;
	}

	function closeNavigation() {
		toggle.classList.remove('is-open');
		navigation.classList.remove('is-open');
		toggle.setAttribute('aria-expanded', 'false');
	}

	toggle.addEventListener('click', function () {
		var isOpen = navigation.classList.toggle('is-open');
		toggle.classList.toggle('is-open', isOpen);
		toggle.setAttribute('aria-expanded', String(isOpen));
	});

	navigation.addEventListener('click', function (event) {
		if (event.target.closest('a')) {
			closeNavigation();
		}
	});

	document.addEventListener('click', function (event) {
		if (navigation.classList.contains('is-open') &&
			!navigation.contains(event.target) && !toggle.contains(event.target)) {
			closeNavigation();
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			closeNavigation();
		}
	});
}());
