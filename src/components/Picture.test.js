import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './Picture.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display an image', () => {
  const tree = TestRenderer.create(
    <Picture />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call playVideo function after click', () => {
  const mockPlayVideo = jest.fn();
  const props = {
    playVideo: mockPlayVideo,
    id: "127456",
    thumbnails: 'some url'
  };

  const wrapper = shallow(<Picture {...props}/>);

  wrapper.find('img').simulate('click', {
    preventDefault: () => {},
  });


  it('should call playVideo function with 1 arqument - id', () => {
    expect(mockPlayVideo.mock.calls.length).toBe(1);
    expect(mockPlayVideo.mock.calls[0][0]).toBe("127456");
  });


  it('should have given image url', () =>  {
    expect(props.thumbnails).toBe('some url');
  })
})
