import React from 'react';
import ReactDOM from 'react-dom';
import DeleteList from './DeleteList.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <DeleteList />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleclick function after click', () => {
  const mockDeleteList = jest.fn();
  const props = {
    deleteList: mockDeleteList
  };

  const wrapper = shallow(<DeleteList {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  it('should call deleteList function', () => {
    expect(mockDeleteList.mock.calls.length).toBe(1);
  });
})
