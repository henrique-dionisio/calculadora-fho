document.addEventListener('DOMContentLoaded', function() {
    let darkModeToggle = document.getElementById('switch-shadow');
  
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', function() {
        let isDarkMode = darkModeToggle.checked;
  
        document.body.classList.toggle('dark-mode', isDarkMode);
  
        localStorage.setItem('darkMode', isDarkMode);
      });
    }
  
    let storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      document.body.classList.toggle('dark-mode', JSON.parse(storedDarkMode));
    }
  });
  
