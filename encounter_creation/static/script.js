document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const hoverBox = document.createElement('div');
    hoverBox.classList.add('hover-box', 'hidden');
    imageContainer.appendChild(hoverBox);

    const tileSize = 48;

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


    imageContainer.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        // Calculate grid snap positions
        const gridX = Math.floor(x / tileSize);
        const gridY = Math.floor(y / tileSize);
    
        // Update the form with the selected coordinates
        const coordinatesField = document.getElementById('id_coordinates');
        if (coordinatesField) {
            coordinatesField.value = gridX + ',' + gridY;
        } else {
            console.error("Coordinates field not found");
        }
    });

    

});
