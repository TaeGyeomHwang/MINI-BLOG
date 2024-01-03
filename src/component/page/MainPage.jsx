import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json"

// 처음 사용자가 접속했을 때 보여주는 페이지.
// 글을 작성할 수 있는 버튼과 글 목록을 보여주는 컴포넌트
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

function MainPage(props) {
  const { } = props;

  const navigate = useNavigate();

  // Button 컴포넌트를 통해 글 작성하기 페이지로 이동
  // PostList를 이용해 글 목록 표시
  // 페이지 이동을 위해 navigate 훅 사용
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            // 클릭하면 해당 path로 이동해준다.
            navigate("/post-write");
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item)=>{
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;