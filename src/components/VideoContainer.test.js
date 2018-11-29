import React from 'react';
import ReactDOM from 'react-dom';
import VideoContainer from './VideoContainer.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <VideoContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
const mockPlayVideo = jest.fn();
const mockDeleVideo = jest.fn();
const mockAddToFavorite = jest.fn();
const mockRemoveFromFavorite = jest.fn();

const props = {
  title: "name",
  date: new Date("2017-05-31T09:30:02.000Z").toDateString(),
  likes: '8359285',
  views: '349487',
  id: '4759q3',
  playVideo: mockPlayVideo,
  deleteVideo: mockDeleVideo,
  isfavorite: true,
  addToFavorite: mockAddToFavorite,
  removeFromFavorite: mockRemoveFromFavorite,
  thumbnails: 'some url'
}
const wrapper = mount(<VideoContainer {...props}/>);
const initialState = {
  showModal: false
}

it('initialize VideoContainer with correct initial state', () => {
  expect(wrapper.state()).toEqual(initialState);
});


describe('should have given given props', () => {

  it('should have given title', () =>  {
    expect(wrapper.prop('title')).toBe(props.title);
  });

  it('should have given date', () =>  {
    expect(wrapper.prop('date')).toBe(props.date);
  });

  it('should have given likes', () =>  {
    expect(wrapper.prop('likes')).toBe(props.likes);
  });

  it('should have given views', () =>  {
    expect(wrapper.prop('views')).toBe(props.views);
  });
  it('should have given id', () =>  {
    expect(wrapper.prop('id')).toBe(props.id);
  });

  it('should have given playVideo ', () =>  {
    expect(wrapper.prop('playVideo')).toBe(props.playVideo);
  });

  it('should have given deleteVideo ', () =>  {
    expect(wrapper.prop('deleteVideo')).toBe(props.deleteVideo);
  });

  it('should have given isfavorite', () =>  {
    expect(wrapper.prop('isfavorite')).toBe(props.isfavorite);
  });

  it('should have given addToFavorite ', () =>  {
    expect(wrapper.prop('addToFavorite')).toBe(props.addToFavorite);
  });

  it('should have given image url', () =>  {
    expect(wrapper.prop('thumbnails')).toBe(props.thumbnails);
  });
});


describe("state can be changed by playVideo and showModal", () => {

  it('method closeModal should set state to false', () => {

    const wrapper2 = shallow(<VideoContainer {...props}/>);
    wrapper2.setState({
      showModal: true
    });
    wrapper2.instance().closeModal();
    expect(wrapper2.state('showModal')).toBe(false);
  });

  it('method playVideo should set state to true', () => {

    const wrapper3 = shallow(<VideoContainer {...props}/>);
    wrapper3.instance().playVideo();
    expect(wrapper3.state('showModal')).toBe(true);
  });

});
