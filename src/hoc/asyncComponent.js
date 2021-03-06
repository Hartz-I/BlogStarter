//load compoentn asyncronusly. that is only when it's needed

import React, { Component } from "react"

const aysncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
            .then(cmp => {
                this.setState({component: cmp.default})
            })
        }
        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null
        }
    }
}

export default aysncComponent