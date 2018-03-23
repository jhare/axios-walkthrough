import React from 'react';
import PropTypes from 'prop-types';

export default class RepoItem extends React.Component {

  constructor() {
    super();
  }

  render() {
    console.log('i have', Object.keys(this.props))
    return(
      <div className="repo-item">
      {this.props.name} - {this.props.description}
      </div>
    );
  }
}

RepoItem.props = {
  repo: PropTypes.object.required,
};
