import styled from "styled-components";

const LoadingGif = ({
  gif = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif",
}) => {
  return <LoadingImage src={gif} alt="Loading" />;
};
export default LoadingGif;

const LoadingImage = styled.img`
  width: 50px;
`;
