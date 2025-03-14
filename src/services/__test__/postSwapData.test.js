import { postSwapData } from "services";

describe("postSwapData.ts", () => {
  delete window.location;
  window.location = { reload: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    jest.useFakeTimers();
  });

  const BASEURL = "http://example.com";

  const shifts = [
    {
      Date: "08-14-2024",
      Outbound: 9036,
      Inbound: 9063,
      Position: "BAR",
      Early: true,
      Late: false,
      LTA: false,
      DO: false,
      Note: "Test shift",
      isOvernight: false,
    },
  ];

  const event = {
    target: { elements: { Email: { value: "test@example.com" } } },
  };

  it("should post expected data", () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => ({ data: "12345" }),
    });

    postSwapData({ BASEURL, shifts, event });

    expect(fetch).toHaveBeenCalledWith(`${BASEURL}/formData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: "test@example.com",
        Date: "08-14-2024",
        Outbound: 9036,
        Inbound: 9063,
        Position: "BAR",
        Early: true,
        Late: false,
        LTA: false,
        DO: false,
        Note: "Test shift",
      }),
    });
  });

  describe("When submission is successful", () => {
    it("should display Toast.success", () => {
      //TO DO
    });

    it("should reload the page after 5 sec", () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: "12345" }),
      });

      postSwapData({ BASEURL, shifts, event });

      jest.advanceTimersByTime(5000);
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe("When submission fails", () => {
    it("should display Toast.error", () => {
      //TO DO
    });
  });
});
