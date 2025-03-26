// Functie om een random kleur te genereren
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Functie om disco-effect te maken
function createDiscoBall() {
    const discoBox = document.createElement('div');
    discoBox.style.width = '200px';
    discoBox.style.height = '200px';
    discoBox.style.position = 'absolute';
    discoBox.style.borderRadius = '50%'; 
    discoBox.style.transition = 'all 0.5s ease'; // Vloeiende overgangen
    
    // Willekeurige positie
    const newPosition = {
        x: Math.floor(Math.random() * (window.innerWidth - 100)),
        y: Math.floor(Math.random() * (window.innerHeight - 100))
    };
    discoBox.style.left = `${newPosition.x}px`;
    discoBox.style.top = `${newPosition.y}px`;
    

    function animate() {
        discoBox.style.backgroundColor = generateRandomColor();
        
        // Willekeurige rotatie
        const rotation = Math.floor(Math.random() * 360);
        discoBox.style.transform = `rotate(${rotation}deg) scale(${1 + Math.random() * 0.5})`;
        
        // Willekeurige beweging
        const moveX = Math.random() * 20 - 10; // -10 tot 10
        const moveY = Math.random() * 20 - 10;
        discoBox.style.left = `${newPosition.x + moveX}px`;
        discoBox.style.top = `${newPosition.y + moveY}px`;
    }
    
    const animationInterval = setInterval(animate, 500);
    
    document.body.appendChild(discoBox);
    
    animate();
}

// Functie om disco-achtergrond te maken
function createDiscoBackground() {
    document.body.style.transition = 'background-color 0.5s ease';
    function changeBackground() {
        document.body.style.backgroundColor = generateRandomColor();
    }
    
    setInterval(changeBackground, 100);
}

// Event listeners voor de knoppen
changeColorBtn.addEventListener('click', createDiscoBall);
discoModeBtn.addEventListener('click', createDiscoBachground);