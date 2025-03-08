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

  describe("When the swap data is loading", () => {
    it("should render Loader", () => {
      const { container } = renderApp(mockLoadingState);
      const loader = container.querySelector(".loading-spinner");
      expect(loader).toBeInTheDocument();
    });
    it("should NOT render Calendar", () => {
      const { container } = renderApp(mockLoadingState);
      const calendar = container.querySelector(".calendar");
      expect(calendar).not.toBeInTheDocument();
    });
    it("should render Greetings", () => {
      const { container } = renderApp(mockLoadingState);
      const greetings = container.querySelector(".greetings");
      expect(greetings).toBeInTheDocument();
    });

    it("should render InlineForm", () => {
      const { container } = renderApp(mockLoadingState);
      const inlineForm = container.querySelector(".inlineForm");
      expect(inlineForm).toBeInTheDocument();
    });

    it("should render Version", () => {
      const { container } = renderApp(mockLoadingState);
      const version = container.querySelector(".version");
      expect(version).toBeInTheDocument();
    });
  });

  describe("When the swap data is fetched", () => {
    it("should NOT render Loader", () => {
      const { container } = renderApp(mockFetchedState);
      const loader = container.querySelector(".loading-spinner");
      expect(loader).not.toBeInTheDocument();
    });

    it("should render Calendar", () => {
      const { container } = renderApp(mockFetchedState);
      const calendar = container.querySelector(".calendar");
      expect(calendar).toBeInTheDocument();
    });
    it("should render Greetings", () => {
      const { container } = renderApp(mockFetchedState);
      const greetings = container.querySelector(".greetings");
      expect(greetings).toBeInTheDocument();
    });

    it("should render InlineForm", () => {
      const { container } = renderApp(mockFetchedState);
      const inlineForm = container.querySelector(".inlineForm");
      expect(inlineForm).toBeInTheDocument();
    });

    it("should render Version", () => {
      const { container } = renderApp(mockFetchedState);
      const version = container.querySelector(".version");
      expect(version).toBeInTheDocument();
    });
  });
});
