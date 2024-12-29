document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ambil data pengguna dari Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah username dan password cocok ```javascript
    const user = users.find(user => user.username === username && user.password === password);

    // Cek apakah pengguna ditemukan
    if (user) {
        alert('Login berhasil! Selamat datang, ' + username + '!');
        // Arahkan ke halaman selanjutnya (misalnya dashboard)
        window.location.href = 'buku kenangan.html'; // Uncomment jika ada halaman dashboard
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});

const inputs = document.querySelectorAll('.input');

const addFocusClass = (e) => {
    e.classList.add('focus');
}

const removeFocusClass = (e) => {
    if(e.querySelector('.input').value === '') {
        e.classList.remove('focus');
    }
}

inputs.forEach(input => {
    const parent = input.parentNode.parentNode;
    input.addEventListener('focus', () => addFocusClass(parent));
    input.addEventListener('blur', () => removeFocusClass(parent));
})
