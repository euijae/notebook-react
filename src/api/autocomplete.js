import axios from 'axios';

function autocomplete() {
  axios.get(`https://cors-anywhere.herokuapp.com/https://jello-apigateway.herokuapp.com/api/v1/resources/books/all`)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export {
  autocomplete
};
