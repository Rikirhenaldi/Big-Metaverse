import React from 'react'
import ModelViewer from 'react-model-viewer';
const modelPath = './bigCoin.glb'

export default function BigCoin() {
  return (
    <ModelViewer type="gtlf" src={modelPath} />
  )
}
