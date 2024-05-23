import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 400px;
    height: 236px;
    background: #CAD5EC;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SquareText = styled.p`
    width: 300px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 50%;
    margin-bottom:50px;
`;

const ExcerciseBox = (props) => {
    const paragraphs = props.text.split('\n');
    return (
        <div>
            <Square>
                <SquareText>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </SquareText>
            </Square>
        </div>
    );
};

export default ExcerciseBox;
