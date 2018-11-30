import React from 'react';
import ReactDOM from 'react-dom';
import ShowVideo from './ShowVideo.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <ShowVideo />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockCloseModal = jest.fn();
const props = {
  videoId: "lalala",
  closeModal: mockCloseModal
}

const wrapper = shallow(<ShowVideo {...props}/>);

wrapper.find('button.closeModal').simulate('click', {
  preventDefault: () => {},
});

it('should call function closeModal once', () => {
  expect(mockCloseModal.mock.calls.length).toBe(1);
});

it('should call mockPauseVideo once', () => {
  const mockPauseVideo = jest.fn();
  wrapper.instance()._onReady({ target: {
    pauseVideo: mockPauseVideo
  }});
  expect(mockCloseModal.mock.calls.length).toBe(1);
});
