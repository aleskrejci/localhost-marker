function markLocalhost() {
  if (!document.title.startsWith('[L] ')) {
    var localTitle = '[L] ' + document.title;
    document.title = localTitle;
  }
}

window.addEventListener('DOMContentLoaded', markLocalhost);

document.addEventListener('turbo:load', markLocalhost);
