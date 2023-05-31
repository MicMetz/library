import {Component, useEffect} from 'react'
import ScrollProgress from 'scrollprogress'
import {motion} from 'framer-motion'



export default function ReadingProgress() {
  let state = {
    progress: 0
  }

  useEffect(() => {
    const progress = new ScrollProgress((x, y) => {
      this.setState({
        progress: y * 100
      })
    })
  })

  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="progress-bar" style={{width: `${state.progress}%`}}></div>
    </motion.div>
  )

}


const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  z-index: 100;
  background-color: var(--color-primary);
`
