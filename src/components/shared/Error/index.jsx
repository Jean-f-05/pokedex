import * as S from "./styles";

const Error = ({ errorMsg }) => {
    return (
        <S.Wrapper>{errorMsg}</S.Wrapper>
    )
};

export default Error;