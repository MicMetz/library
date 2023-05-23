import {isBrowser} from 'framer-motion';



function handleExitComplete() {
  if (!isBrowser) {
    return;
  }

  if (typeof window !== 'undefined') {
    window.scrollTo({top: 0});
  }

}
