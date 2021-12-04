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
// deep copy 를 이용하여 값을 변경해준다. 리액트는 immutable data라는 원칙을 갖고 있음. [...변수명] = copy본
// return안에는 하나의 HTML 태그만 사용 가능


function App() {

    let stylePosts = { color : 'white', fontSize : '30px'}
    let [title, setTitle] = useState(['레아의 데일리', '예비개발자노트', '회고']);
    let [heart, setHeart] = useState(0); //초기값 0
    let [modal, setModal] = useState(false); //첫 로드시 모달창 보이지 않아야해서 기본값을 false로 설정

    // function titleChange() {
    //     let newTitle = [...title]; //원본을 복사해서 사용, 복사한 데이터에 새로운 데이터 넣기 (deep copy, 값 공유 X, 서로 독립적인 값을 가지는 복사)
    //     newTitle[0] = '레아의 프로그래밍 노트'
    //     setTitle(newTitle);
    // }

    return (
        <div className="App">
            <div className="black-nav">
                <div style={stylePosts}> 레아의 Blog</div>
            </div>
            <div className="list">
                <h3>{title[0]} <button onClick={() => {setHeart(heart+1)}}>💙</button> {heart} </h3>
                <p>2월 17일 발행</p>
                {/* <button onClick={titleChange}>클릭</button> */}
                <hr/>
            </div>
            <div className="list">
                <h3>{title[1]} <button>💙</button> 0 </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3 onClick={() => {setModal(true)}}>
                    {title[2]} <button>💙</button> 1</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>

            {
                modal === true
                ? <Modal />
                : null //텅빈 HTML
            }

        </div>
    );
}

// 컴포넌트를 만들 때는 대문자로 만들어야함
// 의미없는 div를 사용하기 싫을 때는 <> </>를 사용
// 반복적으로 사용되는 HTML, 자주 변경되는 HTML UI, 하나의 페이지를 만들 때 Component를 만드는게 좋다
// 상위 Component에서 만든 state를 사용하려면 props를 사용해야 한다
// 리액트에서는 if문을 사용할 수 없다. 삼항연산자(?,true:false)를 이용해야 한다
// 리액트에서 UI를 만들 때는 State 데이터를 이용해야 한다
// state는 UI의 상태도 저장이 가능하다

function Modal() {
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default App;
