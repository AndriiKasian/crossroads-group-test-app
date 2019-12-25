import React, {useEffect, useState} from "react";
import get from 'lodash.get';

import CommitListItem from "./CommitListItem";

import { getCommits } from '../services/gitHubService';

const CommitList = () => {
    const [list, setList] = useState([]);

    const loadCommitList = async () => {
        const res = await getCommits();
        const data = get(res, 'data') || [];

        setList(data)
    }

    useEffect(() => {
        loadCommitList()
    }, []);

    return (
        <div>
            {list.map(({ html_url: url, commit, sha }) => (
                <CommitListItem
                    key={sha}
                    committer={get(commit, 'committer.name')}
                    date={get(commit, 'committer.date')}
                    message={get(commit, 'message')}
                    url={url}
                />
            ))}
            {!list.length && <p>There is no commits to show</p>}
        </div>
    )
};

export default CommitList;
