import React from 'react';
import ReactDOM from 'react-dom';
import ElementsPerPagePicker from './ElementsPerPagePicker.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <ElementsPerPagePicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockSetIndexes = jest.fn();
const props = {
  setIndexes: mockSetIndexes,
  elementsPerPage: 10
};

const wrapper = mount(<ElementsPerPagePicker {...props}/>);

it('has proper value given by props', () => {
  expect(wrapper.props().elementsPerPage).toBe(10);
})


describe('selection works properly', () => {

  wrapper.find('select').simulate('change', {
    target: {
      value: 6
    },
    preventDefault: () => {},
  });

  it('should call mockSort function with 1 given value', () => {
    expect(mockSetIndexes.mock.calls.length).toBe(1);
    expect(mockSetIndexes.mock.calls[0][0]).toBe(6);
  });

  it('should have 5 option', () => {
    expect(wrapper.find('select').children().length).toBe(5);
  });

})
