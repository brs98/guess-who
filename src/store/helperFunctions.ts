//HELPER FUNCTIONS
import axios from 'axios';

export function downloadTree(state) {
  console.log('downloadTree function was called!');
  const pid = state.person.pid;
  const url = "https://api.familysearch.org/platform/tree/ancestry?generations=5&person=" + pid;
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + state.fsToken
  }
  axios.get(url, {'headers': headers}).then((res) => {
    for (let i = 0; i < 15; i++) {
      state.person.tree[i] = res.data.persons[i].display.name
    }
  }).catch((err) => {
    console.log(err);
  })
}
