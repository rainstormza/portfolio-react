import React, { Component } from 'react'
// eslint-disable-next-line
import * as bubbly from 'bubbly-bg'

class BubbleBg extends Component {
  componentDidMount() {
    window.bubbly({
      colorStart: '#fff4e6',
      colorStop: '#ffe9e4',
      blur: 1,
      compose: 'source-over',
      bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
      canvas: document.querySelector('#background')
    })
  }

  render() {
    return (
      <canvas id="background">
        <p>test</p>
      </canvas>
    )
  }
}

export default BubbleBg

// https://github.com/tipsy/bubbly-bg
