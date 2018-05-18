import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);

    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={235} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0} />);

    expect(wrapper).toMatchSnapshot();
});

