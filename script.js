menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const projectBoxes = document.querySelectorAll('.clickable');

    projectBoxes.forEach(box => {
        box.addEventListener('click', function(event) {
            event.stopPropagation();
            projectBoxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('active');
                }
            });
            box.classList.toggle('active');
        });
    });
    document.addEventListener('click', function() {
        projectBoxes.forEach(box => {
            box.classList.remove('active');
        });
    });
});

