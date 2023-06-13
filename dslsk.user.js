// ==UserScript==
// @name         DSL.SK fixer
// @namespace    pk-ap
// @version      1.0.7
// @description  bigger font
// @author       PK
// @match        http://www.dsl.sk/*
// @match        https://www.dsl.sk/*
// @match        http://dsl.sk/*
// @match        https://dsl.sk/*
// @grant        GM_addStyle
// @run-at      document-idle
// @downloadURL https://github.com/pkajan/dsl.sk-FIX/raw/main/dslsk.user.js
// @updateURL   https://github.com/pkajan/dsl.sk-FIX/raw/main/dslsk.user.js

// ==/UserScript==

var moarPIXELZ = "12pt";
var moarPIXELZ2 = "10pt";
var moarPIXELZ_discus = "12pt";
var myBgColor = "#222233";
var myTxColor = "#FFFFFF";
var myTxColor2 = "#BBDDEE";
var myTxColorLink = "#f4a460";
var i;

if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].href.replace('http://','https://');
}
document.getElementById("header").getElementsByTagName("a")[0].href="https://www.dsl.sk/"; //logoURL

/* main page */
if (!window.location.href.match(/article.php\?/)) {
    document.getElementById("news_box").style.backgroundColor=myBgColor;
    document.getElementById("news_box").style.color=myTxColor;
    document.getElementById("body").getElementsByTagName("td")[2].style.display="none"; //hide adbox
    document.getElementById("news_box").style.width="750px"; //wider news
    document.getElementById("news_box").style.border="2px solid #FFFFFF"; //wider news
    document.getElementById("header").style.backgroundColor=myBgColor;
    document.getElementById("header").getElementsByTagName("tr")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("table")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("img")[0].style.filter="invert(1)";
    document.getElementById("header").getElementsByTagName("img")[1].style.filter="invert(1)";
    document.getElementsByClassName("top_link")[0].style.backgroundColor=myBgColor;
    for (i = 0; i < document.getElementsByClassName("header_info_text").length; i++) {
        document.getElementsByClassName("header_info_text")[i].style.display="none";
    }
    for (i = 0; i < document.getElementById("body").getElementsByTagName("a").length; i++) {
        document.getElementById("body").getElementsByTagName("a")[i].style.textDecoration="none";
    }

    for (i = 0; i < document.getElementById("news_box").getElementsByTagName("a").length; i++) {
        document.getElementById("news_box").getElementsByTagName("a")[i].onmouseover = function() {
            this.style.fontWeight= "bold";
            this.style.color= myTxColor;
        }
        document.getElementById("news_box").getElementsByTagName("a")[i].onmouseout = function() {
            this.style.backgroundColor = "transparent";
            this.style.color= myTxColor2;
        };
    }

    /* font size menu */
    for (i = 0; i < document.getElementById("body").getElementsByTagName("td").length; i++) {
        document.getElementById("body").getElementsByTagName("td")[i].style.fontSize=moarPIXELZ_discus;
    }

    for (i = 0; i < document.getElementById("body").getElementsByClassName("article_perex").length; i++) {
        document.getElementById("body").getElementsByClassName("article_perex")[i].style.fontSize=moarPIXELZ_discus;
        document.getElementById("body").getElementsByClassName("article_perex")[i].style.color=myTxColor;
    }
    for (i = 0; i < document.getElementsByClassName("small_notes").length; i++) {
        document.getElementsByClassName("small_notes")[i].getElementsByTagName("a")[0].style.color=myTxColor2;
    }
    document.getElementsByClassName("title_day")[0].style.color=myTxColor2;
    document.getElementsByClassName("box_title")[0].style.color=myTxColor2;

    for (i = 0; i < document.getElementsByClassName("title").length; i++) {
        document.getElementsByClassName("title")[i].style.color=myTxColor2;
    }
    for (i = 0; i < document.getElementById("body").getElementsByTagName("tbody")[0].getElementsByTagName("a").length; i++) {
        document.getElementById("body").getElementsByTagName("tbody")[0].getElementsByTagName("a")[i].style.color=myTxColor2;
    }
}

/* article page */
if (window.location.href.match(/article.php\?/)) {
    document.getElementById("header").style.backgroundColor=myBgColor;
    document.getElementById("header").getElementsByTagName("tr")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("table")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("img")[0].style.filter="invert(1)";
    document.getElementById("header").getElementsByTagName("img")[1].style.filter="invert(1)";
    document.getElementsByClassName("top_link")[0].style.backgroundColor=myBgColor;
    document.getElementsByClassName("header_info_text")[0].style.display="none";
    document.getElementById("body").getElementsByTagName("table")[1].style.display="none"; //hide adbox
    document.getElementsByClassName("article_body")[0].style.fontSize=moarPIXELZ;
    if(document.getElementById("tags_label")!=null) document.getElementById("tags_label").style.color=myTxColor;
    for (i = 0; i < document.getElementById("article_menu").getElementsByTagName("a").length; i++) {
        document.getElementById("article_menu").getElementsByTagName("a")[i].style.color=myTxColor;
        document.getElementById("article_menu").getElementsByTagName("a")[i].style.fontSize=moarPIXELZ2;
    }
    for (i = 0; i < document.getElementsByClassName("article_perex").length; i++) {
        document.getElementsByClassName("article_perex")[i].style.color=myTxColor;
    }
    for (i = 0; i < document.getElementsByClassName("article_body")[0].getElementsByTagName("a").length; i++) {
        document.getElementsByClassName("article_body")[0].getElementsByTagName("a")[i].style.color=myTxColorLink;
    }
    document.getElementById("bg").getElementsByTagName("tbody")[9].getElementsByTagName("img")[0].style.filter="invert(1)";

    if(document.getElementsByTagName("table")[13]){
        for (i = 0; i < document.getElementsByTagName("table")[13].getElementsByTagName("td").length; i++) {
            document.getElementsByTagName("table")[13].getElementsByTagName("td")[i].style.fontSize=moarPIXELZ_discus;
        }
    }

}

/* whole page */
document.getElementById("title_bar").getElementsByTagName("img")[1].style.display="none";
document.getElementById("title_bar").getElementsByTagName("img")[2].style.filter="invert(1)";
document.getElementById("bg").style.width="1200px"; /* make page wider */
document.getElementById("bg").style.backgroundColor=myBgColor;
document.getElementById("bg").getElementsByTagName("td")[7].style.backgroundImage="none";
document.body.style.backgroundColor=myBgColor;
document.getElementById("body").style.backgroundColor=myBgColor;
document.getElementById("body").style.color=myTxColor;
document.getElementById("menu").style.backgroundImage="none";
document.getElementById("menu").style.backgroundColor=myBgColor;

document.getElementsByTagName("table")[0].getElementsByTagName("table")[2].style.backgroundColor=myBgColor;
document.getElementsByTagName("table")[0].getElementsByTagName("table")[2].style.color=myTxColor;
document.getElementsByTagName("table")[0].getElementsByTagName("table")[3].style.backgroundColor=myBgColor;

/*center page*/
document.getElementsByTagName("table")[0].style.margin="auto";
document.getElementsByTagName("table")[0].style.width="50%";
document.getElementsByTagName("table")[0].style.padding="10px";
console.log("FIX");
