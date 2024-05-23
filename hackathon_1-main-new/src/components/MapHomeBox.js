import React from 'react';
import styled from "styled-components";

const TaskBox = styled.div`
    width: 330px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F5F5F8;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`

const Title = styled.div`
    color: #000;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    padding-top : 2px;
    line-height: normal;
`

const Context = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left : 20px;
`;

const Time = styled.div`
    color: #777777;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-top : 8px;

`

function MapHomeBox(props) {
    const LockTitle = props.title.includes('찾아가기');

    return (
        <TaskBox style = {{display:'flex', alignItems: 'center',justifyContent: 'space-between', }}>
            <Context>
                <Title style={{ color: LockTitle ? '#B9B9B9' : '#000' }}>{props.title}</Title>
                <Time style={{ color: LockTitle ? '#B9B9B9' : '#000' }}>{props.time}</Time>
            </Context>
            <div>
                <img src={props.img}  style = {{paddingRight:'15px', paddingLeft:'0', width:'45px'}} />
            </div>
        </TaskBox>
    );
}

export default MapHomeBox;