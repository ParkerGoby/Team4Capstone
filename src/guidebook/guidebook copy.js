import * as React from 'react';
import { Link } from 'react-router-dom';
import './guidebook.css'


export function Category() {
    return (
        <>
            <div className="title-container"  id="title_container">        
            <div className="container-fluid " >
                <div className="row">
                <div className="col-xs-1 text-center"><h1>Guidebooks</h1><p>Guidebooks are an education resource desgined to facilitate learning</p></div>
                </div>
            </div>
            </div>
        
        <div className="container-thing" id="guidebook_container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" >
                    <img src={require("../assets/counting.jpg")} className="card-img-top" alt="Counting" width="50" height="250"></img>
                    <div className="card-body">
                        <h5 className="card-title">Counting</h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/counting/1">Counting</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={require("../assets/multiplication.png")} className="card-img-top" alt="Multiplication" width="50" height="250"></img>
                    <div className="card-body">
                        <h5 className="card-title">Multiplication</h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/multiplication/1">Multiplication</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Addition</h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/addition/1">Addition</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Division</h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/division/1">Division</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Subtraction</h5>
                        { /* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/subtraction/1">Subtraction</Link></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Fractions</h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/guidebook/fractions/1">Fractions</Link></a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </>
      );
}

export default Category