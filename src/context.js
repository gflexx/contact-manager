import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}
export class Provider extends Component{
    state = {
        contacts: [
            {
                id: 1,
                name: 'Professor X',
                email: 'pxmen@xacademy.co',
                number: '1-523-628-723'
            },
            {
                id: 2,
                name: 'Wolverine',
                email: 'loganxj@xacademy.co',
                number: '1-556-908-712'
            },
            {
                id: 3,
                name: 'Storm',
                email: 'stacestorm@xacademy.co',
                number: '1-788-634-733'
            },
            {
                id: 4,
                name: 'Deadpool',
                email: 'dpp@xacademy.co',
                number: '1-487-634-733'
            }
        ],
        dispatch: action => this.setState(state => reducer(this.state, action))
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer 