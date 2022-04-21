const yargs = require("yargs");
const axios = require("axios").default;
require('dotenv').config()

let argv = yargs.argv
let rastreio = argv.rastreio

async function getTrackInfo() {
  if(rastreio) {
    let api_url = `https://api.linketrack.com/track/json?user=${process.env.api_data}&codigo=${rastreio}`;

     await axios.get(api_url, {

    }).then( async (response) => {
      const data =  await response.data;
      console.log(data.eventos)
    }).catch(err => console.log(err))
  }
  else {
    console.log('insira um codigo de rastreio valido')
  }
}
getTrackInfo();
