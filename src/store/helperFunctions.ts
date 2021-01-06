//HELPER FUNCTIONS
import axios from 'axios';

function setTree(state, rootName) {
  console.log('setTree function was called!');
  state.person.tree = rootName;
}

export function downloadTree(state) {
  console.log('downloadTree function was called!');
  const pid = state.person.pid;
  const url = "https://api.familysearch.org/platform/tree/ancestry?generations=5&person=" + pid;
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + state.fsToken
  }
  axios.get(url, {'headers': headers}).then((res) => {
    let people = res.data.persons.filter((person) => person.display.ascendancyNumber >= 8) // remove self, spouse, parents, and grandparents
    if (people.length <= 3) { //if removing those people results in 3 people or less, go ahead and use anyone
      people = res.data.persons;
    }
    setTree(state, res.data.persons[0].display.name);
  }).catch((err) => {
    console.log(err);
  })
}
