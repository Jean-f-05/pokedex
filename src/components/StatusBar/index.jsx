import * as S from './styles';

const StatusBar = ({ hp, att, def, spd }) => {
    return (
        <S.Wrapper>
            <S.Filledbar hp={hp} att={att} def={def} spd={spd}></S.Filledbar>
        </S.Wrapper>
    );
};

export default StatusBar;

