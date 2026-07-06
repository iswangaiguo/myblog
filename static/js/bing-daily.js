document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('body>header');
  if (!header) return;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      try {
        var data = JSON.parse(xhr.responseText);
        if (data.images && data.images.length > 0) {
          var url = 'https://cn.bing.com' + data.images[0].url;
          header.style.backgroundImage = 'url(' + url + ')';
        }
      } catch (e) {}
    }
  };
  xhr.send();
});
