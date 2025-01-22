document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const applyButton = document.getElementById('apply-color');

 
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        applyThemeColor(savedColor);
        colorPicker.value = savedColor; 
    }

    
    applyButton.addEventListener('click', () => {
        const selectedColor = colorPicker.value;
        localStorage.setItem('themeColor', selectedColor); 
        applyThemeColor(selectedColor);
    });

    
    function applyThemeColor(color) {
        const darkerColor = darkenColor(color, 20); 
        document.documentElement.style.setProperty('--theme-color', color);
        document.documentElement.style.setProperty('--theme-color-dark', darkerColor);
    }

    
    function darkenColor(color, percentage) {
        const amount = Math.round(2.55 * percentage); 
        const [r, g, b] = color
            .match(/\w\w/g)
            .map((hex) => parseInt(hex, 16))
            .map((value) => Math.max(0, value - amount)); 
        return `rgb(${r}, ${g}, ${b})`;
    }
});
