import * as React from 'react';




export function Category() {
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
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={require("./assets/multiplication.png")} class="card-img-top" alt="Multiplication" width="50" height="250"></img>
                    <div class="card-body">
                        <h5 class="card-title">Multiplication</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Addition</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Division</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Subtraction</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fractions</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </>
      );
}

export default Category