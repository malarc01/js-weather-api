Window.addEventListener("load",()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            console.log("POSTION => ",position,);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/7c18504816cca29f006eb977e140852b/${lat},${long}
            `
            fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            console.log(data)
        })

        });
        
        // .catch()
    }
    // else{
        // h1.textContent = "hey dis is not working because reasons"
    // }
});
