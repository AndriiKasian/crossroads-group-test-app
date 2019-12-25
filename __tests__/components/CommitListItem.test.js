import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import CommitListItem from '../../components/CommitListItem'

describe('CommitListItem', () => {
    it('Should render with empty props', () => {
        const wrapper = shallow(<CommitListItem/>);

        expect(wrapper).toBeDefined();
    });

    it('Should render correctly', () => {
        const component = renderer.create(<CommitListItem/>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
