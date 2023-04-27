import Page from "./page.js";

class FormPage extends Page {
  get input() {
    return $("#input");
  }

  get button() {
    return $("#button");
  }

  get title() {
    return $("#title");
  }

  async typeToInput(text) {
    await this.input.setValue(text);
    await this.button.click();
  }

  open() {
    return super.open("form");
  }
}

export default new FormPage();
