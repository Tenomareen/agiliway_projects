/* eslint-disable no-undef */
import moment from 'moment';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Note from '../Note';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(
      <Router>
        <Note />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('.ant-card-head-title')).toBe(null);

  act(() => {
    render(<Router><Note note={{ name: 'Vadim' }} /></Router>, container);
  });
  expect(container.querySelector('.ant-card-head-title').textContent).toBe('Vadim');
});

it('renders with or without a description', () => {
  act(() => {
    render(
      <Router>
        <Note />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('.description').textContent).toBe('');

  act(() => {
    render(<Router><Note note={{ description: 'Hello World' }} /></Router>, container);
  });
  expect(container.querySelector('.description').textContent).toBe('Hello World');
});

it('renders with or without a date', () => {
  act(() => {
    render(
      <Router>
        <Note />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('.date').textContent).toBe(moment().format('MMMM Do YYYY'));

  act(() => {
    render(<Router><Note note={{ createDate: '2021-11-25T14:09:55.451Z' }} /></Router>, container);
  });
  expect(container.querySelector('.date').textContent).toBe(moment('2021-11-25T14:09:55.451Z').format('MMMM Do YYYY'));
});
