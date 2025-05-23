const input=document.querySelector('#inputBox')
const buttons=document.querySelectorAll("button")

let str=""
let arr =Array.from(buttons);
arr.forEach(button  =>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML==="="){
        str= eval(str);
        input.value=str;
      }
       else if(e.target.innerHTML =="AC"){
        str="";
        input.value=str;
       }
        
          else if(e.target.innerHTML=="DEL"){
            String = String.substring(0,String.length-1)
            input.value=String;
         }
      else{
       str +=e.target.innerHTML;
      input.value =str; 
      }
    
    })
})

