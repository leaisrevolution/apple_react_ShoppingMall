/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Data from './data';
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

    let [shoes, setShoes] = useState(Data); //shoes 안에 Data 컴포넌트를 넣어줌
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Lea's Shopping Mall</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as ={Link} to="/">Home</Nav.Link>
                <Nav.Link as ={Link} to="/detail">Detail</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
            </Navbar>


            <Route exact path="/">
                <div className="jumbotron">
                    <div className="content">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p className="subLead">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>

                <div className="container">
                <div className="row">
                    { //shoes 갯수 만큼 map을 돌려주세요.
                        shoes.map((a, i)=>{
                            return <Card shoes={shoes[i]} i={i}/>
                        })
                    }

                    {/* a는 하나하나의 데이터를 의미, i는 반복문 돌 때 0,1,2,3,4 정수 */
                    /*Card shoes={a} = Card shoes[i] */}

                    {/* 아래의 코드를 간단하게 만들기2 (바로 위) */}
                    {/* < Card shoes={shoes[0]} />
                    < Card shoes={shoes[1]} />
                    < Card shoes={shoes[2]} /> */}


                    {/* 아래의 코드를 간단하게 만들기1 (바로 위) */}
                    {/* <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                        <h4>{shoes[1].title}</h4>
                        <p>{shoes[1].content} & {shoes[1].price}</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                        <h4>{shoes[2].title}</h4>
                        <p>{shoes[2].content} & {shoes[2].price}</p>
                    </div> */}
                </div>
                </div>
            </Route>

            <Route path="/detail">
                <Detail shoes={shoes}/>
            </Route>

            {/* <Route path="/detail/:id">
                <Detail shoes={shoes}/>
            </Route> */}
            {/* <Route path="/어쩌구" component={modal}></Route> */}



        </>
    )
}



// 함수로 컴포넌트화

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content} & {props.shoes.price} </p>
        </div>
    )
}


export default App;


// 코드가 길어질 경우, 파일을 생성해 export로 불어와준다.
// export default는 한번만 사용가능, 보통 코드 맨 하단에 사용
// 여러개의 변수를 내보내고 싶을 경우엔 export 옆 {}안에 변수 명을 모두 작성 {nama1, name2}
// export 할 때 사용한 변수를 그대로 import 해줘야 함
// object를 가져올 때는 .을 찍어주면 됨. shoes[0].title
// 부모 컴포넌트 -> 하위 컴포넌트에게 props로 전송.
// props로 전송받은 state 들은 props.state 이런식으로 사용
// 리액트는 서버에서 받아온 데이터를 HTML에 보여주는게 프론트엔드 개발자의 역할


// { //shoes 갯수 만큼 map을 돌려주세요.
//     shoes.map((a, i)=>{
//         return <Card shoes={shoes[i]} i={i}/>
//     })
// }

{/* a는 하나하나의 데이터를 의미, i는 반복문 돌 때 0,1,2,3,4 정수 */
/*Card shoes={a} = Card shoes[i] */}

{/* 아래의 코드를 간단하게 만들기2 (바로 위) */}
{/* < Card shoes={shoes[0]} />
< Card shoes={shoes[1]} />
< Card shoes={shoes[2]} /> */}

{/* 아래의 코드를 간단하게 만들기1 (바로 위) */}
{/* <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
    <h4>{shoes[1].title}</h4>
    <p>{shoes[1].content} & {shoes[1].price}</p>
</div>
<div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
    <h4>{shoes[2].title}</h4>
    <p>{shoes[2].content} & {shoes[2].price}</p>
</div> */}