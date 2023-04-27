import FormPage from "../pages/form.page.js";

describe("My form page", () => {
  it("change header", async () => {
    await FormPage.open();

    await expect(FormPage.title).toHaveText("Hello world");
    await FormPage.typeToInput("hello");
    await expect(FormPage.title).toHaveText("hello");
  });

  it("change header again", async () => {
    await FormPage.open();

    await FormPage.typeToInput("123123");
    await expect(FormPage.title).toHaveText("123123");
  });
});
