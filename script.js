document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = '☀️';
    const moonIcon = '🌙';

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.innerHTML = sunIcon;
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggle) themeToggle.innerHTML = moonIcon;
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.hasAttribute('data-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Apply initial theme on page load
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));


    // --- Share Site Button ---
    const navShareBtn = document.getElementById('nav-share-btn');
    if (navShareBtn) {
        navShareBtn.addEventListener('click', () => {
            const siteUrl = window.location.origin;
            navigator.clipboard.writeText(siteUrl).then(() => {
                const originalText = navShareBtn.innerHTML;
                navShareBtn.innerHTML = '✅ Copied!';
                setTimeout(() => {
                    navShareBtn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy site URL: ', err);
                alert('Failed to copy link.');
            });
        });
    }
});