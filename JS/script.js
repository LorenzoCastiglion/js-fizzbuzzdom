

// Ciclo fizz buzz
    fbz = document.getElementById("fbz");

// ciclo 100 numeri
    for (let i = 1; i < 101; i++) {
        
        let newElement = document.createElement('div');

        // condizione divisibilità per 3 e per 5
        if (i % 15 == 0 ) {
            newElement.className = "fizzbuzz"
            newElement.textContent = "fizzBuzz";
        } 
        
        // condizione divisibilità per 3
         else if (i % 3 == 0){
            newElement.textContent = "Fizz";
            newElement.className = "fizz"
         }
    
        //  condizione divisibilità per 5
         else if(i% 5 == 0){
    
            newElement.textContent = "Buzz";
            newElement.className = "buzz"
         }
    
        //  condizioni restanti
         else{
            
            newElement.textContent = i;
         }

         //inserisco l'elemento in coda al contenitore #fbz
        fbz.append(newElement);
        

    };






