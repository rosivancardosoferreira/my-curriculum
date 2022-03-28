export function hiddenScroll(visible: boolean) {
  if (visible) {
    document.body.classList.add("hidden__scroll");
  } else {
    document.body.classList.remove("hidden__scroll");
  }
}
