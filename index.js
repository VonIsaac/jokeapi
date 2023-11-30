const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('btn');


const getJoke = async () => {
    let jokeApi = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")

    let data = await jokeApi.json()
    joke.innerHTML = data.joke;

}

jokeBtn.addEventListener('click', getJoke)