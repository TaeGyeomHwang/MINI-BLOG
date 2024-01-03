import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

// 글 작성을 위한 페이지
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child){
    margin-bottom: 16px;
  }
`;

function PostWritePage(props) {
  const navigate = useNavigate();

  // 글의 제목을 위한 state, 글의 내용을 위한 state 설정
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // TextInput을 통해 글의 제목과 내용을 각각 입력받는다.
  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <TextInput
          height={480}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <Button
          title="글 작성하기"
          onClick={()=>{
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;