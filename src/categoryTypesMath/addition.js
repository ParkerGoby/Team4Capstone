import * as React from 'react';
import { Link } from 'react-router-dom';



export function Addition() {
    return (
        <>

        <div className="title-container">        
            <div className="container-fluid">
                <div className="row">
                <div className="col-xs-1 text-center"><h1>Addition Levels</h1></div>
                </div>
            </div>
            </div>
            <div class="container-thing">
        <div className="row">
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
            {/* <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/counting">Counting</Link></a> */}
                <h5 className="card-title">Level 1</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none'}} to="/levels/quizzes/additionQuiz">Level 1</Link></a>
         
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Level 4</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Level 2</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href='#' className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none'}} to="/question1">Level 2</Link></a>
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Level 5</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Level 3</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="cardCont1">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Level 6</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Addition
