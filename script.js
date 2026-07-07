const checkboxes = document.querySelectorAll('.check-grid input[type="checkbox"]');
checkboxes.forEach((box, index) => {
  const key = `seattle-girls-trip-check-${index}`;
  box.checked = localStorage.getItem(key) === 'true';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked));
});
