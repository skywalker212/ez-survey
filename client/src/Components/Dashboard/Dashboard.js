import React from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
    render = () => (
        <h1>
            {this.props.a}
        </h1>
    )

}

const mapStateToProps =(state) => ({
    a: state.a
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);