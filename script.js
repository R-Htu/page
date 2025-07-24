function toggleMode() {

    const icon = document.getElementById('icon');
    const thumb = document.getElementById('toggleThumb');
    const root = document.documentElement;
    const toggle = root.classList.toggle('dark');
 
    if(toggle) {
        icon.classList.replace('fa-moon', 'fa-sun');
        thumb.style.transform = "translateX(32px)";
    } else {
    
        icon.classList.replace('fa-sun', 'fa-moon')
        thumb.style.transform = "translateX(0)";
    }
}