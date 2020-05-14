import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import {BsPauseFill} from 'react-icons/bs'

import { settingsContext } from '../contexts/SettingsContext'

const SoundOnButton = styled.button`
  font-size: 1.2rem;
  background: none;
  border: none;
  font-family: 'Quicksand', sans-serif;
`

const PauseButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


const MusicController = (props) => {
  const {isPlaying, setIsPlaying, musicPlayer, volume, setVolume} = useContext(settingsContext)

  const togglePlaySound = () => {
    if (isPlaying){
      musicPlayer.current.pause()
      setIsPlaying(false)
    } else {
      musicPlayer.current.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    musicPlayer.current.volume = volume 
  }, [volume, musicPlayer])

  const handleRangeChange = (value) => {
    setVolume(value)
  }

  const Width = styled.div`
    width: 150px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `

  if (isPlaying){
    return(
      <Width>
        <Container>
          <PauseButton onClick={togglePlaySound}> <BsPauseFill /></PauseButton>
            <Slider 
              style={{width: "100px"}}
              trackStyle={[{backgroundColor: props.color1}]}
              handleStyle={[{borderColor: props.color1, backgroundColor: props.color2 }]}
              railStyle={{backgroundColor: props.color2}}
              min={0} max={1} step={0.1}
              value={volume}
              onChange={handleRangeChange}/>
        </Container>
      </Width>
    )
  } else {
    return (
      <Width>
        <SoundOnButton onClick={togglePlaySound}>sound on</SoundOnButton>
      </Width>
    )
  }
}

export default MusicController