import React, { Component } from 'react';

import './teams.css';

class Teams extends Component {
  state = {
    teams: []
  };
  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({
          teams: JSON.parse(xhr.response).teams
        });
      }
    };
    xhr.open('GET', 'teams.json', true);
    xhr.send();
  }
  render() {
    let { teams } = this.state;
    return (
      <div className="teams">
        {teams.map((team, index) => (
          <div key={index} className={`team ${team.img}`}>
            <div className="team-name">{team.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Teams;
