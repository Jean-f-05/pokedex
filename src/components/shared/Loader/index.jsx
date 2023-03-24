import * as S from './styles';

const Loader = () => {
    return (
        <div>
            <S.Spinner>
                <S.Roller>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.Roller>
            </S.Spinner>
        </div>
    );
};

export default Loader;