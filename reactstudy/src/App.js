import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            // jsx
            <div><ul className="my-list">
                <li>{false ? 'Hello World' : '你好世界'}</li>
                <li>I LOVE React</li>
            </ul></div>
        )
    }
}

export default App