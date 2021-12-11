import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box = styled.div`
    padding : 20px;
`;
let minititle = styled.h4 `
    font-size : 25px;
    color: ${props => props.coloring}
`; //스타일링 귀속, 다른 컴포넌트와 스타일링 실수방지


function Detail (props) {

    let [alert, setAlert] = useState(true);
    let [inputData, setInputData] = useState();


    useEffect(() => { //detail 컴포넌트가 등장할 때, 업데이트 될 때,

        // axios.get()
        //2초 후에 alert창을 안보이게 해주세요
        let timer = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => {clearTimeout(timer)} //사라질 때 Timeout 제거
    }, []); //[]안에는 useEffect가 실행될 조건을 넣어준다 (state)
    // 안에 넣은 조건이 업데이트될 때만 실행해달라, 안을 비워두면 페이지 로드 됐을 때 1번만 실행 []는 조건문이라고 보면 됨


    let { id } = useParams();
    let history = useHistory();
    return (
        <div className="container">
            {/* <box>
                <minititle className="red">Detail</minititle>
            </box> */}

            {inputData}
            <input onChange={(e)=>{setInputData(e.target.value)}} />
            {
                alert === true
                ? (<div className="my-alert">
                    재고가 얼마 남지 않았습니다.
                    </div>)
                : null
            }

                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h4 className="pt-5">{props.shoes[0].title}</h4>
                            <p>{props.shoes[0].content}</p>
                            <p>{props.shoes[0].price}원</p>

                            <Info stock={props.stock} ></Info>

                            <button className="btn btn-danger"
                                onClick={() => {
                                    props.setStock([9,11,12])}
                                }>주문하기</button>
                            &nbsp;
                            {/* <button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> */}
                        </div>
                    </div>
                </div>
    );
};

function Info(props) {
    return (
        <p>재고 : {props.stock[0]}</p>
    )
}

export default Detail;

//useHistory = 이동한 URL 페이지를 모든 담은 오브젝트(방문기록)
//history.goBack(); = 뒤로가기
//history.push('/'); = 원하는 경로로 이동
//중요한 데이터는 App()에서 관리하는게 정석
//useParams 안에는 오브젝트 자료형이 생긴다({}).
//useEffect는 컴포넌트가 mount 되었을 때, update될 때 특정 코드를 실행할 수 있음