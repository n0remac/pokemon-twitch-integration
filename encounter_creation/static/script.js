document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const hoverBox = document.createElement('div');
    hoverBox.classList.add('hover-box', 'hidden');
    imageContainer.appendChild(hoverBox);

    const tileSize = 48; // Adjust this size to match your grid

    imageContainer.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate grid snap positions
        const gridX = Math.floor(x / tileSize) * tileSize;
        const gridY = Math.floor(y / tileSize) * tileSize;

        // Position the hover box
        hoverBox.style.left = gridX + 'px';
        hoverBox.style.top = gridY + 'px';
        hoverBox.classList.remove('hidden');
    });

    imageContainer.addEventListener('mouseleave', function() {
        hoverBox.classList.add('hidden');
    });
});
