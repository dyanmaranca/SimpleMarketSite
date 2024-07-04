
function moreInfo(id)
{   
    let buttonNamedm = document.getElementById(id).getAttribute("name");
    let divInfodm = "";
    let textInfodm = "";

    //assign the div/placeholder id and the text information to be shown for each item
    switch (buttonNamedm) {
        case "shirt":
            divInfodm = "rmshirt";
            textInfodm = "<p>Shirt description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>";
            break;
        case "jacket":
            divInfodm = "rmjacket";
            textInfodm = "<p>Jacket description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>";
            break;
        case "caps":
            divInfodm = "rmcaps";
            textInfodm = "<p>Caps description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>";
            break;
        case "bracelet":
            divInfodm = "rmbracelet";
            textInfodm = "<p>Bracelets description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>";
            break;
        case "sunglass":
            divInfodm = "rmsunglass";
            textInfodm = "<p>Sunglasses description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>";
            break;
        default:
            divInfodm = "";
            textInfodm = "";
            break;
    }
        //Check if information are hidden or visible and show or hide information accordingly
        let divLengthdm = document.getElementById(divInfodm).innerHTML.length;
        if (divLengthdm == 0) {
         document.getElementById(divInfodm).innerHTML = textInfodm;
        } else document.getElementById(divInfodm).innerHTML = "";
}


