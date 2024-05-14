function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    // For older browsers that do not support classList
    var classes = element.className.split(' ');
    if (classes.indexOf(className) === -1) {
      classes.push(className);
      element.className = classes.join(' ');
    }
  }
}
