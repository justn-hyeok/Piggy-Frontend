import styled from 'styled-components';

export const Card = styled.div`
  background: #2c2c2c;
  padding: 16px;
  border-radius: 8px;
  color: white;
  margin-bottom: 16px;
`;

export const ProgressWrapper = styled.div`
  margin-top: 8px;
  background: #404040;
  border-radius: 16px;
  height: 8px;
  position: relative;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: #ECC1D7;
  transition: width 0.3s ease;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: #404040;
  color: white;
  cursor: pointer;

  &:hover {
    background: #606060;
  }
`;
