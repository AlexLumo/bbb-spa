import React from 'react';
import ReactDOM from 'react-dom';

import ImagesByTag from "./ImagesbyTag";

describe('Image', () => {

    const ROOT_NODE_CLASS_NAME = 'route-node';
    let rootNode;

    beforeEach(() => {
        rootNode = document.createElement('div');
        rootNode.className = ROOT_NODE_CLASS_NAME;
        document.body.appendChild(rootNode);
    });

    afterEach(() => {
        window.location.hash = '';

        if (rootNode) {
            document.body.removeChild(rootNode);
        }
    });

    it('should contain correct text', () => {
        expect(rootNode.childElementCount).toEqual(0);
        ReactDOM.render(<ImagesByTag />, rootNode);

        expect(rootNode.childElementCount).toEqual(1);

        expect(rootNode.querySelector('.image-by-tag-cmp__header').textContent).toBe('Images By Tag!');
    });

    it('should contain images', () => {
        const images = ['http://localhost/foo.jpg', 'http://localhost/bar.png'];
        expect(rootNode.childElementCount).toEqual(0);
        ReactDOM.render(<ImagesByTag images={images}/>, rootNode);

        expect(rootNode.childElementCount).toEqual(1);

        expect(rootNode.querySelector('.image-by-tag-cmp__image')).not.toBeNull();
        const imageNodes = rootNode.querySelectorAll('.image-by-tag-cmp__image');
        expect(imageNodes.length).toBe(2);
        expect(imageNodes[0].src).toBe(images[0]);
    });
});