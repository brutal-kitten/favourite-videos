import React from 'react';
import ReactDOM from 'react-dom';
import ShowFavorite from './ShowFavorite.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <ShowFavorite />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleClick function after click', () => {
  const mockShowFavorite = jest.fn();
  const props = {
    showFavorite: mockShowFavorite
};

  const wrapper = shallow(<ShowFavorite {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('should call showFavorite function', () => {
    expect(mockShowFavorite.mock.calls.length).toBe(1);
  });
})
