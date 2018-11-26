import React from 'react';
import ReactDOM from 'react-dom';
import ShowDemo from './ShowDemo.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <ShowDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleClick function after click', () => {
  const mockShowDemo = jest.fn();
  const props = {
    showDemo: mockShowDemo
};

  const wrapper = shallow(<ShowDemo {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('should call showDemo function', () => {
    expect(mockShowDemo.mock.calls.length).toBe(1);
  });
})
