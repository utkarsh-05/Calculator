  'use strict'
var buttons = document.getElementsByTagName("button");
var display = document.getElementById("display");
// console.log(pres);
// pres[0].addEventListener('click',function(event){
//   console.log('key is pressed and code is',event.keyCode);
// })
var operand1=0;
var operand2;
var operator=null;


for( var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){
      var value = this.getAttribute('data-value');
      // console.log(value);
      if(value=='clear') display.innerText=null;
      else if(value=='+')
      {
        operand1 = display.innerText;
        display.innerText=null;
        operator='+';
      }
      else if(value=='-')
      {
        operand1 = display.innerText;
        display.innerText=null;
        operator='-';
      }
      else if(value=='*')
      {
        operand1 = display.innerText;
        display.innerText=null;
        operator='*';
      }
      else if(value=='/')
      {
        operand1 = display.innerText;
        display.innerText=null;
        operator='/';
      }
      else if(value=='sign')
      {
        var s='-';
        var num = parseInt(display.innerText);
        num = (-num)
        display.innerText = num;
      }
      else if(value=='=')
      {
          operand2 = display.innerText;
          if(operator=='+')
          {
            display.innerText= parseFloat(operand1) + parseFloat(operand2);
            operand1= operand2;
            operand2=null;
            operator=null;
          }
          else if(operator=='-')
          {
            display.innerText= parseFloat(operand1) - parseFloat(operand2);
            operand1= operand2;
            operand2=null;
            operator=null;
          }
          else if(operator=='*')
          {     
            display.innerText= parseFloat(operand1) * parseFloat(operand2);
            operand1= operand2;
            operand2=null;
            operator=null;
          }
          else if(operator=='/')
          {
            display.innerText = parseFloat(operand1) / parseFloat(operand2);
            operand1=operand2;
            operator=null;
            operand2=null;
          }
      }
      else 
      {
        display.innerText += value;
      }
    })
}
console.log('value');