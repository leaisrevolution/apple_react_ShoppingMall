

import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Detail (props) {

    let { id } = useParams();
    let history = useHistory();
    return (
        <div className="container">
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