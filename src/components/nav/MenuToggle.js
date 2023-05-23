import {motion} from 'framer-motion'
import React from 'react'




const Path = React.forwardRef((props, ref) => {
  const {content} = props
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...content}
    />
  )
})


export const MenuToggle = ({toggle}) => (
  <motion.button
    onClick={toggle}
    animate={{scale: 1.2}}
    whileHover={{scale: 1.3}}
    whileTap={{scale: 0.9}}
    style={{
      position: 'absolute',
      top: '5%',
      right: '5%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      zIndex: 100,
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        ref={null}
        content={{
          d: 'M 2 2.5 L 20 2.5',
          variants: {
            closed: {opacity: 1, d: 'M 2 2.5 L 20 2.5'},
            open: {opacity: 1, d: 'M 3 16.5 L 17 2.5'},
          },
        }}
      />
      <Path
        ref={null}
        content={{
          d: 'M 2 9.423 L 20 9.423',
          variants: {
            closed: {opacity: 1, d: 'M 2 9.423 L 20 9.423'},
            open: {opacity: 1, d: 'M 3 9.423 L 17 9.423'},
          },
        }}
      />
      <Path
        ref={null}
        content={{
          d: 'M 2 16.346 L 20 16.346',
          variants: {
            closed: {opacity: 1, d: 'M 2 16.346 L 20 16.346'},
            open: {opacity: 1, d: 'M 3 2.5 L 17 16.346'},
          },
        }}
      />
    </svg>
  </motion.button>
)

