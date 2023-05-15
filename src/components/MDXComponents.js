export const Heading = (text, level) => {
  switch (level) {
    case 1:
      return <h1 >{text}</h1 >
    case 2:
      return <h2 >{text}</h2 >
    case 3:
      return <h3 >{text}</h3 >
    case 4:
      return <h4 >{text}</h4 >
    case 5:
      return <h5 >{text}</h5 >
    case 6:
      return <h6 >{text}</h6 >
    default:
      return <h1 >{text}</h1 >
  }
}



export const Text = (text, type) => {
  switch (type) {
    case 'p':
      return <p >{text}</p >
    case 'span':
      return <span >{text}</span >
    case 'strong':
      return <strong >{text}</strong >
    case 'em':
      return <em >{text}</em >
    case 'del':
      return <del >{text}</del >
    case 'code':
      return <code >{text}</code >
    case 'a':
      return <a >{text}</a >
    default:
      return <p >{text}</p >
  }
}


export const Code = (text, language) => {
  return <pre >{text}</pre >
}


export const Image = (src, alt, width, height) => {
  return <img src = {src} alt = {alt} width = {width} height = {height}/>
}
