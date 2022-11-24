// Change background image

const WALLPAPER = document.getElementById("wallpaper");

function changeTheme(theme) {
    console.log("Interactive Javascript");
    console.log(theme);
    switch (theme) {
        case 0:
            WALLPAPER.style.backgroundImage = "url('img/Cala Macarella-med.png')";
            break;
        case 1:
            WALLPAPER.style.backgroundImage = "url('img/Cala Alcaufar-med.png')";
            break;
        case 2:
            WALLPAPER.style.backgroundImage = "url('img/Cala En Turqueta-med.png')";
            break;
        default:
            WALLPAPER.style.backgroundImage = "url('img/2560px-Macarella_16.png')";
            break;
    }
}