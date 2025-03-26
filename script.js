// Functie om een random kleur te genereren
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Maakt een kleur hiervan
    return `rgb(${r}, ${g}, ${b})`;
}

// Functie om achtergrondkleur aan te passen
function adjustBackgroundColor(color) {
    // Verandert de kleur naar een lichtere transparante versie
    return color.replace('rgb', 'rgba').replace(')', ', 0.2)');
}

// Event listener voor de knop
changeColorBtn.addEventListener('click', function() {
    // Genereer een nieuwe kleur
    const newColor = generateRandomColor();
    
    // Update de box kleur
    colorBox.style.backgroundColor = newColor;

    document.body.style.backgroundColor = adjustBackgroundColor(newColor);
});