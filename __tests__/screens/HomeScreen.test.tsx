import React from 'react';
import { HomeScreen } from '../../src/screens/HomeScreen';
import { render } from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => {
    const inset = { top: 0, right: 0, bottom: 0, left: 0 }
    return {
        SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
        SafeAreaConsumer: jest
            .fn()
            .mockImplementation(({ children }) => children(inset)),
        SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
        useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
    }
})

describe('HomeScreen', () => {
    it('renders without crashing', () => {
        render(<HomeScreen />);
    });

    it('displays user name', () => {
        const { getByText } = render(<HomeScreen />);
        expect(getByText('Ruben Rodriguez')).toBeTruthy();
    });
});

