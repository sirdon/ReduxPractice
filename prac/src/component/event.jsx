import React, { Component } from 'react'

export default class Even extends Component {
    state = {
        name: "amit",
        age: "26"
    }
    handleClick = (e) => {
        console.log(this.state);
    }
    handleMouseOver = (e) => {
        console.log(e.target);
    }
    handleCopy = (e) => {
        console.log('try to copy will not work');
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted ', this.state.name);
    }
    render() {
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Color:{ninja.color}</div><br></br>
                </div>
            )
        });
        return (
            <div>
                <p>My name is {this.state.name} and i am {this.state.age}</p>
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <p onCopy={this.handleCopy}>this is text</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>submit</button>
                </form>
                {ninjaList}
            </div>
        )
    }
}



