import React from 'react';
import { mount } from 'enzyme'; 
import App from '../App';

describe('getResumeData tests', () => {
    it('render should call getResumeData with property test', () => {
        // Given
        const spy = jest.spyOn(App.prototype, 'getResumeData');

        // When
        mount(<App />);

        // Then
        expect(spy).toHaveBeenCalledWith('test');
    });
});