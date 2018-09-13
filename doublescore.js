// #byid | .byclass | bytag | ^byquerySelector | ^^querySelectorAll
function __(selector, target) {
  var r, s = selector, t = (target === undefined) ? document : target;
  if (s.charAt(0) === "#") {
    r = t.getElementById(s.slice(1));
  } else if (s.charAt(0) === ".") {
    r = t.getElementsByClassName(s.slice(1));
  } else if (s.slice(0, 2) === "^^") {
    r = t.querySelectorAll(s.slice(2));
  } else if (s.charAt(0) === "^") {
    r = t.querySelector(s.slice(1));
  } else {
    r = t.getElementsByTagName(s);
  }
  return r;
}
