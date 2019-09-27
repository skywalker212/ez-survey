import React from 'react';
import {connect} from 'react-redux';
import './Question.css';

class Question extends React.Component{
    renderInput = ()=>{
        switch(this.props.type){
            case "text":
                return (
                    <input className="form-control" id={this.props.qid} type="text"/>
                );
            case "objective":
                return (
                    this.props.options.map((value,index)=>(
                        <div className="form-check form-check-inline" key={index}>
                            <input className="form-check-input" type='radio' name={this.props.qname} id={this.props.qid+index} value={value}/>
                            <label htmlFor={this.props.qid+index} className="form-check-label">{value}</label>
                        </div>
                    ))
                )
            case "checkbox":
                return (
                    this.props.options.map((value,index)=>(
                        <div className="form-check form-check-inline" key={index}>
                            <input className="form-check-input" type='checkbox' name={this.props.qname} id={this.props.qid+index} value={value}/>
                            <label htmlFor={this.props.qid+index} className="form-check-label">{value}</label>
                        </div>
                    ))
                )
            case "number":
                return (
                    <input className="form-control" id={this.props.qid} type="number"/>
                )
            default:

        }
    }
    render = () => (
        <div>
            <p>{this.props.title}</p>
            {this.renderInput()}
        </div>
    )

}

const mapStateToProps =(state) => ({
    a: state.a
});

export default connect(mapStateToProps)(Question);