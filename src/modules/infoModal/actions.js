import { fetchFixtureOdds } from '../../../api';

export const GET_FIXTURE_DETAILS = 'GET_FIXTURE_DETAILS';

export const getFixtureDetails = (fixture, bookieId) => {
  data = fetchFixtureOdds(fixture.id, bookieId);
  //head2head = fetchHead2Head(fixture.homeTeam.id, fixture.awayTeam.id);
  /*form = {
    "home": fetchTeamForm(fixture.homeTeam.id),
    "away": fetchTeamForm(fixture.awayTeam.id)
  }*/

  return {
    type: GET_FIXTURE_DETAILS,
    payload: data
    /*payload: {
      odds: odds,
      head2head: head2head,
      form: form
    }*/
  };
};
