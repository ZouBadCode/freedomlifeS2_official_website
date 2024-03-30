let currentIndex = 0;

function fetchImages() {
    fetch('/get-view')
        .then(response => response.json())
        .then(images => {
            updateImage(images);
            document.getElementById('next-view').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateImage(images);
            
            });
            document.getElementById('prev-view').addEventListener('click', () => {
                // 使用(images.length + currentIndex - 1) % images.length來處理索引可能變成負數的情況
                currentIndex = (images.length + currentIndex - 1) % images.length;
                updateImage(images);
            });
        });
}

function updateImage(images) {
    const imageElement = document.getElementById('image-view');
    const descriptionElement = document.getElementById('description');
    imageElement.src = images[currentIndex].url;
    descriptionElement.textContent = images[currentIndex].description;
    // 添加動畫效果
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.style.opacity = 1;
    }, 500);
}

document.addEventListener('DOMContentLoaded', fetchImages);
