import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'utils/propTypes';
import moment from 'moment'
import { 
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

const NewDynamicTable = ({ headers, rowData, isOpen, showModal, hideModal, deleteArticle, tempDelKey,  ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <Modal isOpen={isOpen}>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalBody>
            {'Are you sure want to delete this article?' }
        </ModalBody>
        <ModalFooter> 
        <Button outline color="primary" onClick={hideModal}>
          Cancel
        </Button>
        <Button outline color="danger" onClick={() => deleteArticle(tempDelKey, hideModal)}>
          Delete
        </Button>
        </ModalFooter>
      </Modal>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {rowData.map(data => (
          <tr key={data._id}>
            <td className="align-middle text-center">{data.title}</td>
            <td className="align-middle text-center">{moment(data.createdAt).format('LLL')}</td>
            <td className="align-middle text-center">{data.status !== true ? "Draft" : "Published"}</td>
            <td>
              <Link to ={`/blogdetail/${data._id}`}>
                <Button outline color="success" size="sm" style={{marginRight: "5px", marginBottom:"3px"}}>
                  view
                </Button> 
              </Link>
              <Link to ={`/blogedit/${data._id}`}>
                <Button outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                  edit
                </Button>
                </Link> 
                <Button outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}} onClick={() => showModal(data._id)}>
                  delete
                </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

NewDynamicTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    })
  ),
};

NewDynamicTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default NewDynamicTable;
