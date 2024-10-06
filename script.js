document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', event => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
 });