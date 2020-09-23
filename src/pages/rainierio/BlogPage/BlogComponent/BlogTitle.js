import React from 'react';
import PropTypes from 'utils/propTypes';
import CheckboxToggle from 'react-rainbow-components';
import moment from 'moment'

export const propTypes = {
    header: PropTypes.shape({
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        created: PropTypes.string,
        updated: PropTypes.string,
        handleOnchange: PropTypes.func
      })
  };

const BlogTitle = (header) => {
    return (
        <div>
            {header.title} 
            <CheckboxToggle 
                name="status" 
                label="Published" 
                value={header.status } 
                style={{float: 'right'}}
                onChange= {header.handleOnchange}
            /> 
        { header.created && <small style={{marginLeft:'50px', color:'gray' }}>Created at : {moment(header.created).format('LLL')}</small> }
        { header.updated && <small style={{marginLeft:'50px', color:'gray'}}>Updated at : {moment(header.updated).format('LLL')}</small> }
        </div>
    )
}

BlogTitle.propTypes = propTypes;

BlogTitle.defaultProps = {
    header: {}
  };

export default BlogTitle;