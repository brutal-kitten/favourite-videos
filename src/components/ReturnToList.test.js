import React from 'react';
import ReactDOM from 'react-dom';
import ReturnToList from './ReturnToList.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <ReturnToList />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleClick function after click', () => {
  const mockReturnToList = jest.fn();
  const props = {
    returnToList: mockReturnToList,
};

  const wrapper = shallow(<ReturnToList {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('should call returnToList function', () => {
    expect(mockReturnToList.mock.calls.length).toBe(1);
  });

})
