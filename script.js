document.querySelectorAll('.toggle-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);
    const isHidden = target.hasAttribute('hidden');

    if (isHidden) {
      target.removeAttribute('hidden');
      button.textContent = 'Show less';
    } else {
      target.setAttribute('hidden', '');
      button.textContent = 'Show more';
    }
  });
});
