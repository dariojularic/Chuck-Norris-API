import './style.css'

const loadJoke = async () => {
  try {
    const chuckNorrisFetch = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json"
      }
    })
    const jokeData = await chuckNorrisFetch.json();
    document.querySelector("#loadingJoke").innerHTML = jokeData.value;
    console.log(jokeData.value)
  }
  catch(error) {
    console.log(error)
  }
}
console.log(loadJoke())

document.querySelector("#loadJokeBtn").addEventListener("click", loadJoke);
