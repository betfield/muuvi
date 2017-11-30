import { fetchFixtureOdds, fetchHead2Head, fetchTeamForm } from '../../../api';

export const GET_FIXTURE_DETAILS = 'GET_FIXTURE_DETAILS';

export const getFixtureDetails = fixture => {
  const odds = fetchFixtureOdds(fixture.id, 2);
  const head2head = fetchHead2Head(fixture.homeTeam.id, fixture.awayTeam.id);
  const form = {
    "home": fetchTeamForm(fixture.homeTeam.id),
    "away": fetchTeamForm(fixture.awayTeam.id)
  }

  return {
    type: GET_FIXTURE_DETAILS,
    payload: {
      odds: odds,
      head2head: head2head,
      form: form,
    }
  };
};
