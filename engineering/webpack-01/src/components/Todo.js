import React from 'react'

export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "react 支持"
        }
    }
    render() {
        return <h1 > {
            this.state.title
        } < /h1>
    }
}