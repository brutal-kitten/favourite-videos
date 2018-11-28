import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';
import TestRenderer from 'react-test-renderer';
import { shallow, mount, render, ReactWrapper } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';
import modalRoot from './Modal.js'

configure({ adapter: new Adapter() });



const modalRootM = global.document.createElement('div');
modalRootM.setAttribute('id', 'modal-rootM');
const body = global.document.querySelector('body');
body.appendChild(modalRootM);

const mockCloseModal = jest.fn();

describe('show modal window when showModal is true', () => {

const props = {
    videoId: "",
    showModal: true,
    closeModal: mockCloseModal,
    modalRoot: modalRootM
};

const wrapper = mount(<Modal {...props} />);


it('should indlude ShowVideo', () => {
  expect(wrapper.find('.window').exists()).toBeTruthy();
});

it('has button closeModal', () => {
  expect(wrapper.find('button.closeModal').exists()).toBeTruthy();
});

})

describe('doesnt show modal window when showModal is false', () => {
  const props = {
    videoId: "",
    showModal: false,
    closeModal: mockCloseModal,
    modalRoot: modalRootM
  };

  const wrapper1 = mount(<Modal {...props} />,);

  it('should not render Modal component', () => {
    expect(wrapper1.find('.window').exists()).toBeFalsy();
  });

})
