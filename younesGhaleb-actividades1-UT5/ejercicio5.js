let x = prompt("give me the user name ?");

function eje5(x) {
    if (/[A-Z]/.test(x.charAt(0))) {       
        console.log("first letter uppercase");              
        } else {
            console.log("okey not uppercase");          
        }
    
  }
  eje5(x);
