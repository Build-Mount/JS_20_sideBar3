let offset = -200;

window.addEventListener("DOMContentLoaded", () => {
    let strHtml = `\n`;
    strHtml += `\t<img src="humbergerIcon.svg" id="menuIcon" class="menuIcon"/>\n`;
    strHtml += `\t<div id="sideBar">\n`;
    strHtml += `\t\t<img src="humbergerIcon.svg" id="menuIcon2" class="menuIcon"/>\n`;
    strHtml += `\t\t<div id="menuList">\n`;
    strHtml += `\t\t\t<div id="home" class="menuItem">ホーム</div>\n`;
    strHtml += `\t\t\t<div id="mypage" class="menuItem">マイページ</div>\n`;
    strHtml += `\t\t</div>\n`;
    strHtml += `\t</div>\n`;
    strHtml += `\t<div id="cover" class="cover"></div>\n`;
    menuSideBar.insertAdjacentHTML("beforeend", strHtml);

    document.getElementById("menuIcon").addEventListener("click", () => {
        showSideBar();
    });

    document.getElementById("menuIcon2").addEventListener("click", () => {
        showSideBar();
    });

    document.getElementById("home").addEventListener("click", () => {
        showSideBar();
        setTimeout(() => {
            location.href = "index.html";
        }, 300);
    });

    document.getElementById("mypage").addEventListener("click", () => {
        showSideBar();
        setTimeout(() => {
            location.href = "mypage.html";
        }, 300);
    });

    document.getElementById("cover").addEventListener("click", () => {
        showSideBar();
    });

});


const showSideBar = () => {
    document.getElementById("cover").classList.toggle("coverVisible");
    offset = -offset;
    const animation = document.getElementById("sideBar").animate(
        [
            {   transform: `translateX(${offset}px)`    }
        ],
        {
            duration: 300,
            fill: "forwards"
        },
    );
};
