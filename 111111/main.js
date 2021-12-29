const  USER_URL = 'https://swapi.dev/api/people/'

async function showHero () {
    for (let index = 1; index < 11; index++) {
        let response = await fetch(USER_URL + index)
        let userInfo = await response.json()
        console.log(`${userInfo.name} -- ${userInfo.created} `)
    }
    
}

showHero()