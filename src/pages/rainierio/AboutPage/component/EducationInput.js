import React, { useState } from 'react';
import { 
  Col,
  Button,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';


const EducationInput = (props) => {
  const [title, setTitle] = useState(props.editEdu.title);
  const [institution, setInstitution] = useState(props.editEdu.institution)
  const [location, setLocation] = useState(props.editEdu.location);
  const [fromDate, setFromDate] = useState(props.editEdu.fromdate);
  const [toDate, setToDate] = useState(props.editEdu.todate);

  const handleSubmit = (edu) => {
    edu.preventDefault()
    if (props.modalType === 'editEducation') {
      const editEducation = {
        parentId: props.parentId,
        edu_id: props.editEdu._id,
        title,
        institution,
        location,
        toDate,
        fromDate
      }
      props.editEducation(editEducation)
    } else {
      const newEducation = {
        parentId: props.parentId,
        title,
        institution,
        location,
        toDate,
        fromDate
      }
      props.addEducation(newEducation)
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
          <Label for="institution">
            Institution
          </Label>
          <Input
            Name="institution"
            Value= {institution}
            onChange={(e) => setInstitution(e.target.value)} 
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
            Value= {fromDate}
            onChange={(e) => setFromDate(e.target.value)} 
            type= "date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="todate">
            To Date
          </Label>
          <Input
            Name="todate"
            Value= {toDate}
            onChange={(e) => setToDate(e.target.value)} 
            type= "date"
          />
        </FormGroup>
        <FormGroup className="mx-auto">
          {
            props.modalType === 'addEducation' ?
            <Col>
              <Button onClick= {(e) => handleSubmit(e)}outline color="primary" size="sm" style={{float:'left'}}>Save</Button>
            </Col>
            :
            <Col>
              <Button onClick= {(e) => handleSubmit(e)}outline color="success" size="sm" style={{float:'left'}}>Save</Button>
            </Col>
          }
        </FormGroup>
      </Form>
    </Col>
  )
}

export default EducationInput;

