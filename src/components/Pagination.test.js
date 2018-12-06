import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockRecalculatePagesSetFalse = jest.fn();
const mockShowDemo = jest.fn();
const mockDeleteList = jest.fn();
const mockSort = jest.fn();
const mockAddToFavorite = jest.fn();
const mockRemoveFromFavorite = jest.fn();
const mockDeleteVideo = jest.fn();


const props = {
  recalculatePages: false,
  recalculatePagesSetFalse: mockRecalculatePagesSetFalse,
  showDemo: mockShowDemo,
  deleteList: mockDeleteList,
  sort: mockSort,
  listOfVideo: [],
  addToFavorite: mockAddToFavorite,
  removeFromFavorite: mockRemoveFromFavorite,
  deleteVideo: mockDeleteVideo
}


it('initialize Pagination with correct initial state', () => {

  const initialState = {
    showFav: false,
    startIndex: 0,
    elementsPerPage: 10,
    totalPages: 1,
    currentPage: 1
  }


  const wrapper = shallow(<Pagination {...props}/>);
  expect(wrapper.state()).toEqual(initialState);
});

it('renders properly', () => {
  const tree = TestRenderer.create(
    <Pagination {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('methods work correctly', () => {
  const wrapper = shallow(<Pagination {...props}/>);
  const list = [
    {id: "hY7m5jjJ9mM", favorite: false},
    {id: "mRf3-JkwqfU", favorite: false},
    {id: "SB-qEYVdvXA", favorite: false}
  ];

  it('returnToList should change state showFav to false', () => {
    wrapper.setState({showFav: true});
    const instance = wrapper.instance();
    instance.returnToList();
    expect(wrapper.state('showFav')).toBe(false);
  });

  it('beforeShowDemo should call mockShowDemo and change state showFav to false', () => {
    wrapper.setState({showFav: true});
    const instance = wrapper.instance();
    instance.beforeShowDemo();
    expect(mockShowDemo.mock.calls.length).toBe(1);
    expect(wrapper.state('showFav')).toBe(false);
  });

  it('calculateTotalPagesNumber should return total number of page', () => {
    const instance = wrapper.instance();
    let result  = instance.calculateTotalPagesNumber(18, 5);
    let result2 = instance.calculateTotalPagesNumber(20, 4);
    expect(result).toBe(4);
    expect(result2).toBe(5);
  });

  it('filterList return given array if showFav is false', () => {
    const instance = wrapper.instance();
    expect(instance.filterList(list).length).toBe(3);
  });

  it('filterList return filtered array if showFav is true', () => {
    let list2 = [
      {id: "hY7m5jjJ9mM", favorite: true },
      {id: "mRf3-JkwqfU", favorite: false },
      {id: "SB-qEYVdvXA", favorite: true }
    ];
    wrapper.setState({showFav: true});
    const instance = wrapper.instance();
    expect(instance.filterList(list2).length).toBe(2);
  });

  it('setStartIndex setState properly when given argument is 1', () => {
    wrapper.setState({startIndex: 8, currentPage: 4});
    const instance = wrapper.instance();
    instance.setStartIndex(1);
    expect(wrapper.state('startIndex')).toBe(0);
    expect(wrapper.state('currentPage')).toBe(1);
  });

  it('setStartIndex setState properly when given argument is not 1', () => {
    wrapper.setState({startIndex: 12, currentPage: 4, elementsPerPage: 4 });
    const instance = wrapper.instance();
    instance.setStartIndex(3);
    expect(wrapper.state('startIndex')).toBe(8);
    expect(wrapper.state('currentPage')).toBe(3);
  });

  it('setIndexes setState properly with given number of elements per page', () => {
    wrapper.setProps({listOfVideo: list});
    const instance = wrapper.instance();
    instance.setIndexes(2);
    expect(wrapper.state('elementsPerPage')).toBe(2);
    expect(wrapper.state('startIndex')).toBe(0);
    expect(wrapper.state('currentPage')).toBe(1);
  });

  it('showFav works as expected', () => {
    let list2 = [
      {id: "hY7m5jjJ9mM", favorite: true },
      {id: "mRf3-JkwqfU", favorite: false },
      {id: "SB-qEYVdvXA", favorite: true }
    ];
    wrapper.setState({showFav: false, elementsPerPage: 4});
    wrapper.setProps({listOfVideo: list2});
    const instance = wrapper.instance();
    instance.showFavorite();
    expect(wrapper.state('showFav')).toBe(true);
    expect(wrapper.state('startIndex')).toBe(0);
    expect(wrapper.state('currentPage')).toBe(1);
    expect(wrapper.state('totalPages')).toBe(1);
  });

  it('checkForUpdate works if empty list', () => {
    wrapper.setState({totalPages: 3, currentPage: 2, startIndex: 8, elementsPerPage: 4});
    wrapper.setProps({listOfVideo:[]});
    const instance = wrapper.instance();
    instance.checkForUpdate();
    expect(wrapper.state('startIndex')).toBe(0);
    expect(wrapper.state('currentPage')).toBe(1);
    expect(wrapper.state('totalPages')).toBe(1);
    expect(wrapper.state('elementsPerPage')).toBe(10);
  });

  it('checkForUpdate works  if startIndex greater then length of list', () => {
    wrapper.setState({totalPages: 3, currentPage: 3, startIndex: 4, elementsPerPage: 2, showFav: false});
    wrapper.setProps({listOfVideo: [
      {id: "hY7m5jjJ9mM", favorite: true },
      {id: "mRf3-JkwqfU", favorite: false },
      {id: "SB-qEYVdvXA", favorite: true },
      {id: "SB-qEYVdvXB", favorite: true}
    ]});
    const instance = wrapper.instance();
    instance.checkForUpdate();
    expect(wrapper.state('startIndex')).toBe(2);
    expect(wrapper.state('currentPage')).toBe(2);
    expect(wrapper.state('totalPages')).toBe(2);
  });

  it('checkForUpdate works if new length of list is greater then it was', () => {
    wrapper.setState({totalPages: 1, currentPage: 1, startIndex: 0, elementsPerPage: 2, showFav: false});
    wrapper.setProps({listOfVideo: list});
    const instance = wrapper.instance();
    instance.checkForUpdate();
    expect(wrapper.state('startIndex')).toBe(0);
    expect(wrapper.state('currentPage')).toBe(1);
    expect(wrapper.state('totalPages')).toBe(2);
  });
});
