import { drawProducts } from "./drawProducts.js";
import { params } from "./variable.js";

drawProducts();

//search
const inPutSeacrh = document.querySelector("#search input");
const buttonSeacrh = document.querySelector("#search button");
const search = () => {
    params.q = inPutSeacrh.value;
    drawProducts();
};
buttonSeacrh.addEventListener("click", function () {
    search();
});

inPutSeacrh.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Enter") {
        search();
    }
});
//end search
// filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
    console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc"
        default:
            break;
    }
    drawProducts();
});
//end filter
// pagination
const pagiPrev = document.querySelector("#paginationpre");
const pagiNext = document.querySelector("#paginationnext");
const paginumber = document.querySelector("#paginationnumber");
pagiPrev.addEventListener("click", function () {
    if (params.page > 1) {
        params.page = params.page - 1;
        paginumber.innerHTML = params.page;
        drawProducts();
    }
});
pagiNext.addEventListener("click", function () {
    params.page = params.page + 1;
    paginumber.innerHTML = params.page;
    drawProducts();
});

//end pagination