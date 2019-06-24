import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    //  满足条件：组件第一次存在于dom中函数是不会被执行的，已经存在dom'中函数才会执行
    // componentWillReceiveProps() {
    //     console.log('child-componentWillReceiveProps')
    // }

    // // 组件将要被删除
    // componentWillUnmount () {
    //     console.log('componentWillUnmount')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content){
            return true
        } else
        return false
    }
    state = {  }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务{this.props.content}
            </li>
         );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.PropsTypes = {
    content:PropsTypes.string,
    index:PropsTypes.number,
    deleteItem:PropsTypes.func,
    avname:PropsTypes.string.isRequired //必须传递并且是字符串类型
}
// 当父组件没有传值时，设置默认值
XiaojiejieItem.defaultProps = {
    avname: '松岛枫'
}
 
export default XiaojiejieItem;
