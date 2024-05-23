let row=5;
for(let i=0; i<row+1;i++){
 
    for(let j=0;j<=i;j++){
        
          if(j==0||j==i){
            
            document.write("*")
          }
          else{  
        
        document.write(j)     
    }
           
    }
  
    document.write("<br>")
  
}

for(let i=row+1; i>=0 ;i--){
 
    for(let j=0;j<=i;j++){
          if(i==0||j==0||j==i){
            document.write("*")
          }
          else{       
        document.write(j)}
          
    }
  

    document.write("<br>")
  
}