document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan data pengguna ke Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Cek apakah username sudah ada
    const existingUser  = users.find(user => user.username === username);
    if (existingUser ) {
        alert('Username sudah terdaftar. Silakan gunakan username lain.');
        return;
    }

    // Tambahkan pengguna baru
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Akun berhasil dibuat! Silakan login.');
    window.location.href = 'login_chatbot.html'; // Arahkan ke halaman login
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
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href=('buku kenangan.html')
});
