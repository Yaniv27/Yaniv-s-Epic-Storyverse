document.querySelectorAll('.skill-bar').forEach(bar => {
    const skillValue = bar.getAttribute('data-skill');
    const fill = bar.querySelector('.skill-fill');
    fill.style.width = skillValue + '%'; // Set the fill width
});
