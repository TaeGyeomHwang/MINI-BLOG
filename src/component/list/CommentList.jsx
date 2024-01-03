import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

// // map()함수를 사용해서 각 댓글 객체를 CommentListItem 컴포넌트로 넘겨 댓글을 표시하는 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child){
    margin-bottom: 16px;
  }
`;

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return (
          <CommentListItem
            key={comment.id}
            comment={comment}
          />
        );
      })}
    </Wrapper>
  );
}

export default CommentList;