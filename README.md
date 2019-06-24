# reactStudy
- react 单项数据流模式 子组件不能直接改变父组件中传递过来的值
- 函数式编程 好处：1.代码变得非常清晰 每个函数代表一个功能，或者代表一个区块渲染 2.对于代码测试非常方便更加容易进行前端自动化测试
- PropsTypes  父组件向子组件传值时进行校验
- ref
- 生命周期
性能优化
eg：
shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content){
            return true
        } else
        return false
    }

- axios(eact远程请求数据)  ajax的封装组件


npm install axios    安装在目录下但是不会添加任何依赖
npm install -g axios  安装在全局
npm install -save axios  安装在目录下并且添加了依赖  在生产环境
npm install -save-dev axios








