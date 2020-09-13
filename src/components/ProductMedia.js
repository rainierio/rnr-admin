import React from 'react';
import PropTypes from 'utils/propTypes';
import { Media, Button } from 'reactstrap';

import Typography from 'components/Typography';

const ProductMedia = ({ parentId, keyId, image, title, description, right, years, exit, openEditModal, deleteEducation, editEducation, ...restProps }) => {
  return (
    <Media {...restProps}>
      <Media left>
        <Media
          object
          src={image}
          className="rounded mr-2 mb-2"
          style={{ width: 100, height: 'auto' }}
        />
      </Media>
      <Media body className="overflow-hidden">
        <Media heading tag="h5" className="text-truncate">
          {title}
        </Media>
        <p className="text-muted text-truncate">{description} {years}</p>
      </Media>
      <Media right className="align-self-center">
        {right && typeof right === 'string' ? (
          <Typography type="h5">{right}</Typography>
        ) : (
          right
        )}
      </Media> 
      <Media right className="align-self-center">
        <Button onClick={() => openEditModal("editEducation", restProps.eduData)} outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
          edit
        </Button>
      
        <Button onClick={() => deleteEducation(keyId, parentId)} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
          delete
        </Button>
      </Media> 
    </Media>  
  );
}; 

ProductMedia.propTypes = {
  key: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  right: PropTypes.node,
  years: PropTypes.string,
  openEditModal: PropTypes.func,
  deleteEducation: PropTypes.func,
  editEducation: PropTypes.func
};

export default ProductMedia;
