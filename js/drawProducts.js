import { API_PRODUCTS } from "./constant.js";
import { fetchApi } from "./fetchApi.js";
import { params } from "./variable.js";

const products = document.querySelector("#products");

export const drawProducts = () => {
    let category="";
    if(params.category!=""){
        category=`category=${params.category}`;
    }
    const api = `${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&${category}`;

    fetchApi(api)
    .then((data) => {
            let htmls = data.map((item) => {
                return `
        <div class="product_item">
            <div class="product_img">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="product_percent">
                ${item.discountPercentage}%
                </div>
            </div>
            <div class="product_content">
                <h3 class="product_title">
                ${item.title}
                </h3>
                <div class="product_meta">
                    <div class="product_price">
                    ${item.price}$
                    </div>
                    <div class="product_stock">
                    ${item.stock} sp
                    </div>
                </div>
            </div>
        </div>
        `;
            })
            products.innerHTML = htmls.join("");
        })
}