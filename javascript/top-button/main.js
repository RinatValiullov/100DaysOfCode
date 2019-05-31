let show = document.querySelector("#showScroll");
let btn = document.querySelector("#updown");

let showBottom = show.getBoundingClientRect().bottom + window.pageYOffset;

window.addEventListener("scroll", function (event) {
    let scrolled = window.pageYOffset;
    show.innerHTML = `${scrolled}px to back to top`;

    if (show.classList.contains("fixed") && window.pageYOffset < showBottom) {
        show.classList.remove("fixed");
        btn.className = "";
    } else if (window.pageYOffset > showBottom) {
        show.classList.add("fixed");
        btn.className = "up";
    }
});

btn.addEventListener("click", event => {
    let pageY = window.pageYOffset;
    switch (btn.className) {
        case "up":
            if ('scroll' in window) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo(0, 0);
            }
            btn.className = "";
            break;
    }
});
