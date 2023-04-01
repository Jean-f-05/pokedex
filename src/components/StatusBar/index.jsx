import * as S from './styles';

const StatusBar = ({ description, value }) => {

    return (
        <S.Wrapper>
            <S.Filledbar description={description} value={value}></S.Filledbar>
        </S.Wrapper>
    );
};

export default StatusBar;

