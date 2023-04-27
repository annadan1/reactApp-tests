import Page from "./page.js";

class CounterPage extends Page {
  get plusButton() {
    return $("#plus");
  }

  get minusButton() {
    return $("#minus");
  }

  get plusByAmountButton() {
    return $("#plusByAmount");
  }

  get minusByAmountButton() {
    return $("#minusByAmount");
  }

  get input() {
    return $("#input");
  }

  get counter() {
    return $("#counter-value");
  }
  
  open() {
    return super.open("counter");
  }
}

export default new CounterPage();
