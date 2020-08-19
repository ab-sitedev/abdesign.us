// Toggle via classList.toggle
function toggleNav() {
    var menu = document.getElementById("my-sidenav").classList.toggle("toggle");
}

function closeNav() {
    
    if (document.getElementById('my-sidenav').classList.contains("toggle")){
        document.getElementById('menu_label').click();
    }
    
}