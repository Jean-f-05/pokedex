import * as S from './styles';

const StatusBar = ({ description, value, color }) => {

    return (
        <S.Wrapper color={color}>
            <S.Filledbar description={description} value={value} color={color}></S.Filledbar>
        </S.Wrapper>
    );
};

export default StatusBar;

