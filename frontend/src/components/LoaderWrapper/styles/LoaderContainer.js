import styled from 'styled-components';

const LoaderContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  height: calc(100% - 108px);
  width: 100%;
  overflow: scroll;
  img.loading {
    margin: auto;
  }
`;
export default LoaderContainer;
