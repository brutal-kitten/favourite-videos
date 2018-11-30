import React from 'react';
import ReactDOM from 'react-dom';
import ListOfVideos from './ListOfVideos.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  list: [
    {id: "hY7m5jjJ9mM", favorite: false, title: "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation" , date: new Date("2017-05-31T09:30:02.000Z").toDateString() , likes: "327046" , views: "81007082" , thumbnails: "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg" },
    {id: "mRf3-JkwqfU", favorite: false, title: "Funny Puppies And Cute Puppy Videos Compilation 2016 [BEST OF]" , date: new Date("2016-08-31T17:34:50.000Z").toDateString() , likes: "71389" , views: "17981823" , thumbnails: "https://i.ytimg.com/vi/mRf3-JkwqfU/default.jpg"}
  ]
}

it('renders properly', () => {
  const tree = TestRenderer.create(
    <ListOfVideos {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});


const wrapper = mount(<ListOfVideos {...props} />);

it('should have  header "my list"', () => {
  expect(wrapper.find('h3').exists()).toBeTruthy();
  expect(wrapper.find('h3').text()).toBe('My list');
});

it('should have rendered VideoContainer as much time as length of list', () => {
  expect(wrapper.find('.videocontainer').length).toBe(props.list.length);
})
