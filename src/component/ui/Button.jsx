import React from "react";
import styled from "styled-components";

// 버튼의 스타일을 지정하는 컴포넌트
const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;
// onClick을 이용해 클릭 이벤트를 상위 컴포넌트로 보냄
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;