const axios = require('axios')

axios.get('https://codequiz.azurewebsites.net/', {
    headers: {
        Cookie: 'hasCookie = true'
    }
}).then(async (res) => {
    const args = process.argv.slice(2)
    let firstFindValue = res.data.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gm)
    let index = 0

    firstFindValue.forEach((item, i) => {
        if (item.includes(args[0])) {
            index = i + 1
        }
    })
    let secondFindValue = firstFindValue[index].split(/(<td>)(.+?)(<\/td>)/g)

    if(!isNaN(parseFloat(secondFindValue[2]))){
        console.log(secondFindValue[2])
    }else{
        console.log("Not found!!!");
    }
})