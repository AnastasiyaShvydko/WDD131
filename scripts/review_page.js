const info_div_main = document.getElementById('info');
const h2 = document.getElementById('total_review');
//Get data from localStorage    
let reviews = localStorage.getItem('test');
        
        
//Parse data and modify it into the array
    let parsedArray = JSON.parse(reviews);

        h2.innerHTML =  `Total reviews: ${parsedArray.length}`;
       

        const create_info_block = (array)=>{
            array.forEach(info => {
                let info_div = document.createElement('div');
                info_div.classList = "info_block";
                let name_div = document.createElement('div');
                name_div.innerHTML = info.product_name;
                let product_rating_div = document.createElement('div');
                if(info.product_rating == "1"){
                    product_rating_div.innerHTML = "⭐";
                }
                else if(info.product_rating == "2"){
                    product_rating_div.innerHTML = "⭐⭐";
                }
                else if(info.product_rating == "3"){
                    product_rating_div.innerHTML = "⭐⭐⭐";
                }
                else if(info.product_rating == "4"){
                    product_rating_div.content = "⭐⭐⭐⭐";
                }
                else if(info.product_rating == "5"){
                    product_rating_div.innerHTML = "⭐⭐⭐⭐⭐";
                }
                
                let product_date_installation_div = document.createElement('div');
                product_date_installation_div.innerHTML = info.product_date_installation;
                let product_feature_div = document.createElement('div');
                product_feature_div.innerHTML = info.product_feature;
                let product_written_review_div = document.createElement('div');
                product_written_review_div.innerHTML = info.product_written_review;
                let user_name_div = document.createElement('div');
                user_name_div.innerHTML = info.user_name;
                info_div.appendChild(name_div);
                info_div.appendChild(product_rating_div);
                info_div.appendChild(product_date_installation_div);
                info_div.appendChild(product_feature_div);
                info_div.appendChild(product_written_review_div);
                info_div.appendChild(user_name_div);
                info_div_main.appendChild(info_div);
                
            });
            
        }



       
        create_info_block(parsedArray); 
        
          
        console.log(parsedArray);      