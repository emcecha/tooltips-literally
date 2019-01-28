var tooltips = document.querySelectorAll(".tools__tooltip");

for (var i = 0; i < tooltips.length; i++) {

    tooltips[i].addEventListener("mouseover", function () {

        var tooltipText = this.dataset.tip;

        newSpan = document.createElement("div");
        newSpan.className = "tooltipText";
        newSpan.innerText = tooltipText;

        this.appendChild(newSpan);
    });

    tooltips[i].addEventListener("mouseout", function () {

        var toDelete = this.querySelector(".tooltipText");

        if (toDelete) {
            this.removeChild(toDelete);
        }

    });

}

var navItems = document.querySelectorAll("[data-id]");
var toolsBoxes = document.querySelectorAll(".tools__box");
var home = document.querySelector("header");
var activeTool = -1;

for (var i = 0; i < navItems.length; i++) {

    navItems[i].addEventListener("click", function () {

        for (var i = 0; i < toolsBoxes.length; i++) {

            if (toolsBoxes[i].id === this.dataset.id) {

                toolsBoxes[i].scrollIntoView({behavior: "smooth"});
                activeTool = i;
            }

        }

        if (home.id === this.dataset.id) {

            home.scrollIntoView({behavior: "smooth"});
            activeTool = -1;
        }

        if (activeTool > 0 && this.dataset.id === "prev") {

            toolsBoxes[activeTool - 1].scrollIntoView({behavior: "smooth"});
            activeTool --;
        }

        if (activeTool < toolsBoxes.length -1 && this.dataset.id === "next") {

            toolsBoxes[activeTool + 1].scrollIntoView({behavior: "smooth"});
            activeTool ++;
        }

        var prev = this.parentElement.firstElementChild;

        if (activeTool > 0) {

            if (prev.className.indexOf("nav__item--hidden") > -1) {
                    prev.classList.remove("nav__item--hidden");
            }

        } else {

            if (prev.className.indexOf("nav__item--hidden") === -1) {
                prev.classList.add("nav__item--hidden");
            }

        }

        var backHome = this.parentElement.children[1];

        if (activeTool > -1) {

            if (backHome.className.indexOf("nav__item--hidden") > -1) {
                setTimeout(function () {
                    backHome.classList.remove("nav__item--hidden");
                },450);
            }

        } else {

            if (backHome.className.indexOf("nav__item--hidden") === -1) {
                backHome.classList.add("nav__item--hidden");
            }

        }

        var next = this.parentElement.lastElementChild;

        if (activeTool > -1 && activeTool < toolsBoxes.length - 1) {

            if (next.className.indexOf("nav__item--hidden") > -1) {

                if (activeTool === 0) {
                    setTimeout(function () {
                        next.classList.remove("nav__item--hidden");
                    },450);
                } else {
                    next.classList.remove("nav__item--hidden");
                }

            }

        } else  {

            if (next.className.indexOf("nav__item--hidden")) {
                next.classList.add("nav__item--hidden");
            }

        }

    })
}

var nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {

    if (window.pageYOffset >= window.innerHeight) {

        nav.classList.add("sticky");

    } else {

        if (nav.className.indexOf("sticky") > -1) {

            nav.classList.remove("sticky");
        }
    }
});

window.addEventListener("load", function () {

    setTimeout(function () {
        home.scrollIntoView()
    },0);
})
