
let xhr = new XMLHttpRequest;

xhr.open("GET", " https://thatsthespir.it/api", true)

xhr.onload = function()                 // le onload c'est ce qui refresh la page
{
    if(this.status === 200)
    {
        let result = (JSON.parse(this.responseText));
            let quotes = result.quote;
            let people = result.author;
            let pictures = result.photo;
            let total = result.total_quotes;
            
            document.getElementById("quote").innerHTML = quotes;
            document.getElementById("author").innerHTML = people;
            document.getElementById("photo").src= pictures;
            document.getElementById("quotes").innerHTML = total + " quotes ";
    } else {

        alert(" Sorry, your request didn't succeed ! ")
    }
}

xhr.send();
