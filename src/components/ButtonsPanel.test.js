import React from 'react';
import ReactDOM from 'react-dom';
import ButtonsPanel from './ButtonsPanel.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render, ReactWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <ButtonsPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockPlayVideo = jest.fn();
const mockDeleVideo = jest.fn();
const mockAddToFavorite = jest.fn();
const mockRemoveFromFavorite = jest.fn();

const props = {
  id: "lalala",
  playVideo: mockPlayVideo,
  deleteVideo: mockDeleVideo,
  isfavorite: true,
  addToFavorite: mockAddToFavorite,
  removeFromFavorite: mockRemoveFromFavorite
}

const wrapper = mount(<ButtonsPanel {...props}/>);

describe('should have given given props and initial state', () =>  {

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

  it('should have given isfavorite', () =>  {
    expect(wrapper.prop('removeFromFavorite')).toBe(props.removeFromFavorite);
  });

  it('should have initial state', () =>  {
    expect(wrapper.state('key')).toBe('');
  });
});

describe('when the item marked as favorite, the <RemoveFromFavorite /> component should be rendered' , () => {

  it('should have "remove from favorite" button', () => {
    expect(wrapper.find("div.removeFromFav").exists()).toBeTruthy();
  })

  it('should not have "add to favorite" button', () => {
    expect(wrapper.find("div.addFav").exists()).toBeFalsy();
  });
})

describe('when the item is not marked as favorite, the <AddFav /> component should be rendered' , () => {

  const props2 = {
    id: "lalala",
    playVideo: mockPlayVideo,
    deleteVideo: mockDeleVideo,
    isfavorite: false,
    addToFavorite: mockAddToFavorite,
    removeFromFavorite: mockRemoveFromFavorite
  }

  const wrapper2 = mount(<ButtonsPanel {...props2}/>);

  it('should have "add to favorite" button', () => {
    expect(wrapper2.find("div.addFav").exists()).toBeTruthy();
  })

  it('should not have "remove fron favorite" button', () => {
    expect(wrapper2.find("div.removeFromFav").exists()).toBeFalsy();
  });
})
