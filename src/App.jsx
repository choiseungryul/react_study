import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';

function App() {
  // const [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');
  const [boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState([0, 0, 0]);
  const [show, setShow] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0); // 몇번째 게시글 클릭한지 저장하는 용도
  const [newTitle, setNewTitle] = useState(''); // 새로운 글작성 제목을 기억하는 state

  function change() {
    setLike(like+1);
  }

  return (
    <div className='App'>
      <App2 />

      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() => {
        setTitle('상품목록');
      }}>제목변경</button>

      {
        boardTitle.map((title, i) => {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setShow(!show);
                setTitleIndex(i);
              }}>{title} <button onClick={(e) => {
                e.stopPropagation();

                let _like = [...like];
                _like[i] = _like[i]+1;
                setLike(_like);
              }}>좋아요</button> {like[i]} </h4>
              <p>2025-07-16</p>
              <button onClick={() => {
                let _boardTitle = [...boardTitle];
                _boardTitle.splice(i, 1);
                setBoardTitle(_boardTitle);

                let _like = [...like];
                _like.splice(i, 1);
                setLike(_like);
              }}>삭제</button>
            </div>
          )
        })
      }

      <button onClick={() => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = 'Java';
        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목변경</button>

      {
        show ? <Detail boardTitle={boardTitle}
                       setBoardTitle={setBoardTitle}
                       titleIndex={titleIndex}/> : ''
      }
      
      <input type="text" value={newTitle} onInput={(e) => {
        setNewTitle(e.target.value);
      }} />
      <button onClick={() => {
        if(newTitle === '') {
          alert('제목을 입력하세요');
          return;
        } 

        let _boardTitle = [...boardTitle];
        _boardTitle.push(newTitle);
        setBoardTitle(_boardTitle);

        let _like = [...like];
        _like.push(0);
        setLike(_like);

        setNewTitle('');

      }}>추가</button>

    </div>  
  )
  
}

export default App
