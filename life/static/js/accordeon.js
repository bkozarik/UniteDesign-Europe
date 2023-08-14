document.addEventListener('DOMContentLoaded', () => {
	const accordeon = document.querySelector('.js-accordion');
	if(accordeon) {
		const accordeonButtons = accordeon.querySelectorAll(`[data-action="accordion"]`);
		if(accordeonButtons) {
			accordeonButtons.forEach((accordeonButton) => {
				accordeonButton.addEventListener('click', function() {
					let active = this;
					accordeonButtons.forEach((item) => {
						let target = item.dataset.target;
						let panel = accordeon.querySelector(`[data-panel="${target}"]`);
						if(item === active) {
							item.classList.toggle('is-open');
							panel.classList.toggle('is-show');
						} else {
							item.classList.remove('is-open');
							panel.classList.remove('is-show');
						}
					});
				});
			});
		}
	}
});