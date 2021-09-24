var btn=document.querySelector('#btn-primary');
var input=document.querySelector('#input-txt');
var output=document.querySelector('#output');

function myScript()
{
    output.innerText=input.value;
}

btn.addEventListener('click',myScript);





