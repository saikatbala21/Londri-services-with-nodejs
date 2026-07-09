function scrollToSection() {
    const section = document.getElementById('services-link');
    window.scrollBy({
        top:1000,
        behavior: 'smooth'

            
    });
   
}

function addToCart1() {
     const items1= document.getElementById("btn3");
     const item1= document.getElementById("no-items");
        if (item1.innerHTML === "") {
            item1.innerHTML = "<p style='border-bottom: 0.5px solid gray ; padding: 4px;'>Dry Cleaning    <span style='padding-left: 8.2rem;'>Price: <span style='padding-left: 0.5rem;'>200</span></p>"; 
            item1.removeAttribute("removed");
        } else {
            item1.innerHTML = "";
            item1.setAttribute("removed", "true");
        }
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";
   
    calculateTotal()    
}
function addToCart2() {
    const item= document.getElementById("btn4");
    const item2= document.getElementById("no-items1");
       if (item2.innerHTML === "") {
           item2.innerHTML = "<p style='border-bottom: 0.5px solid gray; padding: 4px;'>Washing & Fold    <span style='padding-left:100px;'>Price: <span style='padding-left: 0.4rem;'>100</span></p>"; 
           item2.removeAttribute("removed");
       } else {
           item2.innerHTML = "";
           item2.setAttribute("removed", "true");
       }
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";    
    calculateTotal()   
}   
function addToCart3() {
    const item= document.getElementById("btn5");
    const item1= document.getElementById("no-items2");
        if (item1.innerHTML === "") {
            item1.innerHTML = "<p style='border-bottom: 0.5px solid gray; padding: 4px;'>Ironing    <span style='padding-left: 10.3rem;'>Price: <span style='padding-left: 0.5rem;'>30</span></p>"; 
            item1.removeAttribute("removed");
        } else {
            item1.innerHTML = "";
            item1.setAttribute("removed", "true");
        }
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";
    
    calculateTotal()    
}
function addToCart4() {
    const item= document.getElementById("btn6");
    const item1= document.getElementById("no-items3");
        if (item1.innerHTML === "") {
            item1.innerHTML = "<p style='border-bottom: 0.5px solid gray; padding: 4px;'>Stain Removal    <span style='padding-left: 7.5rem;'>Price: <span style='padding-left: 0.5rem;'>500</span></p>";
            item1.removeAttribute("removed");
        } else {
            item1.innerHTML = "";
            item1.setAttribute("removed", "true");
        } 
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";

    calculateTotal()    
    
}            
function addToCart5() {
    const item= document.getElementById("btn7");
    const item1= document.getElementById("no-items4");
       if (item1.innerHTML === "") {
             item1.innerHTML = "<p style='border-bottom: 0.5px solid gray; padding: 4px;'>Leather Suit Cleaning    <span style='padding-left:5rem;'>Price: <span style='padding-left: 0.5rem;'>999</span></p>";
             item1.removeAttribute("removed");
        } else {               
             item1.innerHTML = "";
             item1.setAttribute("removed ", "true");
        } 
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";  
    calculateTotal()
}
function addToCart6() {
    const item= document.getElementById("btn8");
    const item1= document.getElementById("no-items5");
         if (item1.innerHTML === "") {  
            item1.innerHTML = "<p style='border-bottom: 0.5px solid gray; padding: 4px;'>Wedding Dress Cleaning    <span style='padding-left: 4rem;'>Price: <span style='padding-left: 0.4rem;'>2800</span></p>";
            item1.removeAttribute("removed");
        } else {
            item1.innerHTML = "";
            item1.setAttribute("removed", "true");
        }       
    const remove1= document.getElementById("remove");
    remove1.innerHTML="";  
    calculateTotal()
}



function calculateTotal() {
    let totalAmount = 0;
    const item1 = document.getElementById("no-items");      
    const item2 = document.getElementById("no-items1");
    const item3 = document.getElementById("no-items2");
    const item4 = document.getElementById("no-items3");
    const item5 = document.getElementById("no-items4");
    const item6 = document.getElementById("no-items5"); 
         if (item1.innerHTML !== "") {
            totalAmount += 200;
        }
        if (item2.innerHTML !== "") {
            totalAmount += 100;
        }
        if (item3.innerHTML !== "") {
            totalAmount += 30;
        }
        if (item4.innerHTML !== "") {
            totalAmount += 500;
        }
        if (item5.innerHTML !== "") {
            totalAmount += 999;
        }
        if (item6.innerHTML !== "") {
            totalAmount += 2800;
        }
        const totalElement = document.getElementById("totalV");
        totalElement.innerText = `Total: ${totalAmount}`;  
        totalElement.style.paddingLeft = "10px";
        totalElement.style.wordSpacing = "12rem";


           
    }
   
    
