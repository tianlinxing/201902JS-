import React from 'react';
const MyRoute = (Route)=>{
    class App extends React.Component {
        constructor() {
            super();
            
        }
        render() {
            let {need} = this.props;
            let isLogin;
            if(need){
                // 判断登录
            }
            return <div className=''>
                {
                    isLogin && need ? 
                    <Route {...this.props}></Route>:
                    !isLogin && need ?
                    <Redirect to='/login'></Redirect>
                    :
                    <Route></Route>
                }
                
            </div>;
        }
    }
    return App
}

export default MyRoute