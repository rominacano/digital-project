import { renderHook } from '@testing-library/react-hooks/native';
import { useAnimation } from '../../src/hooks/useAnimation';

declare module 'react-native' {
    interface Value {
        _value: number;
    }
}

describe('useAnimation', () => {
    it('should render with default opacity of 0', () => {
        const { result } = renderHook(() => useAnimation());
        expect((result.current.opacity as any)._value).toEqual(0);

    });

    it('should fade in animation', () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useAnimation());
        const duration = 300;
        result.current.fadeIn(duration);
        jest.advanceTimersByTime(duration);
        expect((result.current.opacity as any)._value).toEqual(1);
        jest.useRealTimers();
    });

    it('should fade out animation', () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useAnimation());
        result.current.fadeOut();
        jest.runAllTimers();
        expect((result.current.opacity as any)._value).toEqual(0);
        jest.useRealTimers();
    });

    it('should start moving position animation', () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useAnimation());
        const initPosition = 100;
        const duration = 300;
        result.current.startMovingPosition(initPosition, duration);
        jest.advanceTimersByTime(duration);
        expect((result.current.opacity as any)._value).toEqual(0);
        jest.useRealTimers();
    });
});
