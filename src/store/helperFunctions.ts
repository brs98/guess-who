//HELPER FUNCTIONS
import axios from 'axios';

export async function downloadTree(tree,pid,fsToken) {
  console.log('downloadTree function was called!');
  const url = "https://api.familysearch.org/platform/tree/ancestry?person=" + pid + "&generations=5&personDetails=";
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + fsToken
  }
  const res: any = await axios.get(url, {'headers': headers}).then(res=>res.data).catch((err) => {
    console.log(err);
    throw new Error("Could not get person's data!");
  })
  console.log(res)
  tree.length = 0;
  for (let i = 0; i < Math.min(15,res.persons.length); i++) {
    const person: any = {};
    const personData = res.persons[i];

    person.pid = personData.id;
    person.name = personData.display.name || "Unknown";
    person.gender = personData.display.gender || "Unknown";
    person.lifespan = personData.display.lifespan || "Unknown";
    person.placeOfBirth = personData.display.birthPlace || "Unknown";
    person.placeOfDeath = personData.display.deathPlace; // This left as null so that living person isn't given a death place;
    
    person.flipped = false;
    await getPersonImage(person,fsToken);
    tree.push(person)
  }

  shuffle(tree);
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
    throw new Error("Could not get person's image!");
  })
  if (res.headers.location) {
    person.image = res.headers.location;
  }
  else {
    person.image = '/images/smiley.png';
  }
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
