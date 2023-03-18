let movieNameRef=document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

//function to fetch data from api
const key = "d7bf2839"
let getMovie=()=>{
    let movieName=movieNameRef.value;
    let url=`http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    //If input field is empty
    if(movieName.length<=0){
        result.innerHTML=`<h3 class="msg">Please enter a movie name</h3>`;
    }else{
        //If input isn't empty
        fetch(url).then((resp)=>resp.json())
        .then((data)=>{
            // console.log(data)
            if(data.Response=="True"){
                result.innerHTML=`
                    <div class="info">
                        <img src=${data.Poster} class="poster"/>
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating" >
                                <img src="Assets/icons8-star-filled-96.png" class="poster" />
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot : </h3>
                    <p>${data.Plot}</p>
                    <h3>Cast : </h3>
                    <p>${data.Actors}</p>
                `;
            }
            else{
                //If movie doesn't exist
                result.innerHTML=`<h3 class="msg">${data.Error}</h3>`;
            }
        }).catch(error=>{
            result.innerHTML=`<h3 class="msg">${error.message}</h3>`;
        })
    }
};

searchBtn.addEventListener('click',getMovie)
window.addEventListener('load',getMovie)