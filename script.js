document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');

    // Function to set the theme based on the user's preference
    const setPreference = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme-preference', theme);
    };

    // Get the user's preferred theme from local storage or their system settings
    const getStoredPreference = () => {
        const storedTheme = localStorage.getItem('theme-preference');
        if (storedTheme) {
            return storedTheme;
        }
        // Check for system preference if no theme is stored
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Set the initial theme on page load
    const initialTheme = getStoredPreference();
    setPreference(initialTheme);

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setPreference(newTheme);
    });
});