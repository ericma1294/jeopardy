import React, {useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'antd'
import './Test.css'

import { DataContext } from './MainContent'
import QuestionDisplay from './QuestionDisplay'



function GameDisplay(props) {
    const [gameState, setGameState] = useState(1);
    const [selectedData, setSelectedData] = useState({});

    const data = useContext(DataContext);

    // useEffect(() => {
    //     console.log('######', data['data'][0].content)
    // })
    
    const changeState = (val) => {
        const isSelected = {...val, selected: true}
        data['data'][(val.point / 100 ) - 1].content[val.id -1] = isSelected

        setGameState(2);
        setSelectedData(val);

    }

    return (
        <div className="container">
            {
                gameState == 1 ?
                    <div>
                        <Row>
                            {
                                data['data'][0].content.map((v) => 
                                    <Col span={4} style={style.grid}><h1 style={style.text}>{v.category}</h1></Col>
                                )
                            }
                      
                        </Row>
                        {
                            data['data'].map((value) => 
                                <Row>
                                    {
                                        value['content'].map((v) => 
                                            v.selected ? 
                                                <Col style={{...style.grid, background: '#323232'}} span={4}>
                                                    <h1 style={{...style.text, opacity: '0.5'}}>{value.point}</h1>
                                                </Col>
                                            : 
                                                <Col style={style.grid} span={4} onClick={() => changeState(v)}>
                                                    <h1 style={style.text}>{value.point}</h1>
                                                </Col>
                                        )
                                    }
                                </Row>
                            )   
                        }
                    </div>
                : 
                gameState == 2 ?
                // <Button type='primary' onClick={() => setGameState(1)}>backkkkk</Button>
                    <QuestionDisplay 
                        data={selectedData}
                        toMain={() => setGameState(1)} />

                : 
                <h1>HELLO WORLD!!</h1>
            }
        </div>
    )
}

const style = {
    grid: {
        background: '#060CE9', 
        border: 'black 2px solid'
    },
    text: {
        color: "#FF9C1C",
        fontSize: '24pt'
    }
}



export default GameDisplay