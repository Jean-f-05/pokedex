import { useState } from 'react';
import * as S from "./styles";
import { PlusOutline, MinusOutline } from "@styled-icons/evaicons-outline";

const FilterEl = ({ setField, radio, name, toggleFilter }) => {
    const handleFormChange = (evt) => {
        setField({ id: evt.target.value, name: evt.target.name });
        toggleFilter()

    }
    return (
        <>
            < S.FilterRadioWrapper >
                {radio &&
                    radio.map((el, i) => {
                        return (
                            <S.FilterInputLi key={`${el.name}`}>
                                <S.Label htmlFor={el.name}>
                                    <S.Input
                                        class="rad-input"
                                        defaultChecked={el.name === "Gen I (KANTO)"}
                                        type="radio"
                                        id={el.name}
                                        name={name}
                                        value={el.value}
                                        onChange={handleFormChange} />
                                    <S.RadDesign></S.RadDesign>
                                    <S.RadText>{el.name.toUpperCase()}</S.RadText>
                                </S.Label>
                            </S.FilterInputLi>
                        )
                    })
                }

            </S.FilterRadioWrapper >
        </>)
};

const Filter = ({ value, text, radio }) => {
    const toggleFilter = () => {
        return setIsOpen(!isOpen)
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.FilterWrapper>
            <S.FilterHeader onClick={toggleFilter}>
                <S.FilterText>
                    {text}
                </S.FilterText>
                {isOpen ?
                    <MinusOutline size={24} color="white" /> :
                    <PlusOutline size={24} color="white" />}
            </S.FilterHeader>
            {<S.FilterBody active={isOpen} >
                <FilterEl setField={value} radio={radio} name={text} toggleFilter={toggleFilter} />
            </S.FilterBody>}
        </S.FilterWrapper >
    )
};

export default Filter;