import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import * as categoryAction from '../action/category';
import * as expenseAction from '../action/expense';

describe('category.js action creators', () => {
  describe('createAction({<name>, <budget>})', () => {
    test('should return an object with name and budget', () => {
      const name = 'Test';
      const budget = '100';
      const createAction = categoryAction.createAction({ name, budget });

      expect(createAction.payload).toBeTruthy();
      expect(createAction.type).toEqual('CATEGORY_CREATE');
      expect(createAction.payload.name).toEqual(name);
      expect(createAction.payload.budget).toEqual('100');
      expect(createAction.payload.id).toBeTruthy();
      expect(createAction.payload.timestamp).toBeTruthy();
    });
  });

  describe('updateAction(<category>)', () => {
    test('should take a category object and return it', () => {
      const category = {
        name: 'Test',
        budget: '100',
        id: '123',
        timestamp: new Date(),
      };

      const updateAction = categoryAction.updateAction(category);

      expect(updateAction)
        .toEqual({'payload': category, type: 'CATEGORY_UPDATE'});
    });
  });
});
