import React, { Component } from 'react'
import { connect } from 'react-redux';

class News extends Component {

  // useEditStatusInStore = () => {
  //   // var {dispatch} = this.props;
  //   var dispatch = this.props.dispatch;
  //   dispatch({
  //     type: "CHANGE_EDIT_STATUS"
  //   })
  // }

  render() {
    return (
      <div>
        <h1>This is News Component</h1>
        <button onClick={() => this.props.useEditStatusInStore()} name="" id="" className="btn btn-primary" >Button</button >
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    useEditStatusInStore: () => {
      dispatch({type: 'CHANGE_EDIT_STATUS'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)