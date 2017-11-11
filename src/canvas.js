const createAndAppendCanvas = () => {
  const canvasFragment = document.createDocumentFragment()
  const canvas = document.createElement('canvas')

  canvasFragment.appendChild(canvas)

  document.body.appendChild(canvasFragment)
}

export default createAndAppendCanvas
