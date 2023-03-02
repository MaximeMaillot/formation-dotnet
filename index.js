fetch("http://localhost:7777")
    .then((response) => { return response.json() })
    .then((data) => console.log(data));