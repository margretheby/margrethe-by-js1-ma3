const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=894afe97abbe4fa38fa3fd705ae27549";
const container = document.querySelector(".container");



try {
    async function getAPI() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const facts = data.all;
        container.innerHTML = "";
        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            if (i === 9) {
                break;
            }
            container.innerHTML += `<div>${facts[i].name}</div>`;
        }
    }
}
catch(error) {
    console.log("An error has occured");
    container.innerHTML = "An error has occured";
}