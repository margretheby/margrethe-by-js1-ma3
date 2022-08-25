const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=894afe97abbe4fa38fa3fd705ae27549";
const container = document.querySelector(".results");

async function getApi() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const games = data.results;
        container.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
            // console.log(games[i]);
            if (i === 8) {
                break;
            }
            container.innerHTML += `<div class="container">
            <p><span>Name:</span> ${games[i].name}</p>
            <p><span>Rating:</span> ${games[i].rating}</p>
            <p><span>Number of tags:</span> ${games[i].tags.length}</p>
            </div>`;
        }
    }
    catch(error) {
        console.log(error);
        container.innerHTML = "An error has occured when loading the API.";
    }
    finally {
        console.log("This code always runs.");
    }
}

getApi();

