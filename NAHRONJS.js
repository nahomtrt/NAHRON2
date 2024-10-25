// Elements
const display = document.getElementById('display');
const tempSlider = document.getElementById('temp-slider');
const currentTemp = document.getElementById('current-temp');
const seatHeatToggle = document.getElementById('seat-heat-toggle');
const bluetoothToggle = document.getElementById('bluetooth-toggle');
const nowPlaying = document.getElementById('now-playing');
const climateScreen = document.getElementById('climate-screen');
const settingsScreen = document.getElementById('settings-screen');
const musicScreen = document.getElementById('music-screen');
const menuScreen = document.getElementById('menu-screen');

const climateBtn = document.getElementById('climate-btn');
const settingsBtn = document.getElementById('settings-btn');
const musicBtn = document.getElementById('music-btn');
const navBtn = document.getElementById('nav-btn');

function hideAllScreens() {
    document.querySelectorAll('.menu-screen').forEach(screen => {
        screen.style.display = 'none'; // Hide all screens
    });
    display.style.display = 'none'; 
}

function showScreen(screenId) {
    hideAllScreens(); 
    if (screenId === 'menu-screen') {
        menuScreen.style.display = 'flex'; 
        display.style.display = 'block'; 
        display.innerHTML = 'Select an option from the menu.';
    } else {
        document.getElementById(screenId).style.display = 'block'; 
    }
}

// Initial screen setup
showScreen('menu-screen');

// Event Listeners for menu buttons
climateBtn.addEventListener('click', () => {
    showScreen('climate-screen');
});

settingsBtn.addEventListener('click', () => {
    showScreen('settings-screen');
});

musicBtn.addEventListener('click', () => {
    showScreen('music-screen');
    nowPlaying.textContent = "Now Playing: Song 1"; // Default song info
});

// Temperature Slider Event
tempSlider.addEventListener('input', () => {
    const tempValue = tempSlider.value;
    currentTemp.textContent = `${tempValue}°F`; // Update temperature display
    updateSliderBackground(tempValue); // Update the slider background color
});

// Function to update the slider background color
function updateSliderBackground(value) {
    const min = tempSlider.min || 0;
    const max = tempSlider.max || 100;
    const percentage = (value - min) / (max - min);


    const r = Math.min(255, Math.floor(255 * percentage)); 
    const g = 216 - Math.floor(216 * percentage); 
    const b = 230 - Math.floor(230 * percentage); 

    tempSlider.style.background = `linear-gradient(to right, rgb(173, 216, 230), rgb(${r}, ${g}, ${b}))`;
}

// Initialize the slider on page load
updateSliderBackground(tempSlider.value);

// Event Listener for Navigation Button
navBtn.addEventListener('click', () => {
    showScreen('climate-screen'); 
    initMap(); 
});

// Seat Heating Toggle
seatHeatToggle.addEventListener('click', () => {
    seatHeatToggle.textContent = seatHeatToggle.textContent === 'OFF' ? 'ON' : 'OFF';
});

// Bluetooth Toggle
bluetoothToggle.addEventListener('click', () => {
    // bluetoothToggle.textContent = bluetoothToggle.textContent === 'OFF' ? 'ON' : 'OFF';
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, 
        zoom: 12, 
    });
}
function toggleTheme() {
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        themeSwitch.checked = true;
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});
document.addEventListener('DOMContentLoaded', () => {
   
    const bluetoothToggle = document.getElementById('bluetooth-toggle');
    bluetoothToggle.addEventListener('click', () => {
        if (bluetoothToggle.textContent === 'ON') {
            bluetoothToggle.textContent = 'OFF';
            bluetoothToggle.classList.add('off');
        } else {
            bluetoothToggle.textContent = 'ON';
            bluetoothToggle.classList.remove('off');
        }
    });

    
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', () => {
        toggleTheme();
    });
});

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}