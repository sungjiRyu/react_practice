/* eslint-disable */ // wanning 안보이게 하기
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {


  let post = '역삼 우동 맛집';
  const date = new Date();
  console.log(date);
  console.log(date.getMonth);
  let now = date.getMonth()+1 + '월 ' + date.getDate()+ '일'
  console.log(now)
  // document.querySelector('h4').innerHTML = post;
  // 리액트에서는 jsx 문법 사용(js안에 html 쓸수 있게 해줌)

  // state 리액트에서 자료 잠깐 저장할때
  // a = 자료명  b = state 변경을 도와주는 함수명
  // 왜 state 써야함? 자료가 바껴도 자동으로 html에 재랜더링됨
  let [글제목,글제목변경] = useState(['여자 코트 추천', '남자 코트 추천', '리액트 독학']);
  let [recommend,setRecommend] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [today, setToday] = useState([now,now,now]);

  // map 사용법
  [1,2,3].map(function(a){
    // array의 자료 갯수 만큼 함수의 코드를 실행
    // 함수의 파라미터는 arry 안의 자료
    // return 'a' a를 array에 담아줌(array 자료수 만큼)
    // 파리미터 a, i ==> a는 array 안의 자료, i 는 0부터 증가(자바 for문의 i++)
    return '1233211'
    console.log(a)
  })

  // let num = [1,2];
  // let [a,c] = [1,2];
  //destructuring 문법

  // function 함수(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'white', fontSize : '16px'}}> 블로그임</h4>
      </div>

      <button onClick={function modify(){
        let copy = [...글제목]
        copy[1] = '여자 코트 추천'; //state가 arry/object 이렇게 복사본(shallow copy) 만들어서 변경
        console.log(글제목 == copy);
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        let sort = copy.sort();
        console.log(sort);
        글제목변경(sort)
      }}>sorting</button>

    
        {/* <h4 onClick = {modal == true ? ()=> {setModal(false)} : ()=> {setModal(true)}}>{글제목[2]}</h4> */}

      {
        글제목.map(function(a, i){
          return <div className = "list" key={i}  >

          <h4 onClick = {()=>{ 
            setModal(!modal);
            setTitle(i)
          }}>{a}
            <span onClick={()=>{ let copy = [...recommend];
              copy[i] = copy[i] + 1;
              setRecommend(copy)
              }}>👍</span>{recommend[i]}

              <span onClick={()=>{ let copy = [...recommend];
                copy[i] = copy[i] - 1;
                setRecommend(copy)
                }}>👎</span>
          </h4>
          <p>{today[i]} 발행</p>
          <button onClick={()=>{
            let copy = [...글제목]
            copy.splice(i,1);
            글제목변경(copy);
            let copyRecomend = [...recommend]
            copyRecomend.splice(i,1);
            setRecommend(copyRecomend);
            let copyToday = [...today]
            copyToday.splice(i,1);
            setToday(copyToday);
          }}>삭제</button>
        </div>
        })
      }

      <input onChange={(e)=> {
        입력값변경(e.target.value);
        console.log(입력값)
        }}></input>
      <button onClick={() => {
        if(입력값 == null || 입력값 == '')
        {alert('제목 입력하쇼')}
        else{
        let copy = [...글제목]
        copy.unshift(입력값)
        글제목변경(copy);
        let copyRecomend = [...recommend]
        copyRecomend.unshift(0);
        setRecommend(copyRecomend);
        let copyToday = [...today]
        copyToday.unshift(now);
        setToday(copyToday);
        }} }>글발행</button>

      {
        modal == true  ? <Modal color={'skyblue'} 글제목={글제목} title = {title}/> : null
      }

    </div>
  );
}

// props를 사용해서 부모 컴포넌트에서 자식 컴포넌트로 전송 가능


// 컴포넌트 만들기(html 을 축약할때)
// 글수정 버튼을 누르면 첫 글 제목이 '여자코트 추천' 으로 바뀌어짐
function Modal(props){
  return (
    <div className ="modal" >
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

function publish(입력값){
  if (입력값 != null){
    글제목.push('추가');
  }
}


// 컴포넌트는 언제 쓰는가
// 1. 반복적인 html 이 등장할때
// 2. 큰 페이지들을 컨포넌트로 만들어 씀
// 3. 자주 변경되는 것들

// 컴포넌트의 단점
// state 가져다쓸때 문제생김
// A함수의 변수는 B함수에서 가져다 쓸 수 없음

// 컴포넌트 만들기 (연습)
// let Com = () => {
//   return(
//     <>
//     <div>
//       <h4>컴포넌트 만들어보기</h4>
//     </div>
//     </>
//   )
// }

export default App;
