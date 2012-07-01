// document.body.setAttribute("style", "background-color: red;");

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
  var parentWidth = all[i].style.width;
  if (i==10) {
    alert(parentWidth);
  }
  // document.body.appendChild('<b>'parentWidth);
}