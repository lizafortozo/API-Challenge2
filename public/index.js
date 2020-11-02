let baseurl = "https://api.giphy.com/v1/gifs/search?q=";
let key = "Ztg4nr06u7HaKeygmhrnaj9OYxc2EX6x"
let url ;
 const searchForm = document.querySelector('form');
 const searchTerm = document.querySelector('.search');

 searchForm.addEventListener('submit', fetchResults);
  
function fetchResults(e) {
    console.log(e);
    e.preventDefault(); 

  url = baseurl + searchTerm.value + "&api_key=" + key + "&limit=1" ;
  console.log("URL:", url);
  console.log(searchTerm.value);

fetch(url)
.then(function(result) {
    return result.json(); 
  })
  .then(function(json) {
    console.log(json)
    display_results(json);
}
)}
    function display_results(json){
        let results = json
        console.log(json)
        console.log(results)
        let gif = document.createElement('gif');
        let img = document.createElement('img');
        let fc = document.createElement('figcaption');
        img.src = results.data[0].images.downsized.url;
        console.log(img.src)
        img.alt = results.data[0].title;
        fc.textContent = results.data[0].title;
        gif.appendChild(img);
        gif.appendChild(fc);
        let display = document.querySelector(".display")
        display.insertAdjacentElement('afterbegin',gif);
        document.querySelector('.search').value = "";
    }
    