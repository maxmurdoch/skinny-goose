import React, { Component } from 'react'
import { append, remove } from 'ramda'

import SEO from '../components/seo'
import skinnyGoose from '../images/skinny-goose.jpg'
import './index.css'

const SkinnyGoose = ({ top, left }) => (
  <img
    style={{
      position: 'absolute',
      transition: 'all 300ms ease-in-out',
      opacity: 0.8,
      width: '30%',
      top,
      left,
    }}
    src={skinnyGoose}
  />
)

class ClickForGoose extends Component {
  constructor() {
    super()

    this.state = {
      geese: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(this.state)

    const { clientX, clientY } = e

    this.setState(
      ({ geese }) => ({
        geese: append({ top: clientY, left: clientX }, geese),
      }),
      console.log
    )
  }

  render() {
    const { children } = this.props
    return (
      <div
        style={{
          height: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          margin: `0 auto`,
          padding: 0,
          position: 'relative',
          width: '100vw',
          cursor: 'pointer',
        }}
        onClick={this.handleClick}
      >
        {
          <button
            disabled={this.state.geese.length === 0}
            style={{
              backgroundColor: 'black',
              borderRadius: '4px',
              color: 'white',
              fontFamily: 'monospace',
              zIndex: 1000,
              position: 'absolute',
              top: 16,
              right: 16,
              border: 0,
              padding: '0.5rem 1rem',
            }}
            className={'button'}
            onClick={e => {
              e.stopPropagation()

              this.setState(({ geese }) => ({
                geese: remove(geese.length - 1, 1, geese),
              }))
              console.log('clicked')
            }}
          >
            Skin the goose
          </button>
        }
        {children}
        {this.state.geese.map(({ top, left }, index) => {
          return <SkinnyGoose top={top} left={left} />
        })}
      </div>
    )
  }
}

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ClickForGoose>
      <SkinnyGoose />
    </ClickForGoose>
  </div>
)

export default IndexPage
