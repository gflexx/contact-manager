import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Consumer } from '../context'

class Contact extends Component {
  // to show contact or not
  state = {
    showContactInfo: false
  }

  // set value to opposite value
  onShowClick = () =>{
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  onDeleteClick = (id, dispatch) =>{
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    })
  }

  render() {
    // destructuring values from props
    const {name, id, email, number} = this.props.contact
    const { showContactInfo } = this.state

    return ( 
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='card card-body mb-3 p-3'>
          
                <div className='d-flex'>
                  <div className='flex-grow-1 h4'>{name}</div>
                  <div 
                    onClick={this.onShowClick}
                    style={{cursor: 'pointer'}}
                  >
                    <i className='h4 bi-caret-down-square px-5'></i>
                  </div>

                  <div
                    style={{cursor: 'pointer', color: 'red'}}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  >
                    <i className='h4  bi-trash'></i>
                  </div>
                </div>

                {showContactInfo ? 
                (
                    <ul className='list-group'>
                      <li className='list-group-item'>Email: {email}</li>
                      <li className='list-group-item'>Phone: {number}</li>
                    </ul>
                ) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact 
