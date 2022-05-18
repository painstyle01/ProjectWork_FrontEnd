import React from 'react';

function BiographyPage(){

    fetch('http://frankos-museum-backend.azurewebsites.net/about-franko/')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        const body = doc.querySelector('body').innerHTML;
        const mainDiv = document.getElementById("historyPage")
        mainDiv.innerHTML = body

        const images = Array.prototype.slice.call(mainDiv.getElementsByTagName("img"))
        images.map((e)=>{
            // e.src = 'http://frankos-museum-backend.azurewebsites.net' + e.getAttribute('src')
            e.src = e.getAttribute('src')
        })
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    }); 

    return( 
        <div id="historyPage" style={{marginLeft: "150px", marginRight: "150px"}}/>
    )
}

export default BiographyPage;