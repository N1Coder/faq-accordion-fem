const buttons = document.querySelectorAll("#btn-accordion")
const accordionContentItems = document.querySelectorAll(".content article")
const icons = document.querySelectorAll("#btn-accordion img")

const closeAllItem = () => {
  for (const accordionItem of accordionContentItems) {
    accordionItem.classList.remove("is-opened")
  }
}

const resetIconState = () => {
  for (const icon of icons) {
    icon.src = `${
      window.location.href.split("/index.html")[0]
    }/assets/images/icon-plus.svg`
    icon.alt = "Plus Icon"
  }
}

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    resetIconState()
    closeAllItem()

    accordionContentItems[i].classList.toggle("is-opened")
    icons[i].src = `${
      window.location.href.split("/index.html")[0]
    }/assets/images/icon-minus.svg`
    icons[i].alt = "Minus Icon"
  })
})
