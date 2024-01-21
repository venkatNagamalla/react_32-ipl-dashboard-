// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props

  const {competingTeam, matchStatus, competingTeamLogo, result} = matchDetails

  return (
    <li className="card">
      <div className="logo-container">
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
      </div>
      <p className="card-team-name">{competingTeam}</p>
      <p className="text-pro">{result}</p>
      <p className={matchStatus.toLowerCase()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
