import React, { Component } from 'react'
import {connect} from 'react-redux';

 class News extends Component {

  useEditStatusInStore = () => {
    // var {dispatch} = this.props;
    var dispatch = this.props.dispatch;
    dispatch({
      type: "CHANGE_EDIT_STATUS"
    })
  }

  render() {
    return (
      <div>
        <h1>This is News Component</h1>
        <button onClick={() => this.useEditStatusInStore()} name="" id="" className="btn btn-primary" >Button</button >
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus
  }
}

export default connect(mapStateToProps)(News)