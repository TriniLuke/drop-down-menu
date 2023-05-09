class DropDownMenu {
  constructor(elem, link) {
    this.elem = elem;
    this.link = link;
  }

  hideAndDisplay() {
    this.link.addEventListener("click", () => {
      this.elem.style.visibility === "hidden" ? this.elem.style.visibility = "visible" : this.elem.style.visibility = "hidden";
    });
  }
}

const menu = document.getElementById('drop-down-menu');
const btn = document.getElementById('drop-down-menu-btn');

const dropDownMenu = new DropDownMenu(menu, btn);

dropDownMenu.hideAndDisplay();
