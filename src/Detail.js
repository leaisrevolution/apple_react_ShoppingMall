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

    useEffect(() => {
        //2초 후에 alert창을 안보이게 해주세요
        setTimeout(() => {
            
        }, 2000)
    });

    let { id } = useParams();
    let history = useHistory();
    return (
        <div className="container">
            {/* <box>
                <minititle className="red">Detail</minititle>
            </box> */}
            <div className="my-alert">재고가 얼마 남지 않았습니다.</div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h4 className="pt-5">{props.shoes[0].title}</h4>
                            <p>{props.shoes[0].content}</p>
                            <p>{props.shoes[0].price}원</p>
                            <button className="btn btn-danger">주문하기</button>
                            &nbsp;
                            {/* <button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> */}
                        </div>
                    </div>
                </div>
    );
};

export default Detail;

//useHistory = 이동한 URL 페이지를 모든 담은 오브젝트(방문기록)
//history.goBack(); = 뒤로가기
//history.push('/'); = 원하는 경로로 이동
//중요한 데이터는 App()에서 관리하는게 정석
//useParams 안에는 오브젝트 자료형이 생긴다({}).
//useEffect는 컴포넌트가 mount 되었을 때, update될 때 특정 코드를 실행할 수 있음