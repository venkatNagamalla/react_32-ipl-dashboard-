// Write your code here
// Write your code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, teamImageUrl, name} = teamDetails
    return (
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="team-card-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
