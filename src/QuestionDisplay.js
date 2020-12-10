import React, {useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'antd'

import { TeamContext } from './MainContent'


function QuestionDisplay(props) {
    const [teamList, setTeamList] = useContext(TeamContext);
    const [seeSolution, setSeeSolution] = useState(false);
    const [clicked, setClicked] = useState(false)

    const updatePoint = (val, point) => {
        var currTeam = [...teamList];
        var currScore = currTeam[val.id - 1].score;
        var selectedTeam = {...teamList[val.id - 1], score: currScore + point}

        currTeam[val.id - 1] = selectedTeam;
        setTeamList(currTeam);

        // while ()
    }
    return (
        <div className="container" style={style.container}>
            <Row>
                <Col span={24}><h1 style={style.text}>{props.data.category}</h1></Col>
            </Row>
            <Row>
                {
                    seeSolution ?
                        <Col span={24}><h1 style={style.text}>{props.data.answer}</h1></Col>
                    : 
                        <Col span={24}><h1 style={style.mainText} onClick={() => setSeeSolution(true)}>{props.data.question}</h1></Col>

                }
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Row>
                        {
                            teamList.map((val) => {
                                return (
                                        <Col span={8}><Button style={style.team} type="primary" size="middle" onClick={() => updatePoint(val, props.data.point)}>{val.name}</Button></Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col span={4}></Col>
           </Row>
           {/* <Row><Col span={4}><Button type="primary" onClick={props.toMain}>Backkkkkk</Button></Col></Row> */}
           <Row><Col span={24} onClick={props.toMain}><h1>&nbsp;</h1></Col></Row>

        </div>
    )
}

const style = {
    container: {
        backgroundColor: '#060CE9',
    }, 
    text: {
        color: 'white',
        margin: '2em 0',
        fontSize: '20pt'
    }, 
    mainText: {
        color: 'white',
        margin: '0 1em 2em 1em',
        fontSize: '25pt'
    },
    team: {
        background: '#FF9C1C',
        margin: '2px',
        color: 'black',
        fontWeight: 'bold'
    }
}

export default QuestionDisplay