function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        body.style.overflowY = 'hidden'; // Disable vertical scrolling
    } else {
        body.style.overflowY = 'auto'; // Enable vertical scrolling
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
    sidebar.classList.remove('open');
    body.style.overflowY = 'auto'; // Enable vertical scrolling
}







document.querySelectorAll(".clickable-phone").forEach(function(element) {
    element.addEventListener("click", function() {
        var phone = this.getAttribute("data-phone");
        window.location.href = phone;
    });
});
