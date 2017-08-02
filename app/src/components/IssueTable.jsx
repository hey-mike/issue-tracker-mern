import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';


import DeleteForever from 'material-ui-icons/DeleteForever';

import EnhancedTableHead from './datatable/EnhancedTableHead.jsx';

const styleSheet = createStyleSheet(theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    delete: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
}));



const IssueRow = (props) => {
    function onDeleteClick() {
        props.deleteIssue(props.issue);
    }
    const issue = props.issue;
    return (
        <TableRow>
            <TableCell><Link to={`/issues/${issue._id}`}>
                {issue._id.substr(-4)}</Link></TableCell>
            <TableCell>{issue.status}</TableCell>
            <TableCell>{issue.owner}</TableCell>
            <TableCell>{issue.created.toDateString()}</TableCell>
            <TableCell>{issue.effort}</TableCell>
            <TableCell>{issue.completionDate ?
                issue.completionDate.toDateString() : ''}</TableCell>
            <TableCell>{issue.title}</TableCell>
            <TableCell>
                <IconButton onClick={onDeleteClick}><DeleteForever /></IconButton>
            </TableCell>
        </TableRow>
    )
}
IssueRow.propTypes = {
    issue: PropTypes.object.isRequired,
    deleteIssue: PropTypes.func.isRequired
};


const IssueTable = (props) => {
    const borderedStyle = { border: "1px solid silver", padding: 6 };
    const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />)
    const classes = props.classes;

    return (
        <Paper className={classes.paper}>
            <Table>
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={this.handleSelectAllClick}
                    onRequestSort={this.handleRequestSort}
                />
                <TableBody>{issueRows}</TableBody>
            </Table>
        </Paper>
    )
}
IssueTable.propTypes = {
    issues: PropTypes.array.isRequired,
    deleteIssue: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};
export default withStyles(styleSheet)(IssueTable);
