const mainnav = document.querySelector(".navigation");
const humbutton = document.querySelector("#menu");
const homeLink = document.getElementById("home");
const eventsLink = document.getElementById("events");
const contactsLink = document.getElementById("contacts");

const main = document.getElementById("main");
const moreText = document.querySelectorAll(".hide");






const events = [
    {
        name: "Halloween Dance Battle",
        date: "2005, August, 7",
        discription: "Halloween Dance Battles is a segment in which characters from The Next Step dress up in Halloween costumes and face each other in a dance battle.",
        img: "https://i.ytimg.com/vi/3RAAqiZS3FA/maxresdefault.jpg"
    },
    {
        name: "Toronto Dance Battle",
        date: "2005, August, 7",
        discription: "Break dancing, energetic form of dance, fashioned and popularized by African Americans and Latinos, that includes stylized footwork and athletic moves such as back spins or head spins. Break dancing originated in New York City during the late 1960s and early ’70s, incorporating moves from a variety of sources, including martial arts and gymnastics.",
        img: "https://cdn.blackpoolgrand.co.uk/app/uploads/2020/01/Jinjo17_Credit_Belinda_Lawley-1.jpg"
    },
    {
        name: "Halloween Dance Battle",
        date: "2005, August, 7",
        discription: "Hip hop dance is a range of street dance styles primarily performed to hip hop music or that have evolved as part of hip hop culture. It is influenced by a wide range of styles that were created in the 1970s and made popular by dance crews in the United States. The television show Soul Train and the 1980s films Breakin', Beat Street, and Wild Style showcased these crews and dance styles in their early stages; therefore, giving hip-hop dance mainstream exposure.",
        img: "https://cdn.omahaschoolofmusicanddance.com/wp-content/uploads/2019/07/11143459/hiphop.jpg"
    },


]

const eventsCard = (array) =>{
    array.forEach(element => {
    let div = document.createElement("div");
    div.className = "div_card"
    let img = document.createElement("img");
    img.src = element.img;
    img.className = "card"
    img.loading = "lazy";
    let p = document.createElement("p");
    p.innerHTML = element.discription.slice(0, 100);
    let spanShowMore = document.createElement("a");
    spanShowMore.href = "#"
    spanShowMore.id = "show_more";
    spanShowMore.className = "view";
   
    spanShowMore.innerHTML = " Learn more...";
    let spanShowLess = document.createElement("a");
    spanShowLess.href = "#"
    spanShowLess.id = "show_less";
    spanShowLess.className = "hide";
   
    spanShowLess.innerHTML = " Show less ...";
    let spanMoreText = document.createElement("span");
    spanMoreText.innerHTML = element.discription.slice(100);
    spanMoreText.id = "more_text";
    
    spanMoreText.className = "hide";
    spanShowMore.addEventListener('click', ()=>{
        //console.log('hi');
        spanShowMore.classList.toggle('view');
        spanMoreText.classList.toggle('view');
        spanShowLess.classList.toggle('view');

     })
     spanShowLess.addEventListener('click', ()=>{
        spanShowMore.classList.toggle('view');
        spanMoreText.classList.toggle('view');
        spanShowLess.classList.toggle('view');
     })

    //  spanShowLess.addEventListener('click', ()=>{
    //     //console.log('hi');
    //     spanShowMore.classList.toggle('hide');
    //     spanMoreText.classList.toggle('hide');
    //     spanShowLess.classList.toggle('hide');

    //  })

    
   
    p.appendChild(spanShowMore);
    p.appendChild(spanMoreText);
    p.appendChild(spanShowLess);

    div.appendChild(img);
    div.appendChild(p);
    main.appendChild(div);
    
        
    });

}
const loadContactParagraph = () =>{
    let div = document.createElement('div');
    div.id = "div_contacts";
    let h2 = document.createElement('h2');
    h2.innerHTML = "Meet Us";
    let phone = document.createElement('div');
    phone.className = "contacts_card"
    let icon_phone = document.createElement('img');
    icon_phone.src = "assets/phone.svg";
    icon_phone.className = "contacts_icon";
    let p_phone = document.createElement('p');
    p_phone.innerHTML = "+99999999";

    let mail = document.createElement('div');
    mail.className = "contacts_card"
    let icon_mail = document.createElement('img');
    icon_mail.src = "assets/mail.svg";
    icon_mail.className = "contacts_icon";
    let p_mail = document.createElement('p');
    p_mail.innerHTML = "contacts@gmail.com";


    let address = document.createElement('div');
    address.className = "contacts_card"
    let icon_address = document.createElement('img');
    icon_address.src = "assets/location.svg";
    icon_address.className = "contacts_icon";
    let p_address = document.createElement('p');
    p_address.innerHTML = "104555 Steels Ave";

    main.appendChild(div);
    div.appendChild(h2);
    div.appendChild(phone);
    div.appendChild(mail);
    div.appendChild(address);

    phone.appendChild(icon_phone);
    phone.appendChild(p_phone);

    mail.appendChild(icon_mail);
    mail.appendChild(p_mail);

    address.appendChild(icon_address);
    address.appendChild(p_address);


    
    



}

const loadForm = () =>{
    let h2 = document.createElement('h2');
    h2.innerHTML = "Contact Us";
    let div = document.createElement('div');
    div.id = "div_form";
    let form = document.createElement('form');
    let input_name = document.createElement('input');
    input_name.type = "text";
    input_name.id = "name";
    input_name.placeholder = " First name"
    let lable_name = document.createElement('lable');
    lable_name.innerHTML = "Name: </br>"
    lable_name.appendChild(input_name);
    let input_email = document.createElement('input');
    input_email.type = "email";
    input_email.id = "email";
    input_email.placeholder = " Your Email Address"
    let lable_email= document.createElement('lable');
    lable_email.innerHTML = "Email: </br>"
    lable_email.appendChild(input_email);
    let input_text = document.createElement('textarea');
    input_text.id = "text_area";
    let lable_text= document.createElement('lable');
    lable_text.innerHTML = "Enter your message here...</br>"
    lable_text.appendChild(input_text);
    let input_btn = document.createElement('btn');
    input_btn.type = "submit";
    input_btn.id = "input_btn";
    input_btn.innerHTML = "Send"

    input_btn.addEventListener('click', ()=>{
        storeMessage();
    })
    form.appendChild(lable_name);
    form.appendChild(lable_email);    
    form.appendChild(lable_text);
    form.appendChild(input_btn);
    div.appendChild(h2);
    div.appendChild(form);
    main.appendChild(div);
    
    

}

const storeMessage = () =>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let text = document.getElementById('text_area');

    let message = {
        user_name: name.value,
        user_email: email.value,
        user_text: text.value,
    }

    let messages = localStorage.getItem('messages');
        let arrayMessages = [];
        if(messages != null){
             //Parse data and modify it into the array
             let parsedArray = JSON.parse(messages);
             //new array assigned to an array from the localStorage
             arrayMessages = parsedArray;
           }
        
         //Push new note into the array
         arrayMessages.push(message);
         //Turn array into the String because Local Storage keep  it as a string
        let stringarrayMessages = JSON.stringify(arrayMessages);
    
         //Add new string into a localStorage   
        localStorage.setItem('messages', stringarrayMessages);
         
        console.log(stringarrayMessages);


}


const loadHomePage = () => {
    let h2 = document.createElement("h2");
    h2.innerHTML = "Dance to the Rhythm of Your Heartbeat..."
    let picture = document.createElement("picture");
    let source1 = document.createElement("source");
    let source2 = document.createElement("source");
    source1.srcset = "images/large.webp";
    source2.srcset = "images/medium.webp";
    source1.media = "(min-width: 1000px)";
    source2.media = "(min-width: 500px)";
    let img = document.createElement("img");
    img.src = "images/small.webp";
    img.alt = "dancer";
    img.style.width = "750";
    img.style.height = "750";
    let symbol = document.createElement("img");
    symbol.src = "images/disk.png";
    symbol.className = 'symbol';
    let p = document.createElement("p");
    p.innerHTML = "Step into our vibrant dance studio where every movement is a masterpiece and every beat ignites the soul. With mirrored walls reflecting the passion of dancers and the infectious rhythm of music, our space is alive with energy and creativity. Guided by experienced instructors, dancersof all levels find themselves immersed in a world of classical ballet, sultry salsa, lively hip-hop, and intricate ballroom.Here, laughter mixes with determination, fostering a supportive community where every dancer thrives. Join us in this sanctuary of expression and connection, where dreams take flight and every step is a celebration of the human spirit. Welcome to our dance family."
    p.id = "text";
    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(img);
    main.appendChild(h2);
    main.appendChild(picture);
    main.appendChild(symbol);
    main.appendChild(p);

}

humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})

eventsLink.addEventListener('click', ()=>{
    main.innerHTML = "";
    eventsCard(events);
})

contactsLink.addEventListener('click', ()=>{
    main.innerHTML = "";
    loadContactParagraph();
    loadForm();
})
homeLink.addEventListener('click', ()=>{
    main.innerHTML = "";
    loadHomePage();
})


loadHomePage();



