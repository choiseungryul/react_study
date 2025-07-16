import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';

function App() {
  // const [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');
  const [boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(false);
  
  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() => {
        setTitle('상품목록');
      }}>제목변경</button>

      <div className='list'>
        <h4>{boardTitle[0]} <button onClick={() => {
          setLike(like+1);
        }}>좋아요</button> {like} </h4>
        <p>2025-07-16</p>
      </div>

      <div className='list'>
        <h4>{boardTitle[1]}</h4>
        <p>2025-07-16</p>
      </div>

      <div className='list'>
        <h4>{boardTitle[2]}</h4>
        <p>2025-07-16</p>
      </div>

      <button onClick={() => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = 'Java';
        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목변경</button>

      {
        show ? <Detail/> : ''
      }
      
    </div>  
  )
  
}

export default App
