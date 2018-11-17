import React, { Component } from 'react';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';

import { Homewrapper, HomeRight, HomeLeft } from  './style';

class Home extends Component {
    render() {
        return (<div>
            <Homewrapper>
            <HomeLeft>
                <img src='https://upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>

                <Topic></Topic>
                    <List></List>
                </HomeLeft>

                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                
            </Homewrapper>
        </div>);
    }
}

export default Home;