import { useState } from 'react';
import * as S from "./styles";
import { PlusOutline, MinusOutline } from "@styled-icons/evaicons-outline";


const FilterEl = ({ setGeneration, radio }) => {
    const handleFormChange = (evt) => {
        setGeneration(evt.target.value)
    }
    return (
        <>
            < S.FilterGenWrapper >
                {radio &&
                    radio.map((gen, i) => {
                        return (
                            <S.FilterInput key={`${gen.name}`}>
                                <S.Label htmlFor={gen.name}>Gen {gen.value} ({gen.name.toUpperCase()})</S.Label>
                                <input defaultChecked={i === 0} type="radio" id={gen.name} name="generation" value={`${i + 1}`} onChange={handleFormChange} />
                            </S.FilterInput>)
                    })
                }
            </S.FilterGenWrapper >
        </>)

};

const Filter = ({ generation, text, radio }) => {
    const handleClick = () => {
        return setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.FilterWrapper>
            <S.FilterHeader onClick={handleClick}>
                <S.FilterText>
                    {text}
                </S.FilterText>
                {isOpen ?
                    <MinusOutline size={24} color="white" /> :
                    <PlusOutline size={24} color="white" />}
            </S.FilterHeader>
            {<S.FilterBody active={isOpen}>
                <FilterEl setGeneration={generation} radio={radio} />
            </S.FilterBody>}

        </S.FilterWrapper >
    )
};

export default Filter;