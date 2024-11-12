const acceskey = "wwwcfwi2iOt8GjSEU2lZXxH5E86DMgN2XxLAI4kkCbk"
const searchForm = document.getElementById('search-form');
console.log(searchForm)
const searchBox = document.getElementById('search-box');
 console.log(searchBox)
const searchResult = document.getElementById('search-result');
const showMoreBnt = document.getElementById('show-more-btn');

let keyword="";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
     const response = await fetch(url);
     const data = await response.json();
     
      if(page===1){
           searchResult.innerHTML = "";
      }
     const results = data.results;
     results.map((result)=>{
          const image = document.createElement("img");
          image.src = result.urls.small;
          const imageLink = document.createElement("a");
          imageLink.href = result.links.html;
          imageLink.target = "_blank"   // This is used for open the image in new tab
          imageLink.appendChild(image);
          searchResult.appendChild(imageLink);
     })
     showMoreBnt.style.display = "block";

}

searchForm.addEventListener("submit", (e)=>{
     e.preventDefault();
     page = 1;
     searchImages(); 
})


showMoreBnt.addEventListener('click', ()=>{
     page++;
     searchImages();
})
 