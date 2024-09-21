
function init() {
    async function fetchData() {
        try {
            let response = await fetch("https://www.fruityvice.com/api/fruit/all");
            let responseAsJson = await response.json();
            console.log(responseAsJson[0]);
            for (let i = 0; i < responseAsJson.length; i++) {
                document.getElementById('fruits').innerHTML += getFruits(responseAsJson[i]);
            }
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}
