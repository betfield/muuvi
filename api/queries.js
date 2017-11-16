import gql from 'graphql-tag';

export const fixturesListQuery = gql`
{
  currentMatchdayfixtures(season:7953) {
    id
    league_id
    season_id
    matchday_id
    matchday_name
    homeTeam {
      id
			name
      logoUrl
    }
    awayTeam {
      id
      name
      logoUrl
    }
    result {
      goalsHomeTeam
      goalsAwayTeam
    }
    status
    date
  }
}
`;