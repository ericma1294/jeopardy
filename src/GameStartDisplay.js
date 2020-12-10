import React, {useState} from 'react'
import { Col, Input, InputNumber, Modal, Row} from 'antd'

function GameStartDisplay(props) {

    const [isVisible, setIsVisible] = useState(true);
    const [teamNum, setTeamNum] = useState(0);
    const [displayState, setDisplayState] = useState(1);
    const [teamList, setTeamList] = useState([]);

    const handleOk = () => {
        if (displayState == 1) {
            var teamListData = [];
            Array.from(Array(teamNum), (e, i) => {
                var teamData = {
                    id: i + 1,
                    name: "",
                    score: 0,
                }
                teamListData = [...teamListData, teamData];
            })

            setTeamList(teamListData);

            setDisplayState(2);
        } else {
            props.setTeam(teamList);
            setIsVisible(false);
        }

    }

    const onChange = (value) => {
        setTeamNum(value);
    }

    const onEdit = (e, value) => {
        var selectedTeam = {...value};
        var currTeam = [...teamList];
        selectedTeam.name = e.target.value;
        
        currTeam[value.id - 1] = selectedTeam;
        setTeamList(currTeam);        
    }

    return (
        <Modal 
            title="How many teams?"
            visible={isVisible}
            onOk={handleOk}
        >
        {
            displayState == 1 ? 
                <InputNumber min={1} max={10} defaultValue={teamNum} onChange={onChange} />
            : 
            teamList.map((val) => {
                return  <Input key={val.id} 
                               placeholder={"team " + val.id} 
                               onChange={(e) => onEdit(e, val)} /> 
            })
        }
        </Modal>

    )
}

export default GameStartDisplay