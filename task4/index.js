// Part A of Task 4
function delay(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function logHi() {
  console.log("Hi");
}

delay(2000).then(logHi);

// Part Б of Task 4
function makeDroids() {
  const droids = [];
  for (let i = 0; i < 10; i++) {
    const droid = () => {
      console.log("D" + i);
    };
    droids.push(droid);
  }
  return droids;
}
for (let d of makeDroids()) {
  d();
}

// Part B of Task 4

const numberForTimer = Math.random() * 10;
const timer = Math.trunc(numberForTimer) * 1000;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (timer <= 2000) {
      resolve(console.log("Done"));
    } else {
      reject(console.error("Error"));
    }
  }, timer);
});
promise.catch((error) => console.error(error));

// Part "Г" of Task 4

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let name;
  let res;

  while(true){
    name = prompt("Login?", "iliakan");
    try {
      res = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${res.name}.`);
      return res;
    } catch (err) {
      if(err instanceof HttpError && err.response.status == 404) {
        alert("We can’t find such user.");
      } else {
        throw err;
      }
    }
  }
}
demoGithubUser();