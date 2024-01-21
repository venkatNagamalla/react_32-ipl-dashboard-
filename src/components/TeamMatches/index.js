// Write your code here
import {Component} from 'react'
// import LatestMatch from '../LatestMatch'
import './index.css'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getUpdatedObj = dataObj => ({
    competingTeam: dataObj.competing_team,
    competingTeamLogo: dataObj.competing_team_logo,
    date: dataObj.date,
    firstInnings: dataObj.first_innings,
    id: dataObj.id,
    manOfTheMatch: dataObj.man_of_the_match,
    matchStatus: dataObj.match_status,
    result: dataObj.result,
    secondInnings: dataObj.second_innings,
    umpires: dataObj.umpires,
    venue: dataObj.venue,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getUpdatedObj(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getUpdatedObj(eachMatch),
      ),
    }
    this.setState({teamDetails: updatedData, isLoading: false})
  }

  getBgColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return id.toLowerCase()
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    const bg = this.getBgColor()
    console.log(bg)

    return (
      <div className={`each-team-bg-container ${bg}`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="inner-container">
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="teams-card-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
