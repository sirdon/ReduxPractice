import React, { Component } from 'react'


class AddForm extends Component {
    state = {
        name: null,
        age: null,
        color: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
    }
    handleCancel = (e) => {
        e.preventDefault();
        console.log("cancel clicked");
    }
    render() {
        return (

            <div>
                <form >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} className="form-control"></input>

                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} className="form-control"></input>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" onChange={this.handleChange} className="form-control"></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleCancel}>Cancel</button>

                </form>
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name"/>
                         </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                    </form>
                    </div>
        )
    }
}
export default AddForm
