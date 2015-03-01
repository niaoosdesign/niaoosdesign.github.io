var Page = function() {
    var detail = document.querySelector(".detail"),
        data = oData.aData[detail.getAttribute("data-content")],
        elTitle = document.createElement("h3"),
        elParagraph = document.createElement("p"),
        elLst = document.createElement("ul"),
        elDesc = detail.querySelector(".description"),
        pr = document.querySelector("#pr"),
        nx = document.querySelector("#nx"),
        elImg = detail.querySelector(".img img"),
        nIndex = 0;

    for(var i = 0; i < data.sLst.length; i++) {
        var elItem = document.createElement("li");
        elItem.innerHTML = data.sLst[i];
        elLst.appendChild(elItem);
    }
    pr.onclick = function() {
        nIndex = nIndex !== 0 ? nIndex -= 1 : 0;
        elImg.setAttribute("src", data.sImg[nIndex]);
        elParagraph.innerHTML = data.sDesc[nIndex];
    };
    nx.onclick = function() {
        nIndex = nIndex !== elDesc.length ? nIndex += 1 : elDesc.length;
        elImg.setAttribute("src", data.sImg[nIndex]);
        elParagraph.innerHTML = data.sDesc[nIndex];
    };
    elTitle.innerHTML = data.sTitle;
    elImg.setAttribute("src", data.sImg[nIndex]);
    elParagraph.innerHTML = data.sDesc[0];
    elDesc.innerHTML = "";
    elDesc.appendChild(elTitle);
    elDesc.appendChild(elParagraph);
    elDesc.appendChild(elLst);
};
var PageEvent = function() {
    var target = document.querySelectorAll(".item a"),
        detail = document.querySelector(".detail");
    for(var i = 0; i < target.length; i++) {
        target[i].setAttribute("data-content", i);
        target[i].onclick = function() {
            if(detail.className.match("on") !== null && this.getAttribute("data-content") === detail.getAttribute("data-content")) {
                detail.className = detail.className.replace(" on", " off");
                detail.removeAttribute("data-content")
            } else {
                detail.className = "detail on";
                detail.setAttribute("data-content", this.getAttribute("data-content"))
                Page();
            }
        }
    }
};

var oData = {
    aData : [{
        sTitle : "MOULTON<br>COLLECTION",
        sLst : [
            "BRANDING / GRAPHIC",
            "Brand. Mouton Bicycle",
            "Client. INNOIZ Interactive"
        ],
        sImg : [
            "img/a01_001.jpg",
            "img/a02.jpg"
        ],
        sDesc : [
            "몰튼 자전거를 사랑하는 몰트너 (MOULTONEER)들을 위한 특별한 콜렉티브 상품의 시작으로, 달력과 뱃지, 패스포트가 출시되었다.",
            "002"
        ]
    }]
};

PageEvent();
