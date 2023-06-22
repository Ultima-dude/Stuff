let input = document.getElementById('input');
let error = document.getElementById('error');

input.addEventListener('blur', function() {
    if(!input.value.includes('@')) {
        input.classList.add('invalid');
        error.textContent = 'Введи норм мыло';
    }
});

input.addEventListener('focus', function(event) {
    if(event.target.classList.contains('invalid')) {
        event.target.classList.remove('invalid');
        error.textContent = '';
    }
})