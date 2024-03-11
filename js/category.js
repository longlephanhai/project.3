import { API_CATEGORY } from "./constant.js";
import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./fetchApi.js";
import { params } from "./variable.js";
const category=document.querySelector("#category");
fetchApi(API_CATEGORY)
.then(data=>{
    let htmls=data.map(item=>{
        return `
        <div class="category_item" data-category="${item}">
        ${item}
        </div>
        `;
    })
    category.innerHTML=htmls.join("");

    const listCategory=document.querySelectorAll("#category .category_item");
    listCategory.forEach((item)=>{
        item.addEventListener("click",function(){
            params.category=item.getAttribute("data-category");
            drawProducts();
        });
    })
});