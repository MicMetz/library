import { Component, useEffect } from 'react'
import ScrollProgress from 'scrollprogress'
// import config from '../../config/config.yml'



export default function ReadingProgress () {
  let  state = {
    progress: 0
  }

  useEffect(() => {
    const progress = new ScrollProgress((x, y) => {
      this.setState({
        progress: y * 100
      })
    })
  })

  const styles = {
    backgroundColor: '#ff0000',
    height         : '5px',
    position       : 'fixed',
    top            : 0,
    bottom         : 0,
    left           : 0,
    width          : `${this.state.progress}%`
  }

  return (
    <div style={styles} className="reading-progress" />
  )
}
