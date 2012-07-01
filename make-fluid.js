// document.body.setAttribute("style", "background-color: red;");

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
  var parentWidth = all[i].width;
  if (i==1) {
    aler(parentWidth);
  }
  // document.body.appendChild('<b>'parentWidth);
}