import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add expense', () => {
    const expense = {
        id: '-1',
        description: 'bla',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit expense', () => {
    const description = 'bla change';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description)
});

test('should not edit expense if not found', () => {
    const description = 'bla change';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
});