import React from 'react';
import ReactDOM from 'react-dom';
import Infobox from './Infobox.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render, ReactWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <Infobox />).toJSON();
  expect(tree).toMatchSnapshot();
});

const props = {
  title: "name",
  date: new Date("2017-05-31T09:30:02.000Z").toDateString(),
  likes: '8359285',
  views: '349487'
}

const wrapper = mount(<Infobox {...props}/>);

describe('should have given given props', () =>  {

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
});
