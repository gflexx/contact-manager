import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Consumer } from '../context'
import { useNavigate } from 'react-router-dom'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        number: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit = (dispatch, e) => {
        e.preventDefault()
        const {name, email, number} = this.state
        const {navigate} = this.props
        const newContact = {
            id: uuidv4(),
            name,
            email,
            number
        }
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        })

        // clear inputs
        this.setState({
            name: '',
            email: '',
            number: ''
        })
        navigate('/')
    }

    render() {
        const {name, email, number} = this.state
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div className='mb-5'>
                            <h4 className='text-center mb-5'>Add Contact</h4>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" 
                                        name="name" required value={name}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" 
                                        name="email" required value={email}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Number</label>
                                    <input type="text" className="form-control" 
                                        name="number" required value={number}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-success" type='submit' required rows="3">Submit</button>
                                </div>

                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default function (props){
    const navigate = useNavigate()
    return <AddContact {...props} navigate={navigate} />
}
