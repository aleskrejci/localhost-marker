const PREFIX = '[L] ';

function markLocalhost() {
  if (document.title && !document.title.startsWith(PREFIX)) {
    document.title = PREFIX + document.title;
  }
}

function watchTitle() {
  markLocalhost();

  new MutationObserver(markLocalhost).observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

if (document.head) {
  watchTitle();
} else {
  new MutationObserver(function (mutations, observer) {
    if (document.head) {
      observer.disconnect();
      watchTitle();
    }
  }).observe(document, { childList: true, subtree: true });
}
