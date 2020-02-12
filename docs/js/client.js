function getData(url){
    return fetch(url);
}


const url = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&APPID=e888f7b1d026d2437f6f399f57c26a89`;
getData(url)
    .then(data => {
        return data.json()
    })
    .then(jsonData =>{
        console.log(jsonData)
        // console.log(JSON.stringify(jsonData, null, 4))

    })