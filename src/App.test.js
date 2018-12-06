import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import videoOf10 from './Default10Videos';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders properly', () => {
  const tree = TestRenderer.create(
    <App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('initialize App with correct initial state', () => {

  const initialState = {
    listOfVideo: [],
    demolist: videoOf10,
    searchResultError: false,
    sortBy : "new",
    recalculatePages: false
  }
  const wrapper = shallow(<App />);
  expect(wrapper.state()).toEqual(initialState);
});


describe('methods in App work correctly', () => {
  const wrapper = shallow(<App />);

  it('changeSearchResultError should change state to given value', () => {
    const instance = wrapper.instance();
    instance.changeSearchResultError(true);
    expect(wrapper.state('searchResultError')).toBe(true);
    instance.changeSearchResultError(false);
    expect(wrapper.state('searchResultError')).toBe(false);
  });

  it('showDemo should set listOfVideo in state', () => {
    const instance = wrapper.instance();
    instance.showDemo();
    expect(wrapper.state('listOfVideo')).toBe(wrapper.state('demolist'));
  });

  it('recalculatePagesSetFalse should set recalculatePages', () => {
    wrapper.setState({recalculatePages: true});
    const instance = wrapper.instance();
    instance.recalculatePagesSetFalse();
    expect(wrapper.state('recalculatePages')).toBe(false);
  });

  it('setList should call sortArray, call setItem in localStorage and in state set new list', () => {
    wrapper.setState({listOfVideo: []});
    let  array = [{date: "2016-08-31T17:34:50.000Z"}, {date: "2017-05-31T09:30:02.000Z"}];
    const instance = wrapper.instance();
    const sortArraySpy = jest.spyOn(instance, 'sortArray');
    instance.setList(array, "new");
    expect(sortArraySpy).toHaveBeenCalled();
    sortArraySpy.mockRestore();
    expect(JSON.parse(localStorage.getItem('list'))).toEqual(array);
  });
});


describe('sorting works correctly', () => {
  const wrapper = shallow(<App />);
  let array1 = [{date: "2017-05-31T09:30:02.000Z"}, {date: "2016-08-31T17:34:50.000Z"}];
  let  array2 = [{date: "2016-08-31T17:34:50.000Z"}, {date: "2017-05-31T09:30:02.000Z"}];
  it('sortByNewest should sort date', () => {
    const instance = wrapper.instance();
    let result = instance.sortByNewest(array1[0], array1[1]);
    expect(result).toBe(-1);
    let result2 = instance.sortByNewest(array2[0], array2[1]);
    expect(result2).toBe(1);
  });

  it('sortByOldest should sort date', () => {
    const instance = wrapper.instance();
    let result = instance.sortByOldest(array1[0], array1[1]);
    expect(result).toBe(1);
    let result2 = instance.sortByOldest(array2[0], array2[1]);
    expect(result2).toBe(-1);
  });

  it('sortArray should work correctly while sorting by newest ', () => {
    const instance = wrapper.instance();
    let result = instance.sortArray(array2, "new");
    expect(result[0].date).toBe("2017-05-31T09:30:02.000Z");
    expect(result[1].date).toBe("2016-08-31T17:34:50.000Z");
  });

  it('sortArray should work correctly while sorting by oldest ', () => {
    const instance = wrapper.instance();
    let result2 = instance.sortArray(array1, "old");
    expect(result2[0].date).toBe("2016-08-31T17:34:50.000Z");
    expect(result2[1].date).toBe("2017-05-31T09:30:02.000Z");
  });

  it('sort should call setList and set given value in state ', () => {
    wrapper.setState({listOfVideo: array1, sortBy : "new"});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    instance.sort("old");
    expect(setListSpy).toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('sortBy')).toBe("old");
  });
});


describe('add/delete works properly', () => {

  const wrapper = shallow(<App />);
  let array = [
    {id: "hY7m5jjJ9mM", favorite: false },
    {id: "mRf3-JkwqfU", favorite: false },
    {id: "SB-qEYVdvXA", favorite: false }
  ]

  it('deleteVideo should delete item by given id, call setList and set recalculatePages to true', () => {
    wrapper.setState({listOfVideo: array, recalculatePages: false});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    instance.deleteVideo(array[0].id);
    expect(setListSpy).toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('recalculatePages')).toBe(true)
    expect(wrapper.state('listOfVideo').length).toBe(array.length - 1);
  });

  it('deleteList should delete all list, call setList and set new state', () => {
    wrapper.setState({listOfVideo: array, recalculatePages: false});
    const instance = wrapper.instance();
    instance.deleteList();
    expect(localStorage.getItem('list')).toBe(null);
    expect(wrapper.state('recalculatePages')).toBe(true)
    expect(wrapper.state('listOfVideo').length).toBe(0);
  });

  it('addToList should add new object to array, call setList and set recalculatePages to true', () => {
    wrapper.setState({listOfVideo: array, recalculatePages: false});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    let newItem = {id: "01EINvwu3Sg", favorite: false};
    instance.addToList(newItem);
    expect(setListSpy).toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('recalculatePages')).toBe(true)
    expect(wrapper.state('listOfVideo').filter(item => (item.id === newItem.id)).length).toBe(1);
  });

  it('addToList should do nothing if there already is object with such id', () => {
    wrapper.setState({listOfVideo: array, recalculatePages: false});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    let newItem = {id: "SB-qEYVdvXA", favorite: false};
    instance.addToList(newItem);
    expect(setListSpy).not.toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('recalculatePages')).toBe(false)
    expect(wrapper.state('listOfVideo').length).toBe(array.length);
  });

});

describe('add/remove from favorite works properly', () => {

  const wrapper = shallow(<App />);
  let array = [
    {id: "hY7m5jjJ9mM", favorite: false },
    {id: "mRf3-JkwqfU", favorite: false },
    {id: "SB-qEYVdvXA", favorite: true }
  ]

  it('removeFromFavorite should change favorite property to false in item with given id and call setList', () => {
    wrapper.setState({listOfVideo: array});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    instance.removeFromFavorite(array[2].id);
    expect(setListSpy).toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('listOfVideo').filter(item => (item.id === array[2].id))[0].favorite).toBe(false);
  });

  it('addToFavorite should change favorite property to true in item with given id and call setList', () => {
    wrapper.setState({listOfVideo: array});
    const instance = wrapper.instance();
    const setListSpy = jest.spyOn(instance, 'setList');
    instance.addToFavorite(array[0].id);
    expect(setListSpy).toHaveBeenCalled();
    setListSpy.mockRestore();
    expect(wrapper.state('listOfVideo').filter(item => (item.id === array[0].id))[0].favorite).toBe(true);
  });
});

describe('componentDidMount should check localStorage', () => {
  let array = [
    {id: "hY7m5jjJ9mM", favorite: false },
    {id: "mRf3-JkwqfU", favorite: false },
    {id: "SB-qEYVdvXA", favorite: true }
  ];

  it('should update listOfVideo in state ', () => {
    localStorage.setItem('list', JSON.stringify(array));
    const wrapper = mount(<App />);
    expect(wrapper.state('listOfVideo')).toEqual(array);
    wrapper.unmount();
  });

  it('should not update listOfVideo in state ', () => {
    localStorage.removeItem('list');
    const wrapper = mount(<App />);
    expect(wrapper.state('listOfVideo').length).toEqual(0);
    wrapper.unmount();
  });
});

describe('componentDidUpdate in Pagination works', () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const recalculatePagesSetFalseSpy = jest.spyOn(instance, 'recalculatePagesSetFalse');
  instance.setState({recalculatePages : true});
  expect(recalculatePagesSetFalseSpy).toHaveBeenCalled();
  recalculatePagesSetFalseSpy.mockRestore();
  
})
