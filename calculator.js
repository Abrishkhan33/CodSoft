function btn1(one){
        document.getElementById("show").value += one;
    }

function btn2( two){
    document.getElementById("show").value += two ;
        }
    
function btn3( three){
    document.getElementById("show").value += three ;
        }
        
function btn4( four){
    document.getElementById("show").value += four ;
        }
            
function btn5( five){
     document.getElementById("show").value += five ;
        }
                
function btn6( six){
     document.getElementById("show").value += six ;
        }
                    
function btn7( seven){
     document.getElementById("show").value += seven ;
        }
                        
function btn8( eight){
    document.getElementById("show").value += eight ;
        }

function btn9( nine){
    document.getElementById("show").value += nine ;
        }

function btn0( zero){
    document.getElementById("show").value += zero ;
         }

function btn00( doublezero){
    document.getElementById("show").value += doublezero ;
        }

function btnpoint( point){
    document.getElementById("show").value += point ;
        }

function btnplus( add){
    document.getElementById("show").value += add ;
        } 
                                                
function btnsub( subtract){
    document.getElementById("show").value += subtract ;
        }
                                                    
function btnmul( multiply){
    document.getElementById("show").value += multiply ;
        } 

function btndiv( divide){
    document.getElementById("show").value += divide ;
        }

 function btnclear(){
    document.getElementById("show").value = '';
        }

function btndelete(){
    document.getElementById("show").value = show.value.slice(0, -1) ;
        }

function calculate(){
    var result =document.getElementById("show").value;
    var finalresult = eval(result);
    document.getElementById("show").value = finalresult;
        }
                                          











