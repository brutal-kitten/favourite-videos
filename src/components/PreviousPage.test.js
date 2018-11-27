import React from 'react';
import ReactDOM from 'react-dom';
import PreviousPage from './PreviousPage.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <PreviousPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call setStartIndex with value of previous page if there is previous page(previous page can not be less then 1)', () => {
  const MockSetStartIndex = jest.fn();
  const props = {
    setStartIndex: MockSetStartIndex,
    currentPage: 2
  }

  const wrapper = shallow(<PreviousPage {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  expect(MockSetStartIndex.mock.calls.length).toBe(1);
  expect(MockSetStartIndex.mock.calls[0][0]).toBe(1);
});

it('should not call setStartIndex if there is no previous page(previous page can not be less then 1)', () => {
  const MockSetStartIndex2 = jest.fn();
  const props2 = {
    setStartIndex: MockSetStartIndex2,
    currentPage: 1
  }

  const wrapper = shallow(<PreviousPage {...props2}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  expect(MockSetStartIndex2.mock.calls.length).toBe(0);
});
