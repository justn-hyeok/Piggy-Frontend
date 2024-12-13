import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px; /* 가로 최대 크기 제한 */
  padding: 20px;
  margin: 0 auto; /* 화면 중앙 정렬 */
  background: #1e1e1e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center; /* 제목 중앙 정렬 */
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 8px 10px; /* 인풋 크기 축소 */
    font-size: 14px; /* 텍스트 크기 축소 */
    border: 1px solid #404040;
    border-radius: 4px;
    background: #2c2c2c;
    color: white;
    outline: none;
    height: 40px; /* 높이 조정 */
  }
`;

export const AddGoalButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background: #ECC1D7;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ECC1D7;
  }
`;
