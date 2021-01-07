//HELPER FUNCTIONS
import axios from 'axios';

function getImages(state, i) {
  console.log('getImages function was called');
  const pid = state.person.tree[i].pid;
  const url = 'https://api.familysearch.org/platform/tree/persons/' + pid + '/portrait';
  const headers = {
    'Accept': 'application/x-fs-v1+json',
    'Authorization': 'Bearer ' + state.fsToken,
    'X-Expect-Override': '200-ok',
  }
  axios.get(url, {'headers': headers}).then((res) => {
    if (res.headers.location) {
      state.person.tree[i].image = res.headers.location;
    }
    else {
      state.person.tree[i].image = '/images/smiley.png';
    }
  }).catch((err) => {
    console.log(err);
  })
}

export function downloadTree(state) {
  console.log('downloadTree function was called!');
  const pid = state.person.pid;
  const url = "https://api.familysearch.org/platform/tree/ancestry?person=" + pid + "&generations=5&personDetails=";
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + state.fsToken
  }
  axios.get(url, {'headers': headers}).then((res) => {
    for (let i = 0; i < 15; i++) {
      if (res.data.persons[i].display.name) {
        state.person.tree[i].name = res.data.persons[i].display.name;
      }
      else {
        state.person.tree[i].name = 'Unknown';
      }
      if (res.data.persons[i].display.lifespan) {
        state.person.tree[i].lifespan = res.data.persons[i].display.lifespan;
      }
      else {
        state.person.tree[i].lifespan = 'Unknown';
      }
      if (res.data.persons[i].display.birthPlace) {
        state.person.tree[i].placeOfBirth = res.data.persons[i].display.birthPlace;
      }
      else {
        state.person.tree[i].placeOfBirth = 'Unknown';
      }
      if (res.data.persons[i].display.deathPlace) {
        state.person.tree[i].placeOfDeath = res.data.persons[i].display.deathPlace;
      }
      else {
        state.person.tree[i].placeOfDeath = 'Unknown';
      }
      if (res.data.persons[i].display.gender) {
        state.person.tree[i].gender = res.data.persons[i].display.gender;
      }
      else {
        state.person.tree[i].name = 'Unknown';
      }
      if (res.data.persons[i].id) {
        state.person.tree[i].pid = res.data.persons[i].id;
      }
      else {
        state.person.tree[i].pid = 'Unknown';
      }
      getImages(state, i);
    }
  }).catch((err) => {
    console.log(err);
  })
}
