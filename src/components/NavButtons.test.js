import React from 'react';
import ReactDOM from 'react-dom';
import NavButtons from './NavButtons.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <NavButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockShowDemo = jest.fn();
const mockDeleteList = jest.fn();
const mockReturnToList = jest.fn();
const mockShowFavorite = jest.fn();
const mockSort = jest.fn();


describe('when showFav is true', () => {
  const props = {
    showFav: true,
    showDemo: mockShowDemo,
    deleteList: mockDeleteList,
    returnToList: mockReturnToList,
    showFavorite: mockShowFavorite,
    sort: mockSort
  }
  const wrapper = mount(<NavButtons {...props}/>);

  it('should have "return to list" button', () => {
    expect(wrapper.find('.returnToList').exists()).toBeTruthy();
  });

  it('should not  have "show favorite" button', () => {
    expect(wrapper.find('.showFav').exists()).toBeFalsy();
  });

});

describe('when showFav is false', () => {

  const props2 = {
    showFav: false,
    showDemo: mockShowDemo,
    deleteList: mockDeleteList,
    returnToList: mockReturnToList,
    showFavorite: mockShowFavorite,
    sort: mockSort
  }

  const  wrapper2 = mount(<NavButtons {...props2}/>);

  it('should not have "return to list" button', () => {
    expect(wrapper2.find('.returnToList').exists()).toBeFalsy();
  });

  it('should have "show favorite" button', () => {
    expect(wrapper2.find('.showFav').exists()).toBeTruthy();
  });
});
