import React from 'react';
import ReactDOM from 'react-dom';
import AddFav from './AddFav.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('should display a button', () => {
  const tree = TestRenderer.create(
    <AddFav />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleclick function after click', () => {
  const mockAddToFavorite = jest.fn();
  const mockTrigger = jest.fn();
  const props = {
    addToFavorite: mockAddToFavorite,
    trigger: mockTrigger,
    id: "12345"
  };

  const wrapper = shallow(<AddFav {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {},
  });

  it('should call addToFavorite function with 1 argument - id', () => {
    expect(mockAddToFavorite.mock.calls.length).toBe(1);
    expect(mockAddToFavorite.mock.calls[0][0]).toBe("12345");
  });

  it('should call trigger function', () => {
    expect(mockTrigger.mock.calls.length).toBe(1);
  });

})
