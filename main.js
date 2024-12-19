var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablinks of tablinks) {
    tablinks.classlist.romove("active-link");
  }
  for (tabcontents of tabcontents) {
    tabcontents.classlist.romove("active-tab");
  }
}
