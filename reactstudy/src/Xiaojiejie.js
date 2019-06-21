import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        // 调用父级方法
        super(props)
        this.state={
            inputValue:'哈哈哈',
            list:['头部按摩','精油推背']
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="yuhan">增加服务:</label> {/* 不能用for会与react指令混淆，只能用htmlFor */}
                    <input id="yuhan" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <XiaojiejieItem 
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
            inputValue:e.target.value
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