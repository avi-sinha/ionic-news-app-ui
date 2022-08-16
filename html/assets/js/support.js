
if (location.href.indexOf("ionic:mode=ios") > -1) {
    document.getElementById("footer").classList.remove('hidden-object');
    document.getElementById("icon-menu").classList.add('hidden-object');
    document.getElementById("icon-menu").classList.remove('icon-menu');
    document.getElementById("inline-menu").classList.add('hidden-object');
    document.getElementById("inline-menu").classList.remove('inline-menu');
}

if (location.href.indexOf("ui=2") > -1) {
  document.getElementById("core-style").innerHTML = `  
  :root {
    --ion-color-primary: #058950;
    --ion-color-primary-rgb: 5, 137, 80;
    --ion-color-primary-contrast: #ffffff;
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade: #046b3e;
    --ion-color-primary-tint: #059c5a;
    --ion-safe-area-bottom:10px;
  }`;
  document.getElementById("page-title").innerHTML = "The Press";
  document.getElementById("header-title").innerHTML = '<b class="bold">T</b>HE <b class="bold">P</b>RESS';
}