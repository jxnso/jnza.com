<script>
  const toggleBtn = document.getElementById('mode-toggle');
  const body = document.body;

  // Fonction pour appliquer le mode selon la sauvegarde
  function applyMode(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      toggleBtn.textContent = 'Mode Clair ☀️';
    } else {
      body.classList.remove('dark-mode');
      toggleBtn.textContent = 'Mode Sombre 🌙';
    }
  }

  // Au chargement, applique la préférence enregistrée
  const savedMode = localStorage.getItem('mode') || 'light';
  applyMode(savedMode);

  // Sur click, toggle et sauvegarde
  toggleBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
      applyMode('light');
      localStorage.setItem('mode', 'light');
    } else {
      applyMode('dark');
      localStorage.setItem('mode', 'dark');
    }
  });
</script>
