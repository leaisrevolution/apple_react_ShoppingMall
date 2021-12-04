import React from 'react';
import './App.css';


// React는 class대신 className을 사용한다.
// 서버에서 가져온 데이터를 바인딩(HTML에 넣음)이 매우 쉽다 -> 그래서 리액트를 씀
// src, id, href 등 속성에도 {변수명, 함수} 사용 가능
// style 사용시 {} 중괄호로 사용, CamelCase 사용 (변수에 넣어서도 사용 가능)


function App() {

    let posts = '강남 고기 맛집';
    let stylePosts = { color : 'blue', fontSize : '30px'}

    return (
        <div className="App">
            <div className="black-nav">
                <div style={stylePosts}> 레아의 Blog</div>
            </div>
            <h4>{posts}</h4>
        </div>
    );
}

export default App;
