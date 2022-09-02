
var myInterval
const startProgram = () =>{
    myInterval = setInterval(startwatch, 10);

}

function startwatch()
{
    let ms=document.getElementById('ms') ;
    let msval=parseInt(document.getElementById('ms').value);
    let s=document.getElementById('s');
    let sval=parseInt(document.getElementById('s').value);
    let m=document.getElementById('m');
    let mval=parseInt(document.getElementById('m').value);
    // setInterval( adf = () => {
        
        msval=msval+1;
        if(msval==100){
            msval=00;
           sval=sval+1;
           if(sval<10){
               s.value='0'+sval;
            }
            else{
                s.value=sval;
            }
        }
         if(sval==60){
           sval=00;
           mval=mval+1;
           if(mval<10){
            m.value='0'+mval;
         }
         else{
             m.value=mval;
         }
        }
        ms.value=msval;
       
    //}, 10);
 
}
function lapwatch(){
    let msval=parseInt(document.getElementById('ms').value);
    let sval=parseInt(document.getElementById('s').value);
    let mval=parseInt(document.getElementById('m').value);
    let z = document.createElement("li");
    // z.classList.add("asdf");
    z.innerHTML =  `${mval} : ${sval} : ${msval}<br>`;
    document.getElementById("abc").prepend(z);
    

}
function resetwatch(){
    document.getElementById("ms").value="00";
    document.getElementById("s").value="00";
    document.getElementById("m").value="00";
}
function stopwatch(){
    
    clearInterval(myInterval);
}
