import axios from 'axios';

export default axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params:  {
    ts: '1622296392',
    apikey:'80f02160ccd2740fb6f668d21bb748d8' ,
    hash: '71cd56579b6f036a60c33938df1e18a9'
}
});