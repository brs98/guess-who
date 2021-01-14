//HELPER FUNCTIONS
import axios from 'axios';

export async function downloadTree(tree,pid,fsToken) {
  console.log('downloadTree function was called!');
  const url = "https://api.familysearch.org/platform/tree/ancestry?person=" + pid + "&generations=5";
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + fsToken
  }
  const res: any = await axios.get(url, {'headers': headers}).then(res=>res.data).catch((err) => {
    console.log(err);
  })
  console.log(res)
  tree.length = 0;
  for (let i = 0; i < 15; i++) {
    const person: any = {};
    const personData = res.persons[i];
    if (personData.display.name) {
      person.name = personData.display.name;
    }
    else {
      person.name = 'Unknown';
    }
    if (personData.display.lifespan) {
      person.lifespan = personData.display.lifespan;
    }
    else {
      person.lifespan = 'Unknown';
    }
    if (personData.display.birthPlace) {
      person.placeOfBirth = personData.display.birthPlace;
    }
    else {
      person.placeOfBirth = 'Unknown';
    }
    if (personData.display.deathPlace) {
      person.placeOfDeath = personData.display.deathPlace;
    }
    else {
      person.placeOfDeath = 'Unknown';
    }
    if (personData.display.gender) {
      person.gender = personData.display.gender;
    }
    else {
      person.name = 'Unknown';
    }
    if (personData.id) {
      person.pid = personData.id;
    }
    else {
      person.pid = 'Unknown';
    }
    person.flipped = false;
    await getPersonImage(person,fsToken);
    tree.push(person)
  }
}

  
async function getPersonImage(person,fsToken) {
  console.log('getPersonImage function was called');
  const url = 'https://api.familysearch.org/platform/tree/persons/' + person.pid + '/portrait';
  const headers = {
    'Accept': 'application/x-fs-v1+json',
    'Authorization': 'Bearer ' + fsToken,
    'X-Expect-Override': '200-ok',
  }
  const res: any = await axios.get(url, {'headers': headers}).then(res=>res).catch((err) => {
    console.log(err);
  })
  if (res.headers.location) {
    person.image = res.headers.location;
  }
  else {
    person.image = '/images/smiley.png';
  }
}
async function getPersonData(person,fsToken) {
  console.log('getPersonData function was called');
  const url = 'https://api.familysearch.org/platform/tree/persons/' + person.pid + "?flag=fsh";
  const headers = {
    'Accept': 'application/x-fs-v1+json',
    'Authorization': 'Bearer ' + fsToken,
    'X-Expect-Override': '200-ok',
  }
  const res: any = await axios.get(url, {'headers': headers}).then(res=>res).catch((err) => {
    console.log(err);
  })
  console.log(res)
}
