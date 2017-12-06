import { client } from '../main';
import { fixturesListQuery, fixtureDetailsQuery } from './queries';
import { SportmonksApi } from './sportmonks'

const Sportmonks = new SportmonksApi( 
  "https://soccer.sportmonks.com/api/",
  "fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE"
);

//Removed async/await for testing purposes - not sure these are needed here
export const fetchFixturesList = () => {
  return client.query({query: fixturesListQuery})
    .then((res) => {
      //console.log("Query result: " + JSON.stringify(res, null, 4));
      return res.data;
    })
    .catch((error)=> {
      console.log(error);
    });
}

//https://soccer.sportmonks.com/api/v2.0/odds/fixture/1625141/bookmaker/2?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE
export const fetchFixtureOdds = (fixtureId, bookmakerId) => {
  return Sportmonks.get(
    "v2.0/odds/fixture/{id}/bookmaker/{bookmaker}", {
      "id": fixtureId, 
      "bookmaker": bookmakerId
    })
    .then(async res => {
      return res.json();
    })
    .then(res => {
      //console.log("fetchFixtureOdds: " + JSON.stringify(res.data, null, 4));
      return res.data;
    })
    .catch( err => {
      console.log("Failed to load data for fixture: " + fixtureId + " and bookmaker: " + bookmakerId, err);
    });
}

//https://soccer.sportmonks.com/api/v2.0/head2head/85/2650?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE
export const fetchHead2Head = async (homeTeam, awayTeam) => {
  return await Sportmonks.get(
    "v2.0/head2head/{homeTeam}/{awayTeam}", {
      "homeTeam": homeTeam, 
      "awayTeam": awayTeam
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
    //console.log("fetchHead2Head: " + JSON.stringify(res.data, null, 4));
    return res.data;
  })
  .catch( err => {
    console.log("Failed to load data for head 2 head: " + homeTeam + " vs " + awayTeam, err);
  });
}

//https://soccer.sportmonks.com/api/v2.0/teams/85?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE&include=latest:limit(5|1)
export const fetchTeamForm = async (id) => {
  return await Sportmonks.get(
    "v2.0/teams/{id}", {
      "id": id, 
      "latest": true
      //TODO: How to include limit?
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      //console.log("fetchTeamForm: " + JSON.stringify(res.data, null, 4));
      return res.data;
    })
    .catch( err => {
      console.log("Failed to load form data for team: " + id, err);
    });
}