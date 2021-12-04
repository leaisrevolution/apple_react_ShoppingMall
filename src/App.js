/* eslint-disable */
import React, {useState} from 'react';
import './App.css';


// React는 class대신 className을 사용한다.
// 서버에서 가져온 데이터를 바인딩(HTML에 넣음)이 매우 쉽다 -> 그래서 리액트를 씀
// src, id, href 등 속성에도 {변수명, 함수} 사용 가능
// style 사용시 {} 중괄호로 사용, CamelCase 사용 (변수에 넣어서도 사용 가능)
// useState [a(데이터), b(수정하기 위한 함수)] 변수 대신 사용하는 데이터 저장공간
// var [a, b] = [10, 100] a는 10, b는 100
// state를 사용하는 이유는? 웹이 App처럼 동작하게 만들고 싶어서 사용(재렌더링) 새로고침X
// {} 안에 들어갈 수 있는것은 함수만 가능
// state 값을 변경하는것은 권장하지 않음, state 함수 사용하여 변경


function App() {

    let stylePosts = { color : 'white', fontSize : '30px'}
    let [title, setTitle] = useState(['레아의 데일리', '예비개발자노트', '회고']);
    let [heart, setHeart] = useState(0); //초기값 0

    return (
        <div className="App">
            <div className="black-nav">
                <div style={stylePosts}> 레아의 Blog</div>
            </div>
            <div className="list">
                <h3>{title[0]} <button onClick={() => {setHeart(heart+1)}}>💙</button> {heart} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[1]} <button>💙</button> 0 </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[2]} <button>💙</button> 1</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
