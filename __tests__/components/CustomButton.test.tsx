import React from 'react';
import { render } from '@testing-library/react-native';
import CustomButton from '../../src/components/CustomBotton';

describe('CustomButton', () => {
    it('renders correctly with default props', () => {
        const { getByText, getByTestId } = render(<CustomButton title="Press me" onPress={() => { }} />);
        expect(getByText('Press me')).toBeDefined();
    });

});
