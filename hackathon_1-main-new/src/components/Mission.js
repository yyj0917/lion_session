import styled from "styled-components";

const MissionText = styled.div`
    display: inline-flex;
    padding: 25px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #000;
`;

function Mission(props) {
  return (
    <MissionText>
        {props.text}
    </MissionText>
  );
}

export default Mission;
