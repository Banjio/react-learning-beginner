import logo from './logo.svg';
import './App.css';

/** 
#### Data Model ####
*/

const DATA_MODEL = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
/** 
function SearchBarBootstrap(){
  //Add bootstrap container and rows/
  return(
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search ..." aria-label="Search-Button" aria-describedby="searchbtn-fruits"></input>
      <input class="form-check-input" type="checkbox" value="" id="showProductsStock" />
  <label class="form-check-label" for="flexCheckDefault">
    Only show products in stock
  </label>
    </div>
  )
}**/

function SearchBarOwnCss(){
  return(
    <div class="search-bar-searchBox">
      <input class="search-bar-searchInput"  type="text" name="" placeholder="Search ..." /> 
      <button class="search-bar-searchButton" href="#">
        <i class="fa fa-search"></i>
      </button>
    </div>
  )
}

export default function FilterableProductTable(){
 return(
   <div>
   <h1><center>My Fruit App</center></h1>
   <SearchBarOwnCss/>
   </div>
 )
}
