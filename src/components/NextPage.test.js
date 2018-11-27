import React from 'react';
import ReactDOM from 'react-dom';
import NextPage from './NextPage.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <NextPage />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('should call setStartIndex with value of next page if there is next page', () => {
  const MockSetStartIndex = jest.fn();
  const props = {
    setStartIndex: MockSetStartIndex,
    totalPages: 2,
    currentPage: 1
  }

  const wrapper = shallow(<NextPage {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  expect(MockSetStartIndex.mock.calls.length).toBe(1);
  expect(MockSetStartIndex.mock.calls[0][0]).toBe(2);
});

it('should not call setStartIndex if there is no next page', () => {

  const MockSetStartIndex2 = jest.fn();
  const props2 = {
    setStartIndex: MockSetStartIndex2,
    totalPages: 2,
    currentPage: 2
  }
  
  const wrapper2 = shallow(<NextPage {...props2}/>);

  wrapper2.find('button').simulate('click', {
    preventDefault: () => {},
  });

  expect(MockSetStartIndex2.mock.calls.length).toBe(0);
})
