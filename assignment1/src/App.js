import "./App.css";
import { useState } from "react";
import Box from "./box";

const Homework = () => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const [edit, setEdit] = useState(-1);

  

  const handleNewComment = () => {
    ///이 부분을 작성해주세요
    //아무 입력도 없을 때에는 댓글이 작성되어선 안됩니다!

    if (inputText !== "") {
      if (edit === -1) {

        const newArr = comments.concat(inputText);
        setComments(newArr);
      }
      else {
        const newComments = [...comments];
        newComments[edit] = inputText;
        setComments(newComments);
      }
    }
    setInputText("");
    setEdit(-1);

  };

  const handleDeleteComment = (index) => {
    ///이 부분을 작성해주세요 
    const newArr = [...comments.slice(0,index), ...comments.slice(index+1)];
    setComments(newArr);

  };
  const handleChangeComment = (index) => {
    document.querySelector("#input").value = comments[index];
    
    setEdit(index);
    

  }
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
            id="input"
          />
          <button onClick={handleNewComment}>등록</button>
        </div>
        {comments.map((item, idx) => (
          <div key={idx} className="comments">
            <p>{item}</p>
            <button onClick={() => handleDeleteComment(idx)}>삭제</button>
            <button onClick={() => handleChangeComment(idx)}>수정</button>

          </div>
        ))}
      </div>
      <div className="box-container">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>

    </>
  );
};

export default Homework;
