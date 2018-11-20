import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { list, page, loadMoreData } = this.props;
        return (
            <div>
                {
                    list.map((item,index) => (
                        <Link key={index} to='/detail'>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt=''></img>
                                    <ListInfo>
                                        <h3 className='title'>
                                            {item.get('title')}
                                        </h3>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }

                <LoadMore onClick={ () => { loadMoreData(page) } }>加载更多</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','articalList']),
        page: state.getIn(['home','articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreData: (page) => {
            dispatch(actionCreators.getMoreListItem(page));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);