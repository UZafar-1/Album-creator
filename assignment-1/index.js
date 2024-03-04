document.addEventListener('DOMContentLoaded', () => {
    const albumForm = document.getElementById('album-form');
    const albumsList = document.getElementById('all-albums-list');
    const titleInput = document.getElementById('album-title');
    const descriptionInput = document.getElementById('album-description');
    const artInput = document.getElementById('album-art');
    const titleFeedback = document.querySelector('#album-title + .invalid-feedback');
    const descriptionFeedback = document.querySelector('#album-description + .invalid-feedback');
    const artFeedback = document.querySelector('#album-art + .invalid-feedback');

    titleInput.addEventListener('input', () => {
        if (titleInput.value.length > 10) {
            titleInput.classList.add('is-invalid');
            titleFeedback.textContent = 'Album title cannot be more than 10 characters.';
        } else {
            titleInput.classList.remove('is-invalid');
        }
    });

    descriptionInput.addEventListener('input', () => {
        if (descriptionInput.value.length > 30) {
            descriptionInput.classList.add('is-invalid');
            descriptionFeedback.textContent = 'Album description cannot be more than 30 characters.';
        } else {
            descriptionInput.classList.remove('is-invalid');
        }
    });

    artInput.addEventListener('change', () => {
        if (artInput.value !== '') { // Check if a valid option is selected
            artInput.classList.remove('is-invalid');
            artFeedback.textContent = ''; // Clear the existing error message
        }
    });


    albumForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Validate Album Title
        if (!titleInput.value.trim()) {
            titleInput.classList.add('is-invalid');
            isValid = false;  // Keep isValid false if any field is invalid
        } else {
            titleInput.classList.remove('is-invalid');
        }

        // Validate Album Description
        if (!descriptionInput.value.trim()) {
            descriptionInput.classList.add('is-invalid');
            isValid = false;  // Keep isValid false if any field is invalid
        } else {
            descriptionInput.classList.remove('is-invalid');
        }

        // Validate Album Art
        if (artInput.value === '') {
            artInput.classList.add('is-invalid');
            isValid = false;  // Keep isValid false if any field is invalid
        } else {
            artInput.classList.remove('is-invalid');
        }

        if (isValid) {
            
            const newAlbum = document.createElement('div');
            newAlbum.className = 'col';
            newAlbum.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${artInput.value}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${titleInput.value}">
                    <div class="card-body">
                        <p class="card-text">${titleInput.value} - ${descriptionInput.value}</p>
                    </div>
                </div>
            `;
            albumsList.appendChild(newAlbum);

            // Clear form fields and remove validation errors
            titleInput.value = '';
            descriptionInput.value = '';
            artInput.value = ''; // Reset to default option if applicable
            titleInput.classList.remove('is-invalid');
            descriptionInput.classList.remove('is-invalid');
            artInput.classList.remove('is-invalid');
        }
        
    });

 
});

