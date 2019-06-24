import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'

class Xiaojiejie extends Component{
    constructor(props){
        // 调用父级方法
        super(props)
        this.state={
            inputValue:'哈哈哈',
            list:['头部按摩','精油推背']
        }
    }

    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{console.log('anxio 获取数据成功' + JSON.stringify(res))})
        .catch((error)=>{console.log('axios 获取数据失败'+ error)})
    }

    // componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }
    // componentDidMount() {
    //     console.log('componentDidMount-----组件挂载完成的时刻')
    // }


    // // 组件更新之前
    // shouldComponentUpdate(){ //此生命周期必须返回一个布尔值
    //     console.log('shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    // componentWillReceiveProps() { //顶层组件中没有接收props所以这个生命周期再顶层组件中没用 所以在此文件中不生效
    //     console.log('componentWillReceiveProps')
    // }

    render(){
        console.log('render-----组件挂载中')
        return (
            <Fragment>
                <div>
                    <label htmlFor="yuhan">增加服务:</label> {/* 不能用for会与react指令混淆，只能用htmlFor */}
                    <input 
                    id="yuhan" className="input"
                     value={this.state.inputValue} 
                     onChange={this.inputChange.bind(this)}
                     ref = {(input) => {this.input=input}}
                     />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <XiaojiejieItem 
                                // avname='波多野结衣'
                                key={index+item}
                                content={item}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        console.log(e.target.value)
        this.setState({
            inputValue:this.input.value
        })
    }
    // 增加列表项
    addList(){
        if (!this.state.inputValue) {
                alert('请输入内容')
        }
        else{
            this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
    //相当于 list:['头部按摩','精油推背',this.state.inputValue]  
        },() => {
            console.log(this.ul.querySelectorAll('li').length)
        })
    }        
    }
    // 删除列表项
    deleteItem(index){
       console.log(index)
       let list = this.state.list
       list.splice(index,1)
       this.setState({
        list:list
       })
    }
}

export default Xiaojiejie