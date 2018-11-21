import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const { isLogIn } = this.props;
        
        if (!isLogIn) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                write
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogIn: state.getIn(['login','isLogIn'])
    }
}

export default connect(mapStateToProps,null)(Write);