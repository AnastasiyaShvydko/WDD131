const btn_submit = document.getElementById('btn_submit');
const products_options = document.getElementById("products");
const date_of_installation = document.getElementById("date_of_installation");
const feature = document.querySelectorAll('input[name="feature"]');
const written_review = document.getElementById("written_review");
const user_name = document.getElementById("user_name");
const rating5 = document.getElementById('fivestar');
const rating4 = document.getElementById('fourstar');
const rating3 = document.getElementById('threestar');
const rating2 = document.getElementById('twostar');
const rating1 = document.getElementById('onestar');
const feature4 = document.getElementById('feature4');
const feature3 = document.getElementById('feature3');
const feature2 = document.getElementById('feature2');
const feature1 = document.getElementById('feature1');
const info_div = document.getElementById('info');




const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];



const addOptions = ()=> {
    products.forEach((element) => {
        let option = document.createElement('option');
        products_options.appendChild(option);
        option.value = element.name;
        option.innerHTML = element.name;
        option.id = element.id
    })
    }

    
btn_submit.addEventListener('click', (event) =>{
    //Prevent form from submitting 
    //event.preventDefault()
    let rating ;
    let feature_value = "";
    if(rating5.checked == true){
        rating = rating5.value;
    }
    else if(rating4.checked == true){
        rating = rating4.value;
    }
    else if(rating3.checked == true){
        rating = rating3.value;
    }
    else if(rating2.checked == true){
        rating = rating2.value;
    }
    else if(rating1.checked == true){
        rating = rating1.value;
    }
    feature.forEach((element) =>{
        if(element.checked == true){
            feature_value += `${element.value}, `;
        }
    })

    // if(feature1.checked == true){
    //     feature += feature1.value;
    // }
    // else if(feature2.checked == true){
    //     feature += feature2.value;
    // }
    // else if(feature3.checked == true){
    //     feature += feature3.value;
    // }
    // else if(feature4.checked == true){
    //     feature += feature4.value;
    // }


    let review = { product_name : products_options.value,
        product_rating : rating,
        product_date_installation : date_of_installation.value,
        product_feature: feature_value ,
        product_written_review: written_review.value,
        user_name: user_name.value,

    }
        
     
    //Get data from localStorage   
    
        let reviews = localStorage.getItem('test');
        let arrayReviews = [];
        if(reviews != null){
             //Parse data and modify it into the array
             let parsedArray = JSON.parse(reviews);
             //new array assigned to an array from the localStorage
             arrayReviews = parsedArray;
           }
        
         //Push new note into the array
        arrayReviews.push(review);
         //Turn array into the String because Local Storage keep  it as a string
        let stringarrayReviews = JSON.stringify(arrayReviews);
    
         //Add new string into a localStorage   
        localStorage.setItem('test', stringarrayReviews);
         
        console.log(stringarrayReviews);

        
    
      
   
   
   
    
       
        

    })

    
  
  addOptions();