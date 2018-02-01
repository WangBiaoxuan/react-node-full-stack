import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';

class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      liList: [],
    }
  }
  componentDidMount() {
    const that = this;
    axios.get('/home/list')
      .then(function (response) {
        if (response.data.data) {
          that.setState({
            liList: response.data.data,
          })
        }
      })
  }
  render() {
    const { liList } = this.state;
    const vlist =  liList.map(item => {
      return (
        <li key={item.name}>
          <div>name: {item.name}</div>
          <div>age: {item.age}</div>
          <div>message: {item.message}</div>
        </li>
      )
    })
    return (
      <div>
        <h1>我是Home文件</h1>
        <ul>
          {vlist}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  }
}
export default connect(mapStateToProps)(Home)
