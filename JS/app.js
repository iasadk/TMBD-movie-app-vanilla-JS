//Base Url for authentication
const baseUrl = 'https://api.themoviedb.org/3';
//Api key
const key = '4e18bf3185b3fa8e62f525bea147e62c';
//key url
const keyUrl = 'api_key=4e18bf3185b3fa8e62f525bea147e62c';
//url for trending list
const trendingUrl = '/trending/all/day?api_key=';
//image base url
const imageUrl = 'https://image.tmdb.org/t/p/w500/';
//url for kids shows
const kidsUrl = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=4e18bf3185b3fa8e62f525bea147e62c';
//url for most popular movies

const popularUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e18bf3185b3fa8e62f525bea147e62c';

//getting the trending card element from body
const trendingCard = document.querySelector('.cards-container');
//getting the trending card element from body
const favCard = document.querySelector('.favourite-section .cards-container');

//getting kids section card container
const kidsCard = document.querySelector('.kids .cards-container');




const genre = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


//fetching trends data form API
fetch(baseUrl+trendingUrl+key)
.then(response=>{
    return response.json();
}).then(data=>{
    // console.log(data);
    return getTrendData(data.results);
})


//getting kids shows data from our API
fetch(kidsUrl)
.then(response=>{
    return response.json();
}).then(data=>{
    return getKidsData(data.results);
})


//fetching popular movies data form API
fetch(popularUrl)
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
    return getPopularData(data.results);
})

//getting kids shows data from our API
fetch(kidsUrl)
.then(response=>{
    return response.json();
}).then(data=>{
    return getKidsData(data.results);
})

//getting popular-2 data
fetch('https://api.themoviedb.org/3/discover/movie?api_key=4e18bf3185b3fa8e62f525bea147e62c&page=2')
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
    return getPopularData(data.results);
})

function getTrendData(result){
    let html = "";
    let title,date;
    
    result.forEach((data)=>{
        // console.log(data);
        if(data.title){
            title = data.title;
            date = data.release_date;
        }
        else{
            title = data.name;
            date = data.first_air_date;

        }
        let img_path = imageUrl+data.poster_path;
        html+=`<div class="card-container">
        <div class="card">
            <img src="${img_path}" alt="#">
            <div class="details">
                <div class="general">
                    <h4 class="title">${title}</h4>
                    <p class="release-date">${date}</p>
                </div>
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(241,196,14,1)"/></svg>
                    <p>${data.vote_average}</p>
                </div>
                <div class="overlay_overview">
                    <div>
                    <h3>Overview: </h3>
                    <p>${data.overview}</p>
                    
                    </div>
                    <span><b>Tags: </b> ${genreList(data.genre_ids)}
                    </span>
                </div>
            </div>
            
        </div>
    </div>`;
    
    })
    
    trendingCard.innerHTML = html;
}


function getKidsData(result){
    let html = "";
    let title,date;
    
    result.forEach((data)=>{
        // console.log(data);
        if(data.title){
            title = data.title;
            date = data.release_date;
        }
        else{
            title = data.name;
            date = data.first_air_date;

        }
        let img_path = imageUrl+data.poster_path;
        html+=`<div class="card-container">
        <div class="card">
            <img src="${img_path}" alt="#">
            <div class="details">
                <div class="general">
                    <h4 class="title">${title}</h4>
                    <p class="release-date">${date}</p>
                </div>
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(241,196,14,1)"/></svg>
                    <p>${data.vote_average}</p>
                </div>
                <div class="overlay_overview">
                    <div>
                    <h3>Overview: </h3>
                    <p>${data.overview}</p>
                    
                    </div>
                    <span><b>Tags: </b>${genreList(data.genre_ids)}
                    </span>
                </div>
            </div>
            
        </div>
    </div>`;
    
    })
    
    kidsCard.innerHTML = html;
}

function getPopularData(result){
    let html = "";
    let title,date;
    
    result.forEach((data)=>{
        // console.log(data);
        if(data.title){
            title = data.title;
            date = data.release_date;
        }
        else{
            title = data.name;
            date = data.first_air_date;

        }
        let img_path = imageUrl+data.poster_path;
        html+=`<div class="card-container">
        <div class="card">
            <img src="${img_path}" alt="#">
            <div class="details">
                <div class="general">
                    <h4 class="title">${title}</h4>
                    <p class="release-date">${date}</p>
                </div>
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(241,196,14,1)"/></svg>
                    <p>${data.vote_average}</p>
                </div>
                <div class="overlay_overview">
                    <div>
                    <h3>Overview: </h3>
                    <p>${data.overview}</p>
                    
                    </div>
                    <span><b>Tags: </b>${genreList(data.genre_ids)}
                    </span>
                </div>
            </div>
            
        </div>
    </div>`;
    
    })
    
    favCard.innerHTML = html;
}



function genreList(array){

    let list = [];

    array.forEach(genre_id=>{
        for(index in genre){
            if(genre[index].id == genre_id){
                list.push(genre[index].name);
                // console.log(genre[index].name);
            }
        }
    })
    // console.log(list);

    return list;
}