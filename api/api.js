import { client } from '../main';
import { fixturesListQuery, fixtureDetailsQuery, seasonMatchdaysQuery } from './queries';
import { SportmonksApi } from './sportmonks'

const Sportmonks = new SportmonksApi( 
  "https://soccer.sportmonks.com/api/",
  "fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE"
);

//Removed async/await for testing purposes - not sure these are needed here
export const fetchFixturesList = () => {
  return client.query({query: fixturesListQuery})
    .then(res => {
      //console.log("Query result: " + JSON.stringify(res, null, 4));
      return res.data;
    })
    .catch((error)=> {
      console.log(error);
    });
}

export const fetchSeasonMatchdays = () => {
  return client.query({query: seasonMatchdaysQuery})
    .then(res => {
      //console.log("Query result: " + JSON.stringify(res, null, 4));
      return res.data;
    })
    .catch((error)=> {
      console.log(error);
    });
}

export const fetchFixtureDetails = (fixture, bookieId) => {
  return Promise.all([fetchFixtureOdds(fixture.id, bookieId), 
                      fetchHead2Head(fixture.homeTeam.id, fixture.awayTeam.id), 
                      //fetchTeamForm(fixture.homeTeam.id), 
                      //fetchTeamForm(fixture.awayTeam.id),
                      fetchSeasonStandings(fixture.season_id)])
    .then(res => {
      //console.log("Promise all result: " + JSON.stringify(res[0], null, 4));
      return [
        res[0], //Odds
        res[1], //Head2Head
        //res[2], //Home Form
        //res[3], //Away Form
        res[2]  //Standings
      ];
    })
    .catch((error)=> {
      console.log(error);
    });
}


//https://soccer.sportmonks.com/api/v2.0/odds/fixture/1625141/bookmaker/2?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE
const fetchFixtureOdds = (fixtureId, bookmakerId) => {
  return Sportmonks.get(
    "v2.0/odds/fixture/{id}/bookmaker/{bookmaker}", {
      "id": fixtureId, 
      "bookmaker": bookmakerId
    })
    .then(res => {
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

//https://soccer.sportmonks.com/api/v2.0/head2head/85/2650?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE&include=localTeam,visitorTeam,cards
const fetchHead2Head = async (homeTeam, awayTeam) => {
  return Sportmonks.get(
    "v2.0/head2head/{homeTeam}/{awayTeam}", {
      "homeTeam": homeTeam, 
      "awayTeam": awayTeam,
      "localTeam": true,
      "visitorTeam": true,
      "cards": true
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
const fetchTeamForm = async (id) => {
  return Sportmonks.get(
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

//https://soccer.sportmonks.com/api/v2.0/standings/season/6361?api_token=fVOC8UhcpFDSVFyNmAIjbbt2buc86l128ovGMVAJZwgHVtnwpa9XjZJ3GodE
const fetchSeasonStandings = async (season) => {
  return Sportmonks.get(
    "v2.0/standings/season/{id}", {
      "id": season
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
