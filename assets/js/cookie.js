(function () {
  const banner = document.querySelector('[data-cookie-banner]');
  if (!banner) return;
  const storageKey = 'alpha-cookie-choice';
  const stored = localStorage.getItem(storageKey);

  const hide = () => {
    banner.style.display = 'none';
  };

  if (stored) {
    hide();
    return;
  }

  banner.style.display = 'block';

  const acceptBtn = banner.querySelector('[data-cookie-accept]');
  const declineBtn = banner.querySelector('[data-cookie-decline]');

  const storeChoice = (value) => {
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
      // fallback intentionally minimal
    }
    hide();
  };

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => storeChoice('accepted'));
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => storeChoice('declined'));
  }
})();
