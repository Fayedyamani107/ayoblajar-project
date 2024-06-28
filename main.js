function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'fayed' && password === '123') {
        showPage('levelSelectionPage');
    } else {
        alert('Username atau password salah. Coba lagi.');
    }
}

function register() {
    showPage('levelSelectionPage');
}

function selectLevel(level) {
    if (level === 'sd') {
        showPage('sdPage');
    } else if (level === 'smp') {
        showPage('smpPage');
    } else if (level === 'sma') {
        showPage('mainMenu');
    }
}
