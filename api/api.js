import { client } from '../main';
import { fixturesListQuery } from './queries';

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
