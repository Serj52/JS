// fetch("http://api.openweathermap.org/geo/1.0/direct?",  + new URLSearchParams({
//     q: "London",
//     limit: 5,
//     appid: "e75adb2a4dfabcc399005635cfe4644e"
// }))
//     .then(function (result) {
//         return result.text()
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })


async function get_geo(country) {
    const params = new URLSearchParams({
        q: country,
        limit: 1,
        appid: "e75adb2a4dfabcc399005635cfe4644e"
    });

    const url = `http://api.openweathermap.org/geo/1.0/direct?${params}`
    let geo = {}

    let result = await fetch(url)
    let textResponse = await result.json()
    geo.lat = textResponse[0].lat
    geo.lon = textResponse[0].lon
    return geo
}

async function get_weather(geo) {
    weather = {}
    const params = new URLSearchParams({
        lat: geo.lat,
        lon: geo.lon,
        appid: "e75adb2a4dfabcc399005635cfe4644e"
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`
    let result = await fetch(url)
    let textResponse = await result.json()
    return textResponse.weather
}

async function weatherworker(city){
    const geo = await get_geo(city)
    const weather = await get_weather(geo)
    return weather

}


weatherworker('London').then(console.log)

