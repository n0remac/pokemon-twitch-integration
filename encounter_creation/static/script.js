document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.querySelector('img'); // Reference to the image
    const hoverBox = createBox('green');
    let selectedBox = null;

    let originalTileSize = 48; // Original tile size
    let tileSize = originalTileSize; // Current tile size

    function updateTileSize() {
        let scaleFactor = image.clientWidth / 1250; // Adjust 1250 based on the original image width
        tileSize = originalTileSize * scaleFactor;

        // Update hover box and selected box size
        hoverBox.style.width = tileSize + 'px';
        hoverBox.style.height = tileSize + 'px';
        if (selectedBox) {
            selectedBox.style.width = tileSize + 'px';
            selectedBox.style.height = tileSize + 'px';
        }
    }

    // Call updateTileSize initially and on window resize
    updateTileSize();
    window.addEventListener('resize', updateTileSize);


    function createBox(color) {
        const box = document.createElement('div');
        box.classList.add('hover-box', 'hidden');
        box.style.borderColor = color;
        imageContainer.appendChild(box);
        return box;
    }

    imageContainer.addEventListener('mousemove', function(e) {
        positionBox(e, hoverBox);
        hoverBox.classList.remove('hidden');
    });

    imageContainer.addEventListener('mouseleave', function() {
        hoverBox.classList.add('hidden');
    });

    imageContainer.addEventListener('click', function(e) {
        // If clicking on the existing selected box, remove it
        if (selectedBox && !selectedBox.classList.contains('hidden') &&
            selectedBox.style.left === hoverBox.style.left &&
            selectedBox.style.top === hoverBox.style.top) {
            selectedBox.remove();
            selectedBox = null;
            updateCoordinatesField('');
            return;
        }

        // Create or reposition the selected box
        if (!selectedBox) {
            selectedBox = createBox('black');
        } else {
            selectedBox.classList.remove('hidden');
        }
        positionBox(e, selectedBox);

        // Update the form with the selected coordinates
        const coordinates = getCoordinates(e);
        updateCoordinatesField(coordinates.x + ',' + coordinates.y);
    });

    function positionBox(e, box) {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate grid snap positions
        const gridX = Math.floor(x / tileSize) * tileSize;
        const gridY = Math.floor(y / tileSize) * tileSize;

        // Position the box
        box.style.left = gridX + 'px';
        box.style.top = gridY + 'px';
    }

    function getCoordinates(e) {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return {
            x: Math.floor(x / tileSize),
            y: Math.floor(y / tileSize)
        };
    }

    function updateCoordinatesField(value) {
        const coordinatesField = document.getElementById('id_coordinates');
        if (coordinatesField) {
            coordinatesField.value = value;
        } else {
            console.error("Coordinates field not found");
        }
    }
});
