import React from 'react';
import {connect} from 'react-redux';
import SectionForm from '../section-form';
import * as section from '../../action/section';

class Landing extends React.Component{
  render(){
    let {
      sections,
      sectionCreate,
      sectionUpdate,
      sectionRemove,
    } = this.props;

    return(
      <div className="landing">
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((section, i) =>
            <div key={i}>
              <h2> {section.title} </h2>
              <button onClick={() => sectionRemove(section)}> delete </button>
              <SectionForm section={section} onComplete={sectionUpdate} />
            </div>
          )
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    sections: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return{
    sectionCreate: (data) => dispatch(section.createAction(data)),
    sectionUpdate: (data) => dispatch(section.updateAction(data)),
    sectionRemove: (data) => dispatch(section.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing); //TODO: remove this: this takes what we need from the store and sets it up in the propsso we can use it in the landing constructor
