import React from 'react';
import {connect} from 'react-redux';

class Question extends React.Component{
    render = () => (
        <h1>
            {this.props.a}
        </h1>
    )

}

const mapStateToProps =(state) => ({
    a: state.a
});

export default connect(mapStateToProps)(Question);