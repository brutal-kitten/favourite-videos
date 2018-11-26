import React from 'react';
import ReactDOM from 'react-dom';
import RemoveFromFavorite from './RemoveFromFavorite.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <RemoveFromFavorite />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleclick function after click', () => {
  const mockRemoveFromFavorite = jest.fn();
  const mockTrigger = jest.fn();
  const props = {
    removeFromFavorite: mockRemoveFromFavorite,
    trigger: mockTrigger,
    id: "12345"
  };

  const wrapper = shallow(<RemoveFromFavorite {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  it('should call removeFromFavorite function with 1 argument - id', () => {
    expect(mockRemoveFromFavorite.mock.calls.length).toBe(1);
    expect(mockRemoveFromFavorite.mock.calls[0][0]).toBe("12345");
  });

  it('should call trigger function', () => {
    expect(mockTrigger.mock.calls.length).toBe(1);
  });

})
