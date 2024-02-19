import React from 'react'

const withMetaMaskStatus = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isConnected: false,
      }
    }

    componentDidMount() {
      if (window.ethereum) {
        window.ethereum.on('networkChanged', (networkId) => {
          this.setState({ isConnected: true })
        })
        window.ethereum.on('disconnect', () => {
          this.setState({ isConnected: false })
        })
      }
    }

    render() {
      return (
        <>
          <WrappedComponent
            {...this.props}
            metaMaskStatus={this.state.isConnected}
          />
        </>
      )
    }
  }
}

export default withMetaMaskStatus
