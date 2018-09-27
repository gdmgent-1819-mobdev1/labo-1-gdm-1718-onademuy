// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    
    

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        console.log(data[i]);
        let content = document.getElementById("parking-overview");
        
        let div = document.createElement("div");
        div.className = "parking"
        let h2 = document.createElement("h2");
        let contentH2 = document.createTextNode(data[i].description);
        h2.appendChild(contentH2);
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let contentli = document.createTextNode("capaciteit: " + data[i].totalCapacity);
        let contentli2 = document.createTextNode("beschikbaar: " + data[i].parkingStatus.availableCapacity);
      
        li.appendChild(contentli);
        li2.appendChild(contentli2);
        ul.appendChild(li);
        ul.appendChild(li2);
       
        div.appendChild(h2);
        div.appendChild(ul)
        content.appendChild(div);
      
        let getal = data[i].parkingStatus.availableCapacity/data[i].totalCapacity;
        console.log(getal);
        if (getal > 0.5) {
            div.style.backgroundColor = '#2ecc71';
        }else if(getal>=0.2 && getal<=0.5){
            div.style.backgroundColor = '#e67e22';
        }else{
            div.style.backgroundColor = '#e74c3c';
        };
    }
});




