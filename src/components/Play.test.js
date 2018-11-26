import React from 'react';
import ReactDOM from 'react-dom';
import Play from './Play.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <Play />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleclick function after click', () => {
  const mockPlayVideo = jest.fn();
  const props = {
    playVideo: mockPlayVideo,
    id: "12345"
};

  const wrapper = shallow(<Play {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('should call playVideo function with 1 argument - id', () => {
    expect(mockPlayVideo.mock.calls.length).toBe(1);
    expect(mockPlayVideo.mock.calls[0][0]).toBe("12345");
  });
})
