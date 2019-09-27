import React from 'react';
import './Survey.css';
import {connect} from 'react-redux';
import '../Question/Question.jsx';
import Question from '../Question/Question.jsx';

class Survery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDisplay: props.isDisplay
        }
    }
    submitSurvey = ()=>{
        console.log("asdf");
    }
    render = ()=>(
        <React.Fragment>
            <form>
                <Question title="sample q" type="checkbox" qid="q1" options={['one','two','three']}/>
                <Question title="sample q2" type="objective" qid="q2" options={['obj1', 'obj2']}/>
                <Question title="sample q3" type="text" qid="q3"/>
                <Question title="sample q4" type="number" qid="q4"/>
                <button className="btn btn-primary" type="button" onClick={this.submitSurvey} disabled={this.state.isDisplay}>Submit</button>
            </form>
        </React.Fragment>
    )
}

const mapStateToProps = (state)=>({
    a: state.a
})

const mapDispatchToProps = (dispatch)=>({

});

export default connect(mapStateToProps, mapDispatchToProps)(Survery);