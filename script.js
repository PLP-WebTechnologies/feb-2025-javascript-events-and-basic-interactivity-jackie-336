

// Button to change text or color
document.getElementById('colorChangeBtn').addEventListener('click', function() {
    this.style.backgroundColor = 'purple';
    this.textContent = "Color Changed!";
});

// Image gallery hover effect
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});

// Accordion content
const accBtns = document.querySelectorAll('.accordionBtn');
accBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});
