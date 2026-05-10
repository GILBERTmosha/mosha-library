const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySSR9yZQcxlgqNhnkWmhjKmeXgb2wrdiQi184BmuCDBQ0lOraGSFDTo9YpBLtFJF_XDw/exec';
const ADMIN_PASSWORD = 'baraka0793770731';

const LANGUAGES = [
{ code: 'en', name: 'English', flag: '🇬🇧' },
{ code: 'sw', name: 'Swahili', flag: '🇹🇿' },
{ code: 'fr', name: 'French', flag: '🇫🇷' },
{ code: 'ar', name: 'Arabic', flag: '🇸🇦' },
{ code: 'zh', name: 'Chinese', flag: '🇨🇳' },
{ code: 'es', name: 'Spanish', flag: '🇪🇸' },
{ code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
{ code: 'hi', name: 'Hindi', flag: '🇮🇳' },
{ code: 'de', name: 'German', flag: '🇩🇪' },
{ code: 'ru', name: 'Russian', flag: '🇷🇺' }
];

let documents = [];
let filteredDocuments = [];
let currentCategory = 'all';
let currentLanguage = 'all';
let isAdmin = false;
let logoPressTimer = null;
let footerTaps = 0;
let footerTapTimer = null;
let keySequence = '';
let fabOpen = false;

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

class Particle {
constructor() {
this.x = Math.random() * canvas.width;
this.y = Math.random() * canvas.height;
this.size = Math.random() * 2 + 0.5;
this.speedX = Math.random() * 0.5 - 0.25;
this.speedY = Math.random() * 0.5 - 0.25;
this.opacity = Math.random() * 0.5 + 0.2;
}
update() {
this.x += this.speedX;
this.y += this.speedY;
if (this.x > canvas.width) this.x = 0;
if (this.x < 0) this.x = canvas.width;
if (this.y > canvas.height) this.y = 0;
if (this.y < 0) this.y = canvas.height;
}
draw() {
ctx.fillStyle = `rgba(109, 40, 217, ${this.opacity})`;
ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
ctx.fill();
}
}

function initParticles() {
resizeCanvas();
particles = [];
for (let i = 0; i < 100; i++) {
particles.push(new Particle());
}
}

function animateParticles() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
particles.forEach(particle => {
particle.update();
particle.draw();
});
for (let i = 0; i < particles.length; i++) {
for (let j = i + 1; j < particles.length; j++) {
const dx = particles[i].x - particles[j].x;
const dy = particles[i].y - particles[j].y;
const distance =
