import React, { useState } from 'react';
import { 
  Col,
  Button,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';

const ProjectInput = (props) => {
  const [projectname, setProjectName] = useState(props.editProj.projectname);
  const [projectdetail, setProjectDetail] = useState(props.editProj.projectdetail);
  const [company, setCompany] = useState(props.editProj.company);
  const [projectdate, setProjectDate] = useState(props.editProj.projectdate);
  
  const handleSubmit = (project) => {
    project.preventDefault()
    if (props.modalType === 'editProject') {
      const editProj = {
        parentId: props.parentId,
        _id: props.editProj._id,
        projectname,
        projectdetail,
        company,
        projectdate
      }
      props.editProjectSave(editProj)
    } else {
      const newProj = {
        parentId: props.parentId,
        projectname,
        projectdetail,
        company,
        projectdate
      }
      props.addProj(newProj)
    }
    props.closeModal("Close")
  }


  return (
    <Col xl={12} lg={12} md={12}>
      <Form > 
        <FormGroup>
          <Label for="title">
            Project Name
          </Label>
          <Input
            Name="projectname"
            Value= {projectname}
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectdetail">
            Project Detail
          </Label>
          <Input
            Name="projectdetail"
            defaultValue = {projectdetail}
            onChange={(e) => setProjectDetail(e.target.value)}
            type= "textarea" 
          />
        </FormGroup>
        <FormGroup>
          <Label for="company">
            Company
          </Label>
          <Input
            Name="company"
            Value= {company}
            onChange={(e) => setCompany(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="projectdate">
            To Date
          </Label>
          <Input
            Name="projectdate"
            Value= {projectdate}
            onChange={(e) => setProjectDate(e.target.value)} 
            type= "date"
          />
        </FormGroup>
        <FormGroup className="mx-auto">
          {
            props.modalType === 'addProject' ?
            <Col>
              <Button onClick= {(e) => handleSubmit(e)} outline color="primary" size="sm" style={{float:'left'}}>Save</Button>
            </Col>
            :
            <Col>
              <Button onClick= {(e) => handleSubmit(e)} outline color="success" size="sm" style={{float:'left'}}>Save</Button>
            </Col>
          }
        </FormGroup>
      </Form>
    </Col>
  )
}

export default ProjectInput;

