import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// map()함수를 사용해서 글의 개수만큼 PostListItem을 생성하는 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child){
    margin-bottom: 16px;
  }
`;

function PostList(props) {
  const { posts, onClickItem } = props;
// posts 배열에는 post 객체들이 들어있음
  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;