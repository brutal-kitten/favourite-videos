import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './Searchbar.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders properly', () => {
  const tree = TestRenderer.create(
    <Searchbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockChangeSearchResultError = jest.fn();
const mockAddToList = jest.fn();

const props = {
  changeSearchResultError: mockChangeSearchResultError,
  addToList: mockAddToList
}

const initialState = {
  query: '',
  videoId: ''
}

it('initialize Searchbar with correct initial state', () => {
  const wrapper = shallow(<Searchbar {...props}/>);
  expect(wrapper.state()).toEqual(initialState);
});

describe('methods that set state works proprerly', () => {
  const wrapper = shallow(<Searchbar {...props}/>);

  it('should update query every time user types into input form', () => {
    wrapper.find('input').simulate('change', {
      target: {value: 'lalala'},
      preventDefault: () => {},
    });
    expect(wrapper.state('query')).toBe('lalala');
  });

  it('clearQuery method should set query to an empty string', () => {
    const instance = wrapper.instance();
    instance.clearQuery();

    expect(wrapper.state('query')).toBe('');
  });

  it('updateVideoId should set videoId with a given value', () => {
    const instance = wrapper.instance();
    instance.updateVideoId('lalala');

    expect(wrapper.state('videoId')).toBe('lalala');
  })

  it('clearID method should set videoId to an empty string', () => {
    const instance = wrapper.instance();
    instance.clearID();
    expect(wrapper.state('videoId')).toBe('');
  });
});


describe('detectID method works correctly', () => {
  const wrapper = shallow(<Searchbar {...props}/>);
  const inputs = ["WEkSYw3o5is", "https://www.youtube.com/watch?v=WEkSYw3o5is", "https://youtu.be/WEkSYw3o5is"];

  it('should detect ID from string', () => {
    wrapper.setState({query: inputs[0]});
    const instance = wrapper.instance();
    instance.detectID();
    expect(wrapper.state('videoId')).toBe("WEkSYw3o5is");
  });

  it('should detect ID from youtube link', () => {
    wrapper.setState({query: inputs[1]});
    const instance = wrapper.instance();
    instance.detectID();
    expect(wrapper.state('videoId')).toBe("WEkSYw3o5is");
  });

  it('should detect ID from youtube share link', () => {
    wrapper.setState({query: inputs[2]});
    const instance = wrapper.instance();
    instance.detectID();
    expect(wrapper.state('videoId')).toBe("WEkSYw3o5is");
  });
});

describe('submit buttons work correctly', () => {
  const wrapper = shallow(<Searchbar {...props}/>);

  const instance = wrapper.instance();
  const detectIDSpy = jest.spyOn(instance, 'detectID');
  const clearIDSpy = jest.spyOn(instance, 'clearID');
  const setIdSpy = jest.spyOn(instance, 'setId');
  const updateVideoIdSpy = jest.spyOn(instance, 'updateVideoId');
  const clearQuerySpy = jest.spyOn(instance, 'clearQuery');
  const getInfoSpy = jest.spyOn(instance, 'getInfo');

  wrapper.find('input').simulate('change', {
    target: {value: 'lalala'},
    preventDefault: () => {},
  });

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  it('should call detectID', () => {
    expect(detectIDSpy).toHaveBeenCalled();
    detectIDSpy.mockRestore();
  });

  it('should call setIdSpy', () => {
    expect(setIdSpy).toHaveBeenCalled();
    setIdSpy.mockRestore();
  });

  it('should call updateVideoIdSpy', () => {
    expect(updateVideoIdSpy).toHaveBeenCalled();
    updateVideoIdSpy.mockRestore();
  });

  it('should call clearQuerySpy', () => {
    expect(clearQuerySpy).toHaveBeenCalled();
    clearQuerySpy.mockRestore();
  });

  it('should call getInfoSpy', () => {
    expect(getInfoSpy).toHaveBeenCalled();
    getInfoSpy.mockRestore();
  });

  it('should call clearIDSpy', () => {
    expect(clearIDSpy).toHaveBeenCalled();
    clearIDSpy.mockRestore();
  });

  it('should call changeSearchResultError once', () => {
    expect(mockChangeSearchResultError.mock.calls.length).toBe(1);
    expect(mockChangeSearchResultError.mock.calls[0][0]).toBe(false);
  });

});

describe('handleResult should work correct', () => {
  const wrapper = shallow(<Searchbar {...props}/>);
  const instance = wrapper.instance();

  it('should call addToList ones with  created object', () => {
    const instance = wrapper.instance();
    instance.handleResult({
    "items": [
      {
        "id": "hY7m5jjJ9mM",
        "snippet": {
          "publishedAt": "2017-05-31T09:30:02.000Z",
          "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
          "title": "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg",
              "width": 120,
              "height": 90
            }
          },
        },
        "statistics": {
          "viewCount": "82754092",
          "likeCount": "333383",
        }
      }
    ]
  });

    expect(mockAddToList.mock.calls.length).toBe(1);
    expect(mockChangeSearchResultError.mock.calls.length).toBe(1);
    expect(mockAddToList.mock.calls[0][0]).toEqual({"date": "Wed May 31 2017", "favorite": false, "id": "hY7m5jjJ9mM", "likes": "333383", "thumbnails": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg", "title": "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation", "views": "82754092"});
  });

  it('should changeSearchResultError with true if there is no result', () => {
    const instance = wrapper.instance();
    instance.handleResult({"items": []});
    expect(mockChangeSearchResultError.mock.calls.length).toBe(2);
    expect(mockChangeSearchResultError.mock.calls[1][0]).toBe(true);
  });
});

describe('in getInfo catch work properly', async() => {
  const wrapper = shallow(<Searchbar {...props}/>);

  it('should catch error', async () => {
    const instance = wrapper.instance();
    window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      reject({error : "error"});
    })});
    let response = await instance.getInfo("hY7m5jjJ9mM");
    expect(mockChangeSearchResultError.mock.calls.length).toBe(2);
    expect(mockChangeSearchResultError.mock.calls[1][0]).toBe(true);
  });
})
