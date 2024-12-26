document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const uploadButton = document.getElementById('uploadButton');
    const gallery = document.getElementById('gallery');

    // Load existing photos from local storage
    loadPhotos();

    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        const description = descriptionInput.value.trim();
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const photoData = event.target.result;
                const uploadDate = new Date().toLocaleString();
                savePhoto(photoData, description, uploadDate);
                displayPhoto(photoData, description, uploadDate);
                fileInput.value = ''; // Clear the input
                descriptionInput.value = ''; // Clear the description input
            };
            reader.readAsDataURL(file);
        } else {
            alert('Silakan pilih foto untuk diupload.');
        }
    });

    function savePhoto(photoData, description, uploadDate) {
        let photos = JSON.parse(localStorage.getItem('photos')) || [];
        photos.push({ photoData, description, uploadDate });
        localStorage.setItem('photos', JSON.stringify(photos));
    }

    function loadPhotos() {
        const photos = JSON.parse(localStorage.getItem('photos')) || [];
        photos.forEach(({ photoData, description, uploadDate }) => {
            displayPhoto(photoData, description, uploadDate);
        });
    }

    function displayPhoto(photoData, description, uploadDate) {
        const img = document.createElement('img');
        img.src = photoData;
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.appendChild(img);

        const desc = document.createElement('div');
        desc.classList.add('description');
        desc.textContent = description;
        div.appendChild(desc);

        const date = document.createElement('div');
        date.classList.add('date');
        date.textContent = `Uploaded on: ${uploadDate}`;
        div.appendChild(date);

        gallery.appendChild(div);
    }
});