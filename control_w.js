// ==UserScript==
// @name         Control W
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  codigo mio
// @author       Huguito
// @match        http://*/*
// @include      https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//caso de uso para discord
if (window.location.hostname == 'discord.com') {
    addGlobalStyle('.sidebar-2K8pFh {width: 10%;');
    addGlobalStyle('.children-3rEycc {display: none;');
    addGlobalStyle('.bannerImage-3KhIJ6 {width: 0px; height: 0px; display:none;');

}

//caso de uso para blackboard
if (window.location.hostname == 'us.bbcollab.com') {
    addGlobalStyle('body {background-color: black;');
    addGlobalStyle('#session-menu {width: 20%;');

}

//caso de uso para whatsapp
if (window.location.hostname == 'web.whatsapp.com') {
    addGlobalStyle('.TbtXF, ._1SjZ2 {display: none;');
    addGlobalStyle('._3U29Q {width: 80px;');
    addGlobalStyle('.two ._1pQBW {min-width: 0px;');
    addGlobalStyle('.two ._2DPZK {flex: 0%;');
    addGlobalStyle('._1R3Un {width: 220px; min-width: 219px;');
    addGlobalStyle('_1gL0z {display: contents;');
    addGlobalStyle('._3QfZd {min-width: 0px;');
    addGlobalStyle('.SgIJV {width: 210px;');
    addGlobalStyle('._25tHC {display: none;');

    //condicion si hay resolucion chica
    if (window.innerWidth < 500) {

    }

}

//caso de uso para instagram
if (window.location.hostname == 'www.instagram.com') {
    addGlobalStyle('._9AhH0 {display: none;');
    addGlobalStyle('.fXIG0 {display: none;');


}

//nada
else { return; }
