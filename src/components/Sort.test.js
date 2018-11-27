import React from 'react';
import ReactDOM from 'react-dom';
import Sort from './Sort.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <Sort />).toJSON();
  expect(tree).toMatchSnapshot();
});

  const mockSort = jest.fn();
  const props = {
    sort: mockSort
};

  const initialState = {
    value : 'new'
  }

  const wrapper = shallow(<Sort {...props}/>);

  it('initialize Sort with correct initial state', () => {
    expect(wrapper.state()).toEqual(initialState)
  });


describe('selection works properly', () => {

  const wrapper1 = shallow(<Sort {...props}/>);

  wrapper1.find('select').simulate('change', {
    target: {
      value: 'old'
    },
    preventDefault: () => {},
  });

  it('should call mockSort function with 1 given value', () => {
    expect(mockSort.mock.calls.length).toBe(1);
    expect(mockSort.mock.calls[0][0]).toBe("old");
  });

  it('updates value field in state', () => {
    expect(wrapper1.state()).toEqual({value: "old"})
  })
})
