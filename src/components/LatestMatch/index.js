import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    venue,
    date,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
    result,
  } = latestMatchDetails
  return (
    <div>
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="total-container">
        <div className="latest-matches-container">
          <div className="competing-team-container">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="text">{venue}</p>
            <p className="text">{result}</p>
          </div>
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr />
        <div className="details-container">
          <p className="team-side-heading">First Innings</p>
          <p className="text">{firstInnings}</p>
          <p className="team-side-heading">Second Innings</p>
          <p className="text">{secondInnings}</p>
          <p className="team-side-heading">Man Of The Match</p>
          <p className="text">{manOfTheMatch}</p>
          <p className="team-side-heading">Umpires</p>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
