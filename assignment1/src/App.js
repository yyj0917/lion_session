import "./App.css";
import { useState } from "react";

const Homework = () => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  

  const handleNewComment = () => {
    ///이 부분을 작성해주세요
    //아무 입력도 없을 때에는 댓글이 작성되어선 안됩니다!

    if (inputText !== "") {
      const newArr = comments.concat(inputText);
      setComments(newArr);
    }
    console.log(comments.length)

  };

  const handleDeleteComment = (index) => {
    console.log(index);
    ///이 부분을 작성해주세요 
    const newArr = [...comments.slice(0,index), ...comments.slice(index+1)];
    setComments(newArr);

  };

  return (
    <>
      <header>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/74/%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png"
          height="64"
        />
        <p className="title">멋쟁이 사자처럼 교육세션</p>
      </header>
      <div className="body">
        <div className="publish">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleNewComment}>등록</button>
        </div>
        {comments.map((item, idx) => (
          <div key={idx} className="comments">
            <p>{item}</p>
            <button onClick={() => handleDeleteComment(idx)}>삭제</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homework;
