

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

    content.appendChild(footerLoad());


}

export default initWebsite;