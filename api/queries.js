import gql from 'graphql-tag';

export const fixturesListQuery = gql`
{
  currentMatchdayfixtures(season: 7953) {
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
    venue {
      id
      name
      city
      capacity
      imgUrl
    }
    referee
    result {
      goalsHomeTeam
      goalsAwayTeam
    }
    statsHomeTeam {
      shots {
        total
        ongoal
        offgoal
        blocked
      }
      fouls
      corners
      offsides
      possessiontime
      yellowcards
      redcards
      saves
    }
    statsAwayTeam {
      shots {
        total
        ongoal
        offgoal
        blocked
      }
      fouls
      corners
      offsides
      possessiontime
      yellowcards
      redcards
      saves
    }
    status
    date
  }
}
`;

export const seasonMatchdaysQuery = gql`
{
  seasonMatchdays(season: 7953)
}
`;
