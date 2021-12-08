import React, {useState} from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Data from './data';

function App() {

    let [shoes, setShoes] = useState(Data);
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Lea's Shopping Mall</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
            </Navbar>

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
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                        <h4>{shoes[0].title}</h4>
                        <p>{shoes[0].content} & {shoes[0].price} </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                        <h4>{shoes[1].title}</h4>
                        <p>{shoes[1].content} & {shoes[1].price}</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                        <h4>{shoes[2].title}</h4>
                        <p>{shoes[2].content} & {shoes[2].price}</p>
                    </div>
                </div>
            </div>

        </>
    )
}


export default App;


// 코드가 길어질 경우, 파일을 생성해 export로 불어와준다.
// export default는 한번만 사용가능, 보통 코드 맨 하단에 사용
// 여러개의 변수를 내보내고 싶을 경우엔 export 옆 {}안에 변수 명을 모두 작성 {nama1, name2}
// export 할 때 사용한 변수를 그대로 import 해줘야 함
// object를 가져올 때는 .을 찍어주면 됨. shoes[0].title