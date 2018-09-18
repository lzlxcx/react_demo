/*
* 应用根组件
* */

import React, {Component} from 'react';

import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component {

  //初始化状态
  state = {
    comments: [
      {username:'1',content:'我爱敲代码'},
      {username:'2',content:'净瞎扯'},
      {username:'3',content:'哈哈哈'},
      {username:'4',content:'2楼正解'},
      {username:'5',content:'顶顶顶'}
    ]
  }

  addComment = (comment) => {
    //取出原本状态数据
    const {comments} = this.state
    //更新数据
    comments.unshift(comment)
    //更新状态
    this.setState({
      comments
    })
  }

  deleteComment = (index) => {
    //取出原本状态数据
    const {comments} = this.state
    //更新数据
    comments.splice(index,1)
    //更新状态
    this.setState({
      comments
    })
  }

  render () {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}


