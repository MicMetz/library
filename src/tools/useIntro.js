import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'




export const useHasBeenViewed = () => {
  const { ref, inView } = useInView({
    threshold: .8
  })
  const prevInView      = useRef(false)
  const hasBeenViewed   = prevInView.current || inView
  useEffect(() => {
    prevInView.current = inView
  }, [inView])

  return [hasBeenViewed, ref]
}
