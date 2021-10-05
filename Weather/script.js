

var products = [
    { name: 'shirt', price: 40 },
    { name: 'pants', price: 60 },
    { name: 'shoes', price: 80 }
]



$("#showButton").on("click", function () {

    //https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial

    var searchCity = $("#cityInput").val()
    console.log('Seach city ???????', searchCity)



        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ searchCity+ '&appid=bd0834857d11c7c26292f5e1e8657635&units=imperial')
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log('DATA form weather api that we got back!!!',data);

            $("#products").empty()

            var testh1 = $("<h1>")
            var cityName = $('<p>')
            var windSpeed = $('<p>')

            //2 Dress up that html how u like, text, class names ids, whatever u need
            testh1.text('It is ' + data.main.temp + ' degrees outside')
            cityName.text(data.name)
            cityName.addClass('something from bootstrap')
            windSpeed.text('This is the Wind Speed: '+data.wind.speed)
    
    
    
    
            //3 check that HTML on the page with .append() into empty div
            $("#products").append(testh1, cityName, windSpeed)


        });


    // for (let i = 0; i < products.length; i++) {
    //     console.log('i', i)

    //     console.log('Looping products[i]', products[i])

    //     var testh1 = $("<h1>")

    //     //2 Dress up that html how u like, text, class names ids, whatever u need
    //     testh1.text(products[i].name)




    //     //3 check that HTML on the page with .append() into empty div
    //     $("#products").append(testh1)

    //     // console.log('Looping!~!!!')


    // }



})