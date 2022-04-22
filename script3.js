let axios = require('axios').default;

const url = 'https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json';
const rep = axios.get(url).then(resp => {
    console.log(resp.data);
});