document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
});

function toggleMenu() {
    var menu = document.getElementById("menu-content");
    if (menu.style.width === '500px') {
        menu.style.width = '0';
        setTimeout(function () {
            menu.style.display = 'none';
        }, 500); // 延遲設置display，以便讓動畫完成
    } else {
        menu.style.display = 'block';
        menu.style.width = '500px';
    }
}