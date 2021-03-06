<h1>CodingApple react</h1>
<h3>Shppping Mall Web Site Project</h3>
<h3>Project goals</h3>
<ul>
    <li>React의 기본 개념을 익히며 React를 이용하여 Shopping Mall Web Site를 만들어보자</li>
</ul>
<h3>Todo list</h3>
<h4>Part1 (블로그 기능구현) </h4>
    <ul>
        <li>JSX를 이용하여 HTML 페이지 제작하기</li>
        <li>State에 데이터 저장하기</li>
        <li>버튼 기능 개발하기</li>
        <li>블로그 굴 수정버튼 만들기</li>
        <li>Component만들기(div를 한단어로 줄이기) -> 함수로 대체</li>
        <li>클릭하면 동작하는 모달창 만들기</li>
        <li>Map을 이용하여 div을 반복문으로 줄이기</li>
        <li>Props 사용하기</li>
        <li>Props 응용하기</li>
        <li>Input1 사용자가 입력한 글 변수에 저장하기</li>
        <li>Input2 블로그 글발행 기능 만들기</li>
        <li>Class를 이용한 React 문법</li>
    </ul>
<h4>Part1 important point</h4>
    <ul>
        <li>React는 class대신 className을 사용한다.</li>
        <li>서버에서 가져온 데이터를 바인딩(HTML에 넣음)이 매우 쉽다 -> 그래서 리액트를 씀</li>
        <li>src, id, href 등 속성에도 {변수명, 함수} 사용 가능</li>
        <li>style 사용시 {} 중괄호로 사용, CamelCase 사용 (변수에 넣어서도 사용 가능)</li>
        <li>useState [a(데이터), b(수정하기 위한 함수)] 변수 대신 사용하는 데이터 저장공간</li>
        <li>var [a, b] = [10, 100] a는 10, b는 100</li>
        <li>state를 사용하는 이유는? 웹이 App처럼 동작하게 만들고 싶어서 사용(재렌더링) 새로고침X</li>
        <li>{} 안에 들어갈 수 있는것은 함수만 가능</li>
        <li>state 값을 변경하는것은 권장하지 않음, state 함수 사용하여 변경</li>
        <li>deep copy 를 이용하여 값을 변경해준다. 리액트는 immutable data라는 원칙을 갖고 있음. [...변수명] = copy본</li>
        <li>return안에는 하나의 HTML 태그만 사용 가능</li>
        <li>컴포넌트를 만들 때는 대문자로 만들어야함</li>
        <li>반복적으로 사용되는 HTML, 자주 변경되는 HTML UI, 하나의 페이지를 만들 때 Component를 만드는게 좋다</li>
        <li>상위 Component에서 만든 state를 사용하려면 props를 사용해야 한다</li>
        <li>리액트에서는 if문을 사용할 수 없다. 삼항연산자(?,true:false)를 이용해야 한다</li>
        <li>리액트에서 UI를 만들 때는 State 데이터를 이용해야 한다</li>
        <li>state는 UI의 상태도 저장이 가능하다</li>
        <li>!기호는 true일 때는 false로 바꿔주고, false일 때는 true로 바꿔준다.</li>
        <li>for문 대신 map()를 이용하여 반복문을 사용한다</li>
        <li>부모 Component -> 자식 Component state 전송 시 작명={작명} or 자식 Component에 props. props.(state 이름)</li>
        <li>함수의 두번째 파라미터는 반복문이 돈다</li>
        <li>map()으로 반복문을 돌린 HTML은 key={}가 필요하다</li>
        <li>unshift() : array 맨 앞에 자료를 추가해주는 문법</li>
        <li>class는 변수와 함수의 덩어리</li>
    </ul>

<h4>Part2 (쇼핑몰 기능구현) </h4>
    <ul>
        <li>프로젝트 생성 및 Bootstrap 설치</li>
        <li>레이아웃 디자인</li>
        <li>import, export 사용하기</li>
        <li>Component를 이용한 반복문</li>
        <li>React Router 1</li>
        <li>React Router 2 Link, Switch, history</li>
        <li>styled-components를 이용한 CSS스타일링</li>
        <li>SASS 문법 정리</li>
        <li>useEffect</li>
        <li>Ajax</li>
    </ul>

<h4>Part2 important point</h4>
    <ul>
        <li>코드가 길어질 경우, 파일을 생성해 export로 불어와준다.</li>
        <li>./ : 현재 경로</li>
        <li>export default는 한번만 사용가능, 보통 코드 맨 하단에 사용</li>
        <li>여러개의 변수를 내보내고 싶을 경우엔 export 옆 {}안에 변수 명을 모두 작성 {nama1, name2}</li>
        <li>export 할 때 사용한 변수를 그대로 import 해줘야 함</li>
        <li>object를 가져올 때는 .을 찍어주면 됨. shoes[0].title</li>
        <li>리액트는 서버에서 받아온 데이터를 HTML에 보여주는게 프론트엔드 개발자의 역할</li>
        <li>데이터 반복문, 축약하는 방법은 코드 안에 주석으로 자세히 설명해 둠</li>
        <li><Route exact path="/">에서 하나의 페이지만 보여주고 싶을 땐 path앞에 exact</li>
        <li>useHistory = 이동한 URL 페이지를 모든 담은 오브젝트(방문기록)</li>
        <li>history.goBack(); = 뒤로가기</li>
        <li>history.push('/'); = 원하는 경로로 이동</li>
        <li>Switch 중복 매칭을 </li>
        <li>중요한 데이터는 App()에서 관리하는게 정석(국롤) </li>
        <li>useEffect는 컴포넌트가 mount 되었을 때, update될 때 특정 코드를 실행할 수 있음 </li>
        <li>useEffect를 특정 코드가 사라질 때 실행하고 싶다면 return 뒤에 코드 작성(unmount) </li>
        <li>useEffect [] 안에는 useEffect가 실행될 조건을 넣어준다 (state) </li>
        <li>useEffect [] 안에 넣은 조건이 업데이트될 때만 실행해달라, 안을 비워두면 페이지 로드 됐을 때 1번만 실행 []는 조건문이라고 보면 됨 </li>
        <li>setTimeout()를 사용할 때 return () => {clearTimeout(timer)}를 할 때 사용해주면 버그를 방지할 수 있다 </li>
        <li>Ajax : 서버에 새로고침 없이 요청을 할 수 있게 도와줌 </li>
        <li>JSON -> 오브젝트X, axios로 JSON을 가져오면 Object로 가져옴 </li>
        <li>중요한 데이터는 상위컴포넌트에 보관 </li>
    </ul>




<h4>Part3 (실무에 필요한 부가내용)</h4>
    <ul>
        <li></li>
    </ul>

<h4>Part3 important point</h4>
    <ul>
        <li>React.createContext() : 같은 변수값을 공유할 범위를 생성</li>
    </ul>



<h3>Project Issue</h3>
    <ul>
        <li></li>
    </ul>


<h3>Reference</h3>
    <ul>
        <li></li>
    </ul>