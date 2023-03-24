import * as S from './styles';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';

const Main = ({ children }) => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <S.Image src={require("../../assets/imgs/poke2.png")} alt="Round image containing several pokemons" />
            </S.ImageWrapper>
            <SearchBar />
            <Table />
            <S.Footer />
        </S.Wrapper>
    );
};

export default Main;

