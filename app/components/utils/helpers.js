//Axios package for performing HTTP requests (promise based instead of request)
import axios from "axios";

const nytAPI = "3685af7155084bcd98ce73d4c59d99dc";

onst helpers = {

  runQuery: (query) => {

    console.log(query);

    //This should get the articles.
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +'?'+ nytAPI + query

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;