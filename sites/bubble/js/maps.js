 function initMap() {
          var roeselare = {lat: 50.970286, lng: 3.119844};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: roeselare
          });
          var marker = new google.maps.Marker({
            position: roeselare,
            map: map
          });
        }
        map.clearOverlays();