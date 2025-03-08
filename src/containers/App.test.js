import { render } from "@testing-library/react";
import App from "containers/App";
import useGetSwapData from "services/useGetSwapData";

jest.mock("services/useGetSwapData");

const mockLoadingState = {
  loading: true,
  swapData: null,
  daysWithData: null,
  daySwapData: null,
  getDaySwapData: jest.fn(),
};

const mockFetchedState = {
  loading: false,
  swapData: [],
  daysWithData: [],
  daySwapData: [],
  getDaySwapData: jest.fn(),
};

describe("App.js", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderApp = (state = mockLoadingState) => {
    useGetSwapData.mockReturnValue(state);
    return render(<App />);
  };

  it("Should render Greetings", () => {
    const { container } = renderApp();
    const greetings = container.querySelector(".greetings");
    expect(greetings).toBeInTheDocument();
  });

  it("Should render InlineForm", () => {
    const { container } = renderApp();
    const inlineForm = container.querySelector(".inlineForm");
    expect(inlineForm).toBeInTheDocument();
  });

  it("Should render Version", () => {
    const { container } = renderApp();
    const version = container.querySelector(".version");
    expect(version).toBeInTheDocument();
  });

  describe("When useGetSwapData is loading", () => {
    it("Should render Loader", () => {
      const { container } = renderApp(mockLoadingState);
      const loader = container.querySelector(".loading-spinner");
      expect(loader).toBeInTheDocument();
    });
  });

  describe("When SWAPDATA fetched", () => {
    it("Should NOT render Loader", () => {
      const { container } = renderApp(mockFetchedState);
      const loader = container.querySelector(".loading-spinner");
      expect(loader).not.toBeInTheDocument();
    });

    it("Should render Calendar", () => {
      const { container } = renderApp(mockFetchedState);
      const calendar = container.querySelector(".calendar");
      expect(calendar).toBeInTheDocument();
    });
  });
});
