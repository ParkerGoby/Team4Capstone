import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Geography</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>History</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Math</Item>
        </Grid>
      </React.Fragment>
    );
  }


  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Science</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Mythology</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>English</Item>
        </Grid>
      </React.Fragment>
    );
  } 

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Item>Temp</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Temp2</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Temp3</Item>
        </Grid>
      </React.Fragment>
    );
  } 

export function Category() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                <div class="col-xs-1 text-center"><h3>Categories</h3></div>
                </div>
            </div>
        
        <div class="contianerthing">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Counting</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
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