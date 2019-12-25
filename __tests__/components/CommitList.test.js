import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { act } from 'react-dom/test-utils';

import CommitList from '../../components/CommitList'
import * as gitHubService from '../../services/gitHubService'

describe('CommitList component', () => {
    it('should render with empty props', () => {
        const wrapper = shallow(<CommitList/>);

        expect(wrapper).toBeDefined();
    });

    it('should render correctly', () => {
        const component = renderer.create(<CommitList/>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should call loadCommitList method when mount', async () => {
        const spy = jest
            .spyOn(gitHubService, 'getCommits')
            .mockImplementation(() => {});

        await act(async () => mount(<CommitList/>));

        expect(spy).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks()
    });
});
