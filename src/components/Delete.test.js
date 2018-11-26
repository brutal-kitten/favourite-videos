import React from 'react';
import ReactDOM from 'react-dom';
import Delete from './Delete.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should display a button', () => {
  const tree = TestRenderer.create(
    <div className="delete" >
      <button tabIndex='0' className="buttonDelete" type="button" onClick={(event) => this.handleClick(event)} >
        <span className="glyphicon glyphicon-trash"></span>
      </button>
    </div>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe ('shoud call handleclick function after click', () => {
  const mockDeleteVideo = jest.fn();
  const props = {
    deleteVideo: mockDeleteVideo,
    id: "12345"
  };

  const wrapper = shallow(<Delete {...props}/>);

  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('should call deleteVideo function with 1 argument - id', () => {
    expect(mockDeleteVideo.mock.calls.length).toBe(1);
    expect(mockDeleteVideo.mock.calls[0][0]).toBe("12345");
  });
})
