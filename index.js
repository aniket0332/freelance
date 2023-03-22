


async function load(){
    var ca = document.getElementById("ca").value;
    var cc = document.getElementById("cc").value;

    
    
    var pa = parseFloat(ca/0.7).toFixed(6);
    var ssc = parseFloat(cc*pa).toFixed(6);
    var fc = parseFloat(0.2*ssc).toFixed(6);
    var coc = parseFloat(ssc + fc).toFixed(6);
    var cs = parseFloat(0.25*coc).toFixed(6);
    var oc = parseFloat(coc + cs).toFixed(6);
    var coct = parseFloat(0.05*oc).toFixed(6);
    var wc = parseFloat(0.1*oc).toFixed(6);
    var tc =parseFloat(oc + coct + wc).toFixed(6);
   
   document.getElementById(`pa`).innerText = await pa;
   document.getElementById(`ssc`).innerText = await "₹ "+ssc;
   document.getElementById(`fc`).innerText = await "₹ "+fc;
   document.getElementById(`coc`).innerText = await "₹ "+coc;
   document.getElementById(`cs`).innerText = await "₹ "+cs; 
   document.getElementById(`oc`).innerText = await "₹ "+oc;
   document.getElementById(`coct`).innerText = await "₹ "+coct;
   document.getElementById(`wc`).innerText = await "₹ "+wc;
   document.getElementById(`tc`).innerText = await "₹ "+tc;  
   
//    show();
  }
 


  function show(){
    
      var elems = document.getElementsByClassName('hide');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'initial';
}
  }
  
  