import React from 'react';
import { tr, td, Button } from 'react-bootstrap';

export default class IssueRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropRow = this.handleDropRow.bind(this);
  }
  handleDropRow() {
    this.props.onDropRow(this.props.issue.seq);
  }

  handleEditBtnClick() {
    this.props.showModal('Update', { ...this.props.issue });
  }

  render() {
    const color = (this.props.issue.isUpdate === true) ? '#f1f442' : '';
    return (
      <tr style={{ backgroundColor: color }}>
        <td>{this.props.issue.seq}</td>
        <td>{this.props.issue.status}</td>
        <td>{this.props.issue.category}</td>
        <td>{this.props.issue.title}</td>
        <td>{this.props.issue.owner}</td>
        <td>{this.props.issue.priority}</td>
        <td>
          <Button onClick={() => this.handleEditBtnClick()}>Edit</Button>
          <Button onClick={this.handleDropRow}>Delete</Button>
        </td>
      </tr>
    );
  }
}

IssueRow.propTypes = {
  issue: React.PropTypes.shape({
    seq: React.PropTypes.number,
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string,
    isUpdate: React.PropTypes.bool
  }),
  onDropRow: React.PropTypes.func,
  showModal: React.PropTypes.func
};
