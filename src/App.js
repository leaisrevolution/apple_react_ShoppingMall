import React, {useState} from 'react';
import './App.css';


// React는 class대신 className을 사용한다.
// 서버에서 가져온 데이터를 바인딩(HTML에 넣음)이 매우 쉽다 -> 그래서 리액트를 씀
// src, id, href 등 속성에도 {변수명, 함수} 사용 가능
// style 사용시 {} 중괄호로 사용, CamelCase 사용 (변수에 넣어서도 사용 가능)
// useState [a(데이터), b(수정하기 위한 함수)] 변수 대신 사용하는 데이터 저장공간
// var [a, b] = [10, 100] a는 10, b는 100
// state를 사용하는 이유는? 웹이 App처럼 동작하게 만들고 싶어서 사용(재렌더링) 새로고침X


function App() {

    let stylePosts = { color : 'blue', fontSize : '30px'}
    let [title, setTitle] = useState(['남자 코드 추천', '강남 우동 맛집']);

    return (
        <div className="App">
            <div className="black-nav">
                <div style={stylePosts}> 레아의 Blog</div>
            </div>
            <div className="list">
                <h3>{title}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[1]}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
