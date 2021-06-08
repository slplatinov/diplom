function clickMenu() {
  let elMsg = document.getElementById("aCatal");
  console.log(elMsg);
  divHide();
  document.getElementById("listCatalog").style.display = "flex";
  document.getElementById("listCatalog").style.visibility = "visible";
  document.getElementById("listCatalog").style.position = "relative";
  // elMsg.style.display=block;
}
function divHide() {
  let elMsg = document.getElementById("carousel");
  // console.log(elMsg);
  let elw = document.getElementById("listCatalog1");
  console.log(elw);
  elMsg.style.visibility = "hidden";
  elMsg.style.display = "none";
  elMsg.style.position = "absolute";

  elw.style.visibility = "hidden";
  elw.style.display = "none";
  elw.style.position = "absolute";
  // console.log(elw);
  // elMsg.style.display=none;
}
function clickLogo() {
  let elLog = document.getElementById("clLogo");
  // console.log(elLog);
  divVisibleLog();
  document.getElementById("listCatalog").style.visibility = "hidden";
  document.getElementById("listCatalog").style.position = "absolute";
  document.getElementById("listCatalog").style.display = "none";
  document.getElementById("listCatalog1").style.visibility = "hidden";
  document.getElementById("listCatalog1").style.position = "absolute";
  document.getElementById("listCatalog1").style.display = "none";
}
function divVisibleLog() {
  let elLog = document.getElementById("carousel");
  // console.log(elLog);
  elLog.style.visibility = "visible";
  elLog.style.display = "flex";
  elLog.style.position = "relative";
  // elMsg.style.display=none;
}
function clWindSurf() {
  let elWC = document.getElementById("aWindSurf");
  console.log(elWC);
  // console.log(elLog);
  divHideWS();
  document.getElementById("listCatalog1").style.visibility = "visible";
  document.getElementById("listCatalog1").style.position = "relative";
  document.getElementById("listCatalog1").style.display = "flex";
}
function divHideWS() {
  let elWC = document.getElementById("carousel");
  let elct = document.getElementById("listCatalog");
  console.log(elct);
  elWC.style.visibility = "hidden";
  elWC.style.position = "absolute";
  elWC.style.display = "none";
  elct.style.visibility = "hidden";
  elct.style.position = "absolute";
  elct.style.display = "none";
  // elMsg.style.display=none;
}
