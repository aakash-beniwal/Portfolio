// ===== Theme Toggle =====
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle theme on click
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  // Click glow animation
  themeToggleBtn.style.boxShadow = isDarkMode
    ? '0 0 20px var(--btn-bg)'
    : '0 0 15px var(--btn-bg)';
  setTimeout(() => {
    themeToggleBtn.style.boxShadow = '';
  }, 300);
});

// ===== Copy Email to Clipboard =====
function copyEmail(event) {
  event.preventDefault(); // Prevent default mailto action

  const email = "aakashbeniwal075@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showTooltip(event.target, "Copied!");
  }).catch(err => {
    console.error("Failed to copy email: ", err);
  });
}

