import * as S from './styles';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';

const Main = ({ children }) => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <S.Image src={require("../../assets/imgs/poke2.png")} alt="" />
            </S.ImageWrapper>
            <SearchBar />
            <Table />
        </S.Wrapper>
    );
};

export default Main;

