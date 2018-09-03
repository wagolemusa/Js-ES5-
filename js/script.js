let url = 'https://dairyapp.herokuapp.com/api/v2/all_entries'

fetch ( url )
    .then( function ( response ){
        return response.json();
    })
    .then ((data) => {
        console.log( data );
        let jsonData = JSON.stringify(data);
        console.log(data);

        let output = document.getElementById('output');
        output.textContent = jsonData;
    })
    .catch((err) => {
        console.log('ERROR: ', err.message);
    })