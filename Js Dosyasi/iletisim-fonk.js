

const form = document.getElementById('form');


// form.addEventListener('submit',(e)=> {

//     const email = document.getElementById('exampleFormControlInput1').value;
//     const ad = document.getElementById('exampleFormControlInput2').value;
//     const soyad = document.getElementById('exampleFormControlInput3').value;
//     const mesaj = document.getElementById('exampleFormControlTextarea1').value;
//     if(ad === '' || ad==null){
//         alert('Lütfen adınızı giriniz.');
        
//     }

//     if(soyad === ''|| soyad==null){
//         alert('Lütfen soyadınızı giriniz.');
        
//     }

//     if(email === ''|| email==null){
//         alert('Lütfen emailinizi giriniz.');
        
//     }
//     let emailKontrol = email.includes("@");

//     if(emailKontrol==false){
//         alert("Lütfen mailinizi doğru formda giriniz. '@' yazmayı unutmayınız.");
        
//     }

//     if(mesaj==='' || mesaj==null){
//         alert('Lütfen mesajınızı gönderiniz. Fikirleriniz bizim için çok değerli.')
//     }

    

// })




function handleSubmit(){
    


    const email = document.getElementById('exampleFormControlInput1').value;
    const ad = document.getElementById('exampleFormControlInput2').value;
    const soyad = document.getElementById('exampleFormControlInput3').value;
    const mesaj = document.getElementById('exampleFormControlTextarea1').value;
    

    localStorage.setItem("EMAIL",email);
    localStorage.setItem("NAME",ad);
    localStorage.setItem("SURNAME",soyad);
    localStorage.setItem("MESSAGE",mesaj);

    return false;
}

function formControl(){
    form.addEventListener('submit',(e)=> {

        const email = document.getElementById('exampleFormControlInput1').value;
        const ad = document.getElementById('exampleFormControlInput2').value;
        const soyad = document.getElementById('exampleFormControlInput3').value;
        const mesaj = document.getElementById('exampleFormControlTextarea1').value;
        if(ad === '' || ad==null){
            alert('Lütfen adınızı giriniz.');
            
        }
    
        if(soyad === ''|| soyad==null){
            alert('Lütfen soyadınızı giriniz.');
            
        }
    
        if(email === ''|| email==null){
            alert('Lütfen emailinizi giriniz.');
            
        }
        let emailKontrol = email.includes("@");
    
        if(emailKontrol==false){
            alert("Lütfen mailinizi doğru formda giriniz. '@' yazmayı unutmayınız.");
            
        }
    
        if(mesaj==='' || mesaj==null){
            alert('Lütfen mesajınızı gönderiniz. Fikirleriniz bizim için çok değerli.');
            
        }

            
    
    })

}








