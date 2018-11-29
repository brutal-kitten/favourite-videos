import React from 'react';
import ReactDOM from 'react-dom';
import PageInformation from './PageInformation.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <PageInformation />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockSetStartIndex = jest.fn();
const props = {
  setStartIndex: mockSetStartIndex,
  totalPages: 3,
  currentPage: 2
}

const wrapper = shallow(<PageInformation {...props}/>);

it('should show current page given from props', () => {
  expect(wrapper.find('div.pageInput')
    .render()
    .html())
    .toBe(`<input type="number" tabindex="0" id="selectPage" min="1" max="3" value="${props.currentPage}">`);
})


describe('when user choose page and there is such page', () => {
  wrapper.find('input').simulate('change', {
    preventDefault: () => {},
    target: {
      value: 3
    },
  });

  it('should call function setStartIndex once', () => {
    expect(mockSetStartIndex.mock.calls.length).toBe(1);
  });

  it('should call function setStartIndex with one argument', () => {
    expect(mockSetStartIndex.mock.calls[0][0]).toBe(3);
  });
});


describe('when user choose page and there is no such page', () => {

  const mockSetStartIndex2 = jest.fn();
  const props2 = {
    setStartIndex: mockSetStartIndex2,
    totalPages: 3,
    currentPage: 2
  }
  const wrapper2 = shallow(<PageInformation {...props2}/>);
  wrapper2.find('input').simulate('change', {
    preventDefault: () => {},
    target: {
      value: (props2.totalPages + 2)
   },
  });

  it('should call function setStartIndex once', () => {
    expect(mockSetStartIndex2.mock.calls.length).toBe(1);
  });

  it('should call function setStartIndex with one argument - "1"', () => {
    expect(mockSetStartIndex2.mock.calls[0][0]).toBe(1);
  });
});
