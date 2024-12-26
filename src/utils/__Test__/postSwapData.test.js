import postSwapData from 'utils/postSwapData';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('postSwapData.ts', () => {

  delete window.location;
  window.location = { reload: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    jest.useFakeTimers();
  });

  const BASEURL = 'http://example.com';

  const shifts = [
    {
      Date: '08-14-2024',
      Outbound: 9036,
      Inbound: 9063,
      Position: 'BAR',
      Early: true,
      Late: false,
      LTA: false,
      DO: false,
      Note: 'Test shift',
      isOvernight: false
    }
  ];

  const event = {
    currentTarget: {
      elements: {
        namedItem: (name) => {
          if (name === "Email") {
            return { value: "test@example.com" };
          }
          return null;
        },
      },
    },
  };

  it('Should post expected data', () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => ({ data: '12345' })
    });

    postSwapData({ BASEURL, shifts, event });

    expect(fetch).toHaveBeenCalledWith(`${BASEURL}/formData`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: 'test@example.com',
        Date: '08-14-2024',
        Outbound: 9036,
        Inbound: 9063,
        Position: 'BAR',
        Early: true,
        Late: false,
        LTA: false,
        DO: false,
        Note: 'Test shift'
      })
    });
  });

  describe('When submission is successful', () => {
    it('Should display Toast.success', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: '12345' }),
      });

      postSwapData({ BASEURL, shifts, event });

      await Promise.resolve();
      expect(toast.success).toHaveBeenCalledWith(
        '9036 - 9063 on 08-14-2024 submitted successfully!'
      );
    });

    it('Should reload the page after 5 sec', () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: '12345' })
      });

      postSwapData({ BASEURL, shifts, event });

      jest.advanceTimersByTime(5000);
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe('When submission fails', () => {
    it('Should display Toast.error', () => {
      //TODO
    });
  });
});