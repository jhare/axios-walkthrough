import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import RepoItem from './RepoItem';

const githubToken = '';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      repos: [],
      btnPressed: false,
      dataLoaded: false,
    }
  }

  async getRepos() {
    this.setState({
      btnPressed: true,
    });

    const github = axios.create({
      baseURL: 'https://api.github.com/user',
      headers: {
        Authorization: `token ${githubToken}`
      }
    });

    try {
      const response = await github.get('/repos');
      this.setState({
        repos: response.data,
        btnPressed: false,
        dataLoaded: true,
      });
    } catch (err) {
      console.log('had error', err);
    }
  }

  displaySection() {
    if (this.state.btnPressed) {
      return(<h1>YOU PRESSED</h1>);
    }  else if (this.state.dataLoaded) {
      return this.state.repos.map((repo) => (<RepoItem {...repo} ></RepoItem>))
    } else {
      return (
        <Button onClick={this.getRepos.bind(this)}>get repos</Button>
      );
    }
  }

  render() {
    return(
      <div>
        <h2>show me ur work</h2>

        <div>
          {this.displaySection()}
        </div>
      </div>
    );
  }
};
