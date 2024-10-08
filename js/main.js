
const api_url ="https://quotes-api-self.vercel.app/quote";
let quote = document.getElementById('quote')
let author = document.getElementById('author')

async function getapi(url)
{
  const res = fetch(url)
  .then(response => response.json())
  .then(data => {

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  })
  .catch(error => {
    console.error(error);
  });

   
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "------ by " + author.innerHTML 
       , "Tweet Window", "width = 600, height = 300"
    );
}


