import loadHome from "./home";


function headerLoad(){
    const nav = document.createElement("nav");

    const header = document.createElement("header");
    header.classList.add("header");

    const soupName = document.createElement("h1");
    soupName.classList.add("soupName");
    soupName.textContent = "Soup Kitchen";

    header.appendChild(soupName);
    header.appendChild(createNav());

    return header;
}

function createNav() {

    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active"))
            return;
        setActiveButton(homeBtn);
        loadHome();
    });


    const menuBtn = document.createElement("menuBtn");

    nav.appendChild(homeBtn);
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}


function footerLoad() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright @ ${new Date().getFullYear()} tylerp`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/tparri4";

    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(headerLoad());
    content.appendChild(footerLoad());
    
    setActiveButton(document.querySelector(".button-nav"))

}

export default initWebsite;