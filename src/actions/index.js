import axios from 'axios';
import models from '../models.json';
export const FETCH_PROFILE = "FETCH_PROFILE";
export const REQUEST_PROFILE = "REQUEST_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const REQUEST_REPOS = "REQUEST_REPOS";
export const RECEIVE_REPOS = "RECEIVE_REPOS";

export const REQUEST_CAT = "REQUEST_CAT";
export const RECEIVE_CAT = "RECEIVE_CAT";
export const SEARCH_REPOS = "SEARCH_REPOS";
export const SEARCH_CLEARED = "SEARCH_CLEARED";

function requestProfile() {
  return {
    type: REQUEST_PROFILE,
    payload : "Requesting"
  }
}

function receiveProfile(data) {
  return {
    type: RECEIVE_PROFILE,
    payload :data

  }
}

function requestRepos() {
  return {
    type: REQUEST_REPOS,
    payload : "Requesting"
  }
}

function receiveReops(data) {
  return {
    type: RECEIVE_REPOS,
    payload :data

  }
}

function requestCat() {
  return {
    type: REQUEST_CAT,
    payload : "Requesting"
  }
}

function receiveCat(data) {
  return {
    type: RECEIVE_CAT,
    payload :data

  }
}

export function fetchProfile() {
  return function(dispatch) {
    dispatch(requestProfile())

    return axios.get('http://api.github.com/users/StephenGrider')
	.then(function (response) {
	    console.log(response);
	    dispatch(receiveProfile(response.data))
	})
	.catch(function (error) {
	    console.log(error);
	});
  }
}

export function fetchRepos() {
  return function(dispatch) {
    dispatch(requestRepos())

    return axios.get('http://api.github.com/users/StephenGrider/repos')
	.then(function (response) {
	    console.log(response);
	    dispatch(receiveReops(response.data))
	})
	.catch(function (error) {
	    console.log(error);
	});

  }
}

export function searchRepo(term){
	if(term != ''){
		return {
			type : SEARCH_REPOS,
			payload: term
		}
	}
	else{
		return{
			type : SEARCH_CLEARED,
			payload:term
		}
	}
}

export function fetchCategories() {
  return function(dispatch) {
    dispatch(requestCat())
    dispatch(receiveCat(models.categories))

 //    return axios.get('https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json')
	// .then(function (response) {
	//     console.log(response);
	//     dispatch(receiveCat(response.data))
	// })
	// .catch(function (error) {
	//     console.log(error);
	// });

  }
}