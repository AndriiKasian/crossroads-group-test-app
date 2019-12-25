import React, {useEffect, useState} from "react";
import get from 'lodash.get';

import CommitListItem from "./CommitListItem";

const CommitList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
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
        </div>
    )
};

export default CommitList;
