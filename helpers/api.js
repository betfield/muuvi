import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { client } from '../main';

export const fetchMoviePopular = async () => {
  try {
    return fetchData('movie/popular');
  } catch (err) {
    console.log(err);
  }
};

export const fetchFixturesList = async () => {
  return await client.query({query: fixturesListQuery})
    .then((res) => {
      console.log("Query result: " + JSON.stringify(res, null, 4));
      return res.data;
    })
    .catch((error)=> {
      console.log(error);
    });
}

const fixturesListQuery = gql`
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

export const fetchMoviesSimilar = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/similar`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieTrailers = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/videos`);
  } catch (err) {
    console.log(err);
  }
};
