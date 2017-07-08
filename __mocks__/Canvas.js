/**
 * Created by zzzz on 09/07/2017.
 */
HTMLCanvasElement.prototype.getContext = jest.fn(() => {
    return {
        canvas: {
            addEventListener: jest.fn()
        },
        clearRect: jest.fn()
    }
});