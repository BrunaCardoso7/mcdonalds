function initMap(){
    
    const searchInput = document.querySelector('#search_input');
    const resultInput = document.querySelector('#result__input');

    var service = new google.maps.places.PlacesService(document.createElement("div"));

    searchInput.addEventListener('input', function(){
        resultInput.innerHTML = '';

        const query = searchInput.value;

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function (position){
                const userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)

                let request ={
                    location:userLatLng,
                    radius: 5000,   
                    keyword: query
                }

                service.nearbySearch(request, function(results, status){
                    if(status === google.maps.places.PlacesServiceStatus.OK){
                        for(let i = 0; i < results.length; i++){
                            let newItem = document.createElement('li');
                            newItem.textContent = results[i].name;

                            resultInput.appendChild(newItem)
                        }
                    }
                })
            })
        }
    })
}
document.addEventListener('DOMContentLoaded', function(){
    initMap()
})