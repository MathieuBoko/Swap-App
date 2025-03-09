import { render } from "@testing-library/react";
import App from "containers/App";
import { useGetSwapData } from "services";

jest.mock("services");

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

    it("should render Copyright", () => {
      const { container } = renderApp(mockLoadingState);
      const copyright = container.querySelector(".copyright");
      expect(copyright).toBeInTheDocument();
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

    it("should render Copyright", () => {
      const { container } = renderApp(mockFetchedState);
      const copyright = container.querySelector(".copyright");
      expect(copyright).toBeInTheDocument();
    });
  });
});
