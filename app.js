(function () {
  var root = document.documentElement;
  var segs = document.querySelectorAll('.seg');
  function pref() { return localStorage.getItem('tidy-theme') || 'system'; }
  function apply(p) {
    if (p === 'light' || p === 'dark') root.setAttribute('data-theme', p);
    else root.removeAttribute('data-theme');
  }
  function paint() {
    var p = pref();
    segs.forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-theme-set') === p); });
  }
  segs.forEach(function (b) {
    b.addEventListener('click', function () {
      var p = b.getAttribute('data-theme-set');
      if (p === 'system') localStorage.removeItem('tidy-theme');
      else localStorage.setItem('tidy-theme', p);
      apply(p);
      paint();
    });
  });
  apply(pref());
  paint();
})();
