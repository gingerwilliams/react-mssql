import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('title', () => { 
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();

    // // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();

    // // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});




