const button = document.getElementById('myButton');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#ff0027';
    button.style.borderRadius = '20px';
    button.style.transform = 'scale(1.4)';
    button.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#0D6EFD';
    button.style.borderRadius = '0%';
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
});
