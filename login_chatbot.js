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
    window.location.href=('chatbot.html')
});
