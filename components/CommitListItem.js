import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CommitListItem = ({ committer, date, message, url }) => {
    const handleView = () => {
        // TODO redirect to the selected github commit page
    };

    const getFormattedDate = date => new Date(date).toLocaleString();

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {message}
                </Typography>
                <Typography variant="body2" component="p">
                    {committer} committed at {getFormattedDate(date)}
                </Typography>
            </CardContent>
            {url && <CardActions>
                <Button size="small" onClick={handleView}>View</Button>
            </CardActions>}
        </Card>
    )
};

export default CommitListItem;
