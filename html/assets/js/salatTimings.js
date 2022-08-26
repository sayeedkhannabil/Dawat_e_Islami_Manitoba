//import axios from 'axios';

async function getSalatTime() {
    try {
        const response = await axios.get('http://api.aladhan.com/v1/timingsByCity?city=Winnipeg&country=Canada&method=2');
        return response;
    } catch (error) {
        console.error(error);
    }
}


const main = async () => {
    await getSalatTime()
   .then(function(result){
       console.log(result.data.data.timings);
       document.getElementById("sunrise").innerHTML = result.data.data.timings.Sunrise;
       document.getElementById("sunrise2").innerHTML = result.data.data.timings.Sunrise;
       document.getElementById("sunset").innerHTML = result.data.data.timings.Sunset;
       document.getElementById("fajr").innerHTML = result.data.data.timings.Fajr;
       document.getElementById("dhuhr").innerHTML = result.data.data.timings.Dhuhr;
       document.getElementById("asr").innerHTML = result.data.data.timings.Asr;
       document.getElementById("maghrib").innerHTML = result.data.data.timings.Maghrib;
       document.getElementById("isha").innerHTML = result.data.data.timings.Isha;

    })

};

main();