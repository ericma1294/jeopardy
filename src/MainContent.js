import React, { useState, useEffect } from 'react'
import { Button, Col, Row } from 'antd'

import GameDisplay from './GameDisplay'
import GameStartDisplay from './GameStartDisplay'
import d from './data/data.json';

export const DataContext = React.createContext()
export const TeamContext = React.createContext()

const testTeam = [
    {
        id: 1,
        name: "team 1",
        score: 100,
    },
    {
        id: 2,
        name: "team 2",
        score: 400,
    },
    {
        id: 3,
        name: "team 3",
        score: 200,
    }
]

function MainContent() {
    const [score, setScore] = useState([]);
    const [teamList, setTeamList] = useState(testTeam);
    const [gameEnd, setGameEnd] = useState(false)
    const [winningTeam, setWinningTeam] = useState({})

    const setTeam = (value) => {
        setTeamList(value);
    }

    const endGame = () => {
        var max = {teamName: "", score: 0}
        for (var i = 0; i < teamList.length; i++) {
            if (teamList[i].score > max.score) {
                max = {...teamList[i]}
            }
        }
        setWinningTeam(max);
        setGameEnd(true);
    }

    return (
        <DataContext.Provider value={d}>
            <TeamContext.Provider value={[teamList, setTeamList]}>
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <Row>
                            <Col span={19}>
                                {
                                    gameEnd ?
                                        <div> 
                                            <h1>{"CONGRATZZZZ   " + winningTeam.name + "!!!!!!!!"}</h1>
                                        </div>
                                    :
                                        <GameDisplay />
                                }
                            </Col>
                            <Col span={5} style={style.scoreBoard}>
                                <Row><Col span={24}><h1 style={{margin: '0.5em 0'}}>Scoreboard</h1></Col></Row>
                                {
                                    teamList.map((val) => 
                                        <Row>
                                            <Col span={12}><h1>{val.name}</h1></Col>
                                            <Col span={12}><h1>{val.score}</h1></Col>
                                        </Row>
                                    )
                                }
                                <Row><Col span={24}><Button onClick={endGame} type='primary'>End Game</Button></Col></Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1}></Col>
                    <GameStartDisplay setTeam={setTeam} />
                </Row>
            </TeamContext.Provider>
        </DataContext.Provider>
    )
}

const style = {
    scoreBoard: {
        background: '#ffcd8d'
    }
}

export default MainContent