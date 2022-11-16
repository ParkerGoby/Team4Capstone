import * as React from 'react';
import { Link } from 'react-router-dom';

var categoryType

export function Category() {

    function clickHandler(typeSelection) {
        categoryType = typeSelection
    }

    return (
        <>
            <div class="title-container">        
            <div class="container-fluid">
                <div class="row">
                <div class="col-xs-1 text-center"><h1>Categories</h1></div>
                </div>
            </div>
            </div>
        
        <div class="container-thing">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card" >
                    <img src={require("./assets/counting.jpg")} class="card-img-top" alt="Counting" width="50" height="250"></img>
                    <div class="card-body">
                        <h5 class="card-title">Counting</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <button class="btn btn-primary" onClick={clickHandler(0)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Counting</Link></button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={require("./assets/multiplication.png")} class="card-img-top" alt="Multiplication" width="50" height="250"></img>
                    <div class="card-body">
                        <h5 class="card-title">Multiplication</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <button class="btn btn-primary" onClick={clickHandler(1)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Multiplication</Link></button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Addition</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        <button class="btn btn-primary" onClick={clickHandler(2)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Addition</Link></button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Division</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <button class="btn btn-primary" onClick={clickHandler(3)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Division</Link></button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Subtraction</h5>
                        { /* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        <button class="btn btn-primary" onClick={clickHandler(4)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Subtraction</Link></button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fractions</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <button class="btn btn-primary" onClick={clickHandler(5)}><Link style={{color: 'white',textDecoration: 'none' }} to="/categoryTypes/categoryMath" 
                        state={{ from: categoryType }}>Fractions</Link></button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </>
      );
}

export default Category