import * as S from './styles';


const SearchBar = ({ children }) => {
    return (
        <S.Wrapper>
            <S.InputWrapper>
                <S.Label>Looking for a pokemon?</S.Label>
                <S.Input placeholder='E.g., Pikachu' />
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default SearchBar;

