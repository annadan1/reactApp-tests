import CounterPage from "../pages/counter.page.js";

describe("My counter page", () => {
  it("count value +1", async () => {
    await CounterPage.open();
    await expect(CounterPage.counter).toHaveText("0");
    await CounterPage.plusButton.click();
    await expect(CounterPage.counter).toHaveText("1");
  });
  it("count value -1", async () => {
    await CounterPage.open();
    await expect(CounterPage.counter).toHaveText("0");
    await CounterPage.minusButton.click();
    await expect(CounterPage.counter).toHaveText("-1");
  });
  it("count value +10", async () => {
    await CounterPage.open();
    await expect(CounterPage.counter).toHaveText("0");
    await CounterPage.input.setValue('10')
    await CounterPage.plusByAmountButton.click();
    await expect(CounterPage.counter).toHaveText("10");
    await CounterPage.plusByAmountButton.click();
    await CounterPage.input.setValue('0')
    await expect(CounterPage.counter).toHaveText("10");
  });
  it("count value -10", async () => {
    await CounterPage.open();
    await expect(CounterPage.counter).toHaveText("0");
    await CounterPage.input.setValue('10')
    await CounterPage.minusByAmountButton.click();
    await expect(CounterPage.counter).toHaveText("-10");
    await CounterPage.input.setValue('5')
    await CounterPage.minusByAmountButton.click();
    await expect(CounterPage.counter).toHaveText("-15");
  });
});
