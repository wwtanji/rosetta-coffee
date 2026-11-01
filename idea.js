const ART_SELECTOR = '.rosetta';
const REPLAY_SELECTOR = '[data-replay]';
const POURING_CLASS = 'is-pouring';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const art = document.querySelector(ART_SELECTOR);
const replayButton = document.querySelector(REPLAY_SELECTOR);

function pour() {
  art.classList.remove(POURING_CLASS);
  art.getBoundingClientRect();
  art.classList.add(POURING_CLASS);
}

if (!matchMedia(REDUCED_MOTION_QUERY).matches) pour();
replayButton.addEventListener('click', pour);
