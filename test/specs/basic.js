describe("Example", () => {
  beforeEach(() => {
    browser.url("https://webdriver.io");
  });

  it("should save some screenshots", () => {
    browser.saveScreen("examplePaged", {});
    browser.saveElement($("#element-id"), "firstButtonElement", {});
    browser.saveFullPageScreen("fullPage", {});
  });

  it("should compare successful with a baseline", () => {
    expect(browser.checkScreen("examplePaged", {})).toEqual(0);
    expect(
      browser.checkElement($("#element-id"), "firstButtonElement", {})
    ).toEqual(0);
    expect(browser.checkFullPageScreen("fullPage", {})).toEqual(0);
  });
});
