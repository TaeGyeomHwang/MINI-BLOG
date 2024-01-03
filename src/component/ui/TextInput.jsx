import React from "react";
import styled from "styled-components";

// 사용자로부터 텍스트를 입력받을 수 있게 해 주는 컴포넌트
// 여러 줄에 걸친 텍스트를 입력 받기 위해 textarea 태그 사용
const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
    height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  // onChange는 변경된 값을 상위 컴포넌트로 전달 위해 사용
  return <StyledTextarea height={height} value={value} onChange={onChange} />
}

export default TextInput;