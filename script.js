var btnReference=document.querySelector('#btn-primary');
var inputReference=document.querySelector('#input-txt');

function myScript(event)
{
    console.log(event.target.value);
}

inputReference.addEventListener('input',myScript);





