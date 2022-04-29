


// This finds the nav-link element which is the current page and adds an active attribute to it
// which will highlight it via Bootstrap.
// It also adds the aria-current attribute for screen readers

  function highlightActiveLink() {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href == document.URL)
        {
            links[i].classList.add('active')
            links[i].setAttribute('aria-current', 'page')
        }
    }
}


window.onload = highlightActiveLink()