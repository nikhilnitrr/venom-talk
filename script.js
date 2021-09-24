var btn=document.querySelector('#btn-primary');
var input=document.querySelector('#input-txt');
var output=document.querySelector('#output');
var url='https://api.funtranslations.com/translate/valyrian.json';


function generateUrl(text)
{
    return url+'?text='+text;
}

function myScript()
{
    fetch(generateUrl(input.value))
    .then(response=>response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(e=>console.log(e))
}

btn.addEventListener('click',myScript);





