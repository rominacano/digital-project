import React from 'react';
import { render } from '@testing-library/react-native';
import { ActivityList } from '../../src/components/ActivityList';

describe('ActivityList', () => {
    it('renders activity list component', () => {
        const { getByTestId } = render(<ActivityList products={[]} isLoading={false} />);
        const activityList = getByTestId('activity-list-component');
        expect(activityList).toBeDefined();
    });
    it('displays loading indicator when loading is true', () => {
        const { getByTestId } = render(<ActivityList products={[]} isLoading={true} />);
        const activityList = getByTestId('activity-list-component');
        const loadingIndicator = getByTestId('loading-indicator');
        expect(activityList).toBeDefined();
        expect(loadingIndicator).toBeDefined();
    });

});