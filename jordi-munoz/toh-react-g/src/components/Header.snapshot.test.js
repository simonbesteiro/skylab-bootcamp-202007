import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header snapshot', () => {
    const headerTree = renderer.create(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(headerTree.toJSON()).toMatchSnapshot();
    });

});