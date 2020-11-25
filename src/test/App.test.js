import React from 'react';
import { mount, shallow } from 'enzyme'; 
import App from '../App';
import $ from 'jquery';

describe('App.js tests', () => {
  it('renders without crashing', () => {
    // When
    const component = mount(<App />);

    // Then
    expect(component.isEmptyRender()).toBe(false);
  });

  it('render should call getResumeData', () => {
    // Given
    const spy = jest.spyOn(App.prototype, 'getResumeData');

    // When
    mount(<App />);

    // Then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('render should call componentDidMount', () => {
    // Given
    const spy = jest.spyOn(App.prototype, 'componentDidMount');

    // When
    mount(<App />);

    // Then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('getResumeData should call jquery', () => {
    // Given
    const spy = jest.spyOn($, 'ajax');

    // When
    mount(<App />);

    // Then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('render should have <div className="App">', () => {
    // When
    const component = shallow(<App />);

    // Then
    expect(component.exists('div.App')).toBe(true);
  });

  it('render should have state foo equal to bar', () => {
    // When
    const component = shallow(<App />);
    const state = component.state();

    // Then
    expect(state.foo).toBe('bar');
  });

  it('render should have <div className="App">', () => {
    // When
    const component = shallow(<App />);

    // Then
    expect(component.exists('div.App')).toBe(true);
  });

  it('render should have created Header #home', () => {
    // When
    const component = mount(<App />);

    // Then
    expect(component.find('header').filter('#home').html()).toMatchSnapshot();
  });
});