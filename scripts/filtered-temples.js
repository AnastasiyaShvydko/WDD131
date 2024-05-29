const mainnav = document.querySelector(".navigation");
const humbutton = document.querySelector("#menu");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const smallLink = document.querySelector("#small");
const largeLink = document.querySelector("#large");
const newLink = document.querySelector("#new");
const parent = document.getElementById('temple_figures');

homeLink.addEventListener('click', () =>{
    parent.innerHTML = "";
    creatTempleCard(temples);
})


oldLink.addEventListener('click', () =>{
    let oldLinkArray = temples.filter(temple => Number(temple.dedicated.slice(0, 4) < 1900));

    parent.innerHTML = "";
    creatTempleCard(oldLinkArray);
})
newLink.addEventListener('click', () =>{
    let newLinkArray = temples.filter(temple => Number(temple.dedicated.slice(0, 4) > 2000));

    parent.innerHTML = "";
    creatTempleCard(newLinkArray);
})
smallLink.addEventListener('click', () =>{
    let newLinkArray = temples.filter(temple => Number(temple.area < 10000));
    
    parent.innerHTML = "";
    creatTempleCard(newLinkArray);
})
largeLink.addEventListener('click', () =>{
    let newLinkArray = temples.filter(temple => Number(temple.area > 90000));
    
    parent.innerHTML = "";
    creatTempleCard(newLinkArray);
})



humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Apia Samoa Temple",
        location: "Apia, Pesega, Samoa",
        dedicated: "1983, August, 5",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/1280x800/apia-samoa-temple-lds-460475-wallpaper.jpg"
      },
      {
        templeName: "Belém Brazil Temple",
        location: "Belém, Para, Brazil",
        dedicated: "2022, November, 20",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/1280x800/belem_brazil_temple_exterior2.jpg"
      },
      {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyevo-Sviatoshyns’ky Rayon, Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/1280x800/kyiv-ukraine-temple-lds-774302-wallpaper.jpg"
      },

    // Add more temple objects here...
  ];

const creatTempleCard = (templeArray) =>{
    templeArray.forEach((temple)=>{
   
   
    let figure = document.createElement('figure');
    let element_list = document.createElement('ul');
    element_list.classList = "card";

    let h2_name = document.createElement('h2');
    h2_name.innerHTML = temple.templeName;
    element_list.appendChild(h2_name);
    let li_location = document.createElement('li');
    li_location.innerHTML = `<span class="labele">Location:<span/> ${temple.location}`;
    element_list.appendChild(li_location);
    let li_dedicated = document.createElement('li');
    li_dedicated.innerHTML = `<span class="labele">Dedicated:<span/> ${temple.dedicated}`;
    element_list.appendChild(li_dedicated);
    let li_area = document.createElement('li');
    li_area.innerHTML = `<span class="labele">Size:<span/> ${temple.area}`;
    element_list.appendChild(li_area);
    let img_element = document.createElement('img');
    img_element.src = temple.imageUrl;
    img_element.alt = "temple pic";
    img_element.loading = "lazy";
    figure.appendChild(h2_name);
    figure.appendChild(element_list);
    figure.appendChild(img_element);
    
    parent.appendChild(figure);



  })}

  creatTempleCard(temples);