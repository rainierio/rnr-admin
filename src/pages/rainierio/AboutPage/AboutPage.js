import Page from 'components/Page';
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductMedia from '../../../components/ProductMedia';
import { bindActionCreators } from "redux";
import { 
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Fade
} from 'reactstrap';

//import custom component
import EducationInput from "./component/EducationInput";
import WorkInput from "./component/WorkInput";
import ProjectInput from "./component/ProjectInput";

//import 3rd party component

// import actions
import { 
  //basic info actions
  getBasicInfo,
  updateBasicInfo,

  //education actions
  addEducation,
  deleteEducation,
  editEducation,

  //work actions
  addWork,
  deleteWork,
  editWork,

  //project actions
  addProject,
  deleteProject,
  editProject,

  // generic actions
  deleteResponse,
  updateField
  } from "./AboutPageActions";

class AboutPage extends React.Component {
  state = {
    modal: false,
    modalTitle: '',
    modalType: '',
    editEdu: {},
    editWork: {},
    editProj:{},
    backdrop: true,
    EducationModal: false,
    WorkModal: false,
    ProjectModal: false
  }

  toggle = modalType => () => {
    if(!modalType){
      return this.setState({
        modal:!this.state.modal
      })
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`]
    })
  }

  componentDidMount(){
    this.props.getBasicInfo()
  }

  onSubmitClick = (data)  => {
    data.preventDefault();
    //data preparation
    const updatedInfo = {
      id: this.props.basicInfo.basicInfo._id,
      name: this.props.basicInfo.basicInfo.name,
      occupation: this.props.basicInfo.basicInfo.occupation,
      email: 'rainierletidjawa@gmail.com',
      aboutdesc: this.props.basicInfo.basicInfo.aboutdesc,
    }
    
    this.props.updateBasicInfo(updatedInfo)
  }

  handleChange = (e) => {
      this.props.updateField(e.target.name, e.target.value);  
  }

  toggle = (modal, editData) => {
    switch (modal) {
      case "addEducation":
        this.setState({
          modal: true, 
          EducationModal: true, 
          modalType: modal,
          modalTitle: 'Add New Education'})
        break;
      
      case "editEducation":
        this.setState({
          modal: true,
          EducationModal: true, 
          modalType: modal,
          editEdu: editData,
          modalTitle: 'Edit Education'})
        break;
      
      case "addWork":
        this.setState({
          modal: true, 
          WorkModal: true, 
          modalType: modal,
          modalTitle: 'Add New Work'})
        break;
      
      case "editWork":
        this.setState({
          modal: true,
          WorkModal: true, 
          modalType: modal,
          editWork: editData,
          modalTitle: 'Edit Work'})
        break;    

      case "addProject":
          this.setState({
            modal: true,
            ProjectModal: true,
            modalType: modal,
            modalTitle: 'Add New Project'
          })
        break;

      case "editProject":
          this.setState({
            modal: true,
            ProjectModal: true,
            modalType: modal,
            editProj:editData,
            modalTitle: 'Edit Project'
          })
        break;

      case "Close":
        this.setState({
          modal: false, 
          EducationModal: false, 
          WorkModal: false, 
          ProjectModal: false, 
          modalTitle:'',
          editEdu: {},
          editWork: {},
          editProj: {}
        })
        break;

      default:
        break;
    }

  }

  render() {
    const { basicInfo, msg, errMsg } = this.props.basicInfo
    let RenderModal = null;
    if(this.state.EducationModal === true){
      RenderModal = <EducationInput addEducation = {this.props.addEducation} editEducation = {this.props.editEducation} closeModal = {this.toggle} parentId = {basicInfo._id} modalType = {this.state.modalType} editEdu= {this.state.modalType === 'editEducation' ? this.state.editEdu : ''}  /> 
    }else if(this.state.ProjectModal === true ) {
      RenderModal = <ProjectInput addProj = {this.props.addProject} editProjectSave = {this.props.editProject} parentId = {basicInfo._id} closeModal = {this.toggle} modalType = {this.state.modalType} editProj = {this.state.modalType === 'editProject' ? this.state.editProj : ''}  />
    }else if(this.state.WorkModal === true){
      RenderModal =  <WorkInput addWork = {this.props.addWork} editWorkSave = {this.props.editWork} parentId = {basicInfo._id} closeModal = {this.toggle} modalType = {this.state.modalType} editWork = {this.state.modalType === 'editWork' ? this.state.editWork : ''}  />
    }

    return (
      <Fade in={true}>
        <Page title="About" breadcrumbs={[{ name: 'about', active: true }]}>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle()}  
          >
            <ModalHeader>
              {this.state.modalTitle}
            </ModalHeader>
            <ModalBody>
              {RenderModal}
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.toggle("Close")} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                back
              </Button>
            </ModalFooter>
          </Modal>

          {/* Flash message modal  */}
          <Modal
            isOpen={msg || errMsg}
            className={this.props.className}>
            <ModalHeader>Server Response</ModalHeader>
            <ModalBody>
                {msg ? msg : errMsg }
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.props.deleteResponse} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                ok
              </Button>
            </ModalFooter>
          </Modal>
          <Row>
            {/* Basic Information section  */}
            <Col xl={6} lg={12} md={12}>
              <Card className="mb-3" >
                <CardHeader>
                  Basic information
                </CardHeader>                
                <CardBody>
                    <Form onSubmit={this.onSubmitClick}> 
                      <FormGroup>
                        <Label for="name">
                          Name
                        </Label>
                        <Input
                          Name="name" 
                          Value={basicInfo.name}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="occupation">
                          Occupation
                        </Label>
                        <Input
                          Name="occupation" 
                          Value={basicInfo.occupation}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for = "aboutDesc">
                          About description
                        </Label>
                        <Input
                          Type= "textarea"
                          Name="aboutdesc" 
                          Value={basicInfo.aboutdesc}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="mx-auto">
                        <Col>
                          <Button onClick ={this.onSubmitClick.bind(this)} outline color="primary" size="sm" style={{float:'left'}}>Save</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                </CardBody>
              </Card>
            </Col>
            {/* Education section  */}
            <Col xl={6} lg={12} md={12}>
              <Card className="mb-3" >
                <CardHeader>
                  Education
                </CardHeader>                
                <CardBody>
                  <Col>
                  {
                    basicInfo.education && basicInfo.education.map(data => (
                      <ProductMedia
                        parentId={basicInfo._id}
                        keyId={data._id}
                        image={"image"}
                        title={data.title}
                        description={data.institution}
                        years={data.fromdate+' - '+data.todate}
                        exit={true}
                        eduData = {data}
                        openEditModal= {this.toggle}
                        deleteEducation={this.props.deleteEducation} 
                        editEducation={this.props.editEducation} 
                      />
                    ))
                  }
                  </Col>
                  <Button onClick={() => this.toggle("addEducation")} outline color="primary" size="sm" style={{float:'center'}}>
                    Add New
                  </Button>
                </CardBody>
              </Card>
            </Col>
            {/* Work experience section  */}
            <Col xl={12} lg={12} md={12}>
              <Card className="mb-3" >
                <CardHeader>
                  Work experience
                </CardHeader>                
                <CardBody>
                    <Table hover>                  
                      <thead>
                            <tr>
                              <th>Title</th>
                              <th>Company</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              basicInfo.work && basicInfo.work.map(data => (
                                <tr key={data.work_id}>
                                  <td>{data.title}</td>
                                  <td>{data.company}</td>
                                  <td>{data.fromdate+' - ' +data.todate}</td>
                                  <td>
                                    <Button onClick={() => this.toggle("editWork", data)} outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      edit
                                    </Button>
                                    <Button onClick={() => this.props.deleteWork(data._id, basicInfo._id)} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      delete
                                    </Button>
                                  </td>    
                                </tr>      
                              ))
                            }
                          </tbody>
                    </Table>
                    <Button onClick={() => this.toggle("addWork")} outline color="primary" size="sm" style={{float:'center'}}>
                      Add New
                    </Button>
                </CardBody>
              </Card>
            </Col>
            
            {/* Project List  */}
            <Col xl={12} lg={12} md={12}>
              <Card className="mb-3" >
                <CardHeader>
                  Project List
                </CardHeader>                
                <CardBody>
                    <Table hover>                  
                      <thead>
                            <tr>
                              <th>Project Name</th>
                              <th>Project Company</th>
                              <th>Project Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                              basicInfo.project && basicInfo.project.map(data => (
                                <tr key={data._id}>
                                  <td>{data.projectname}</td>
                                  <td>{data.company}</td>
                                  <td>{data.projectdate}</td>
                                  <td>
                                    <Button onClick={() => this.toggle("editProject", data)} outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      edit
                                    </Button>
                                    <Button onClick={() => this.props.deleteProject(data._id, basicInfo._id)} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      delete
                                    </Button>
                                  </td>    
                                </tr>      
                              ))
                            }
                          </tbody>
                    </Table>
                    <Button onClick={() => this.toggle("addProject")} outline color="primary" size="sm" style={{float:'center'}}>
                      Add New
                    </Button>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Page>
      </Fade>
    );
  }
};

// register prop types for the class
AboutPage.propTypes = {
  getBasicInfo: PropTypes.func.isRequired,
  updateBasicInfo: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,
  editEducation: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  addWork: PropTypes.func.isRequired,
  deleteWork: PropTypes.func.isRequired,
  editWork: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  editProject: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
};

//map the state into props
const mapStateToProps = state => (
  { 
    basicInfo: state.basicInfo
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    getBasicInfo,
    updateBasicInfo,
    deleteResponse,
    addEducation,
    editEducation,
    deleteEducation,
    addWork,
    deleteWork,
    editWork,
    addProject,
    deleteProject,
    editProject,
    updateField
  }, dispatch)
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(AboutPage);