// document.body.setAttribute("style", "background-color: red;");

var all = document.getElementsByTagName("*");

var widths;

for (var i=0, max=all.length; i < max; i++) {
  width += all[i].style.width + " | ";
}

alert("widths for you to see:\n" + width);
  // document.body.appendChild('<b>'parentWidth);
