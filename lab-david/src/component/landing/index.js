// inside landing folder = index.js

import React from 'react';
import {connect} from 'react-redux';
import * as section from '../../action/section';
import SectionForm from './section-form';

// TODO import sectionForm

class Landing extends React.Component{
  render(){
    let {
      sections,
      sectionCreate,
      sectionUpdate,
      sectionRemove,
    } = this.props;

    return(
      <div className='landing'>
        <SectionForm onComplete={sectionCreate} />
        {
          sections.map((section, index) => 
            <div key={index}>
              <h2> {section.title} </h2>
              <button onClick={() => sectionCreate(section)}> delete </button> 
              <sectionForm section={section} onComplete={sectionUpdate} />
            </div>
          )}
      </div>
    );
  }
  

}


let mapStateToProps = (state) => {
  return{
    cats : 'Gregor and The Hound',
    sections : state,
  }
};


let mapDispatchToProps = (dispatch) => {
  return{
    sectionCreate : (data) => dispatch(section.createAction(data)),
    sectionUpdate : (data) => dispatch(section.updateAction(data)),
    sectionRemove : (data) => dispatch(section.removeAction(data)),

  }
};

// this connects the above two functions to the store
// takes original function and renames it as Landing (curried function)
export default connect(mapStateToProps, mapDispatchToProps)(Landing);