const array = [
  "https://saucelabs.com/",
  "https://google.com/",
  "https://duckduckgo.com/",
];

describe("Example URLs", () => {
  beforeEach(() => {
    function getUrl() {
      var i;
      var url;

      for (var i = 0; i < array.length; i++) {
        browser.url(array[i]);
      }

      return url;
    }
    getUrl();
  });

  it("should save some screenshots", () => {
    browser.saveScreen("examplePaged", {});
  });

  it("should compare successful with a baseline", () => {
    expect(browser.checkScreen("examplePaged", {})).toEqual(0);
  });
});
