import React, { useState } from 'react';
import { 
  Col,
  Button,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';


const WorkInput = (props) => {
  const [title, setTitle] = useState(props.editWork.title);
  const [company, setCompany] = useState(props.editWork.company);
  const [jobdesc, setJobdesc] = useState(props.editWork.jobdesc);
  const [location, setLocation] = useState(props.editWork.location);
  const [fromdate, setFromdate] = useState(props.editWork.fromdate);
  const [todate, setTodate] = useState(props.editWork.todate);

  const handleSubmit = (work) => {
    work.preventDefault()
    if (props.modalType === 'editWork') {
      const editWork = {
        parentId: props.parentId,
        _id: props.editWork._id,
        title,
        company,
        jobdesc,
        location,
        fromdate,
        todate
      }
      props.editWorkSave(editWork)
    } else {
      const newWork = {
        parentId: props.parentId,
        title,
        company,
        jobdesc,
        location,
        fromdate,
        todate
      }
      props.addWork(newWork)
    }
    props.closeModal("Close")
  }


  return (
    <Col xl={12} lg={12} md={12}>
      <Form > 
        <FormGroup>
          <Label for="title">
            Title
          </Label>
          <Input
            Name="title"
            Value= {title}
            onChange={(e) => setTitle(e.target.value)} 
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
          <Label for="jobdesc">
            Job Description
          </Label>
          <Input
            Name="jobdesc"
            
            defaultValue = {jobdesc}
            onChange={(e) => setJobdesc(e.target.value)}
            type= "textarea" 
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">
            Location
          </Label>
          <Input
            Name="location"
            Value= {location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fromdate">
            From Date
          </Label>
          <Input
            Name="fromdate"
            Value= {fromdate}
            onChange={(e) => setFromdate(e.target.value)} 
            type= "date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="todate">
            To Date
          </Label>
          <Input
            Name="todate"
            Value= {todate}
            onChange={(e) => setTodate(e.target.value)} 
            type= "date"
          />
        </FormGroup>
        <FormGroup className="mx-auto">
          {
            props.modalType === 'addWork' ?
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

export default WorkInput;

