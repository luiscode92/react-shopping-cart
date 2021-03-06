//feature 1
import React from 'react';
import data from "./data.json"
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts(event){
    console.log(event.target.value);
  }

  filterProducts(event){
    console.log(event.target.value);
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
            !<--  <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort}ilterProducts={this.filterProducts} sortProducts={this.sortProducts}></Filter>-->
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>Allright is reserved.</footer>
     </div>
    );
  }  
}

export default App;
