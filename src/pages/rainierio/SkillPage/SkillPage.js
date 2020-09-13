import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getskills, addskill, editskill, deleteskill} from "./SkillActions";
import Page from 'components/Page';
import { 
    Card,
    CardHeader,
    CardBody,
    Col,
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

export const Skillpage = () => {
    // State declaration
    const [modalStatus, setModalStatus] = useState(false);
    const [modalType, setModalType] = useState();
    const [keyId, setKeyId] = useState();
    const [skillname, setSkillName] = useState();
    const [category, setCategory] = useState();
    const skill = useSelector(state => state.skills.skill);
    
    const dispatch = useDispatch();
    
    const showModal = (modaltype, data) => {
        switch (modaltype) {
            case 'addSkill':
                setModalStatus(true)
                setModalType(modaltype)
                break;

            case 'editSkill':
                setKeyId(data._id)
                setSkillName(data.skillname)
                setCategory(data.category)
                setModalStatus(true)
                setModalType(modaltype)
                break;
            
            case 'close':
                setModalStatus(false)
                setKeyId()
                setSkillName()
                setCategory()
                setModalType()
                break

            default:
                break;
        }
    }

    const handleSubmit = () => {
        switch (modalType) {
            case 'addSkill':
                const addedskill = { skillname, category }
                dispatch(addskill(addedskill))
                showModal('close')
                break;

            case 'editSkill':
                const editedskill = { keyId,skillname, category }
                dispatch(editskill(editedskill))
                showModal('close')
                break;
        
            default:
                break;
        }

    }
    
    useEffect(() => {
        dispatch(getskills());
    },[])

    return (
      <Fade in={true}>
        <Page title="Skill" breadcrumbs={[{ name: 'skill', active: true }]}>      
              {/* Start modal area  */}
              <Modal isOpen={modalStatus} toggle={() => showModal('close')}>
                  <ModalHeader>
                      {/* {this.state.modalTitle} */}
                  </ModalHeader>
                  <ModalBody>
                  <Col xl={12} lg={12} md={12}>
                      <Form > 
                          <FormGroup>
                          <Label for="skillname">
                              Skill Name
                          </Label>
                          <Input
                              Name="skillname"
                              Value= {skillname}
                              onChange={(e) => setSkillName(e.target.value)} 
                          />
                          </FormGroup>
                          <FormGroup>
                          <Label for="category">
                              category
                          </Label>
                          <Input
                              Name="category"
                              Value= {category}
                              onChange={(e) => setCategory(e.target.value)} 
                          />
                          </FormGroup>
                          <FormGroup className="mx-auto">
                          {
                              modalType === 'addSkill' ?
                              <Col>
                                  <Button onClick= {(e) => handleSubmit(e)} outline color="primary" size="sm" style={{float:'left'}}>Add</Button>
                              </Col>
                              :
                              <Col>
                                  <Button onClick= {(e) => handleSubmit(e)} outline color="success" size="sm" style={{float:'left'}}>Save</Button>
                              </Col>
                          }
                          </FormGroup>
                      </Form>
                      </Col>
                  </ModalBody>
                  <ModalFooter>
                      <Button onClick={() => showModal('close')} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                      back
                      </Button>
                  </ModalFooter>
              </Modal>  
              {/* end modal area  */}
            
            {/* Project List  */}
            <Col xl={12} lg={12} md={12}>
              <Card className="mb-3" >
                <CardHeader>
                  Skill list
                </CardHeader>                
                <CardBody>
                    <Table hover>                  
                      <thead>
                            <tr>
                              <th>Skill Name</th>
                              <th>Category</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                              skill && skill.map(data => (
                                <tr key={data._id}>
                                  <td>{data.skillname}</td>
                                  <td>{data.category}</td>
                                  <td>
                                    <Button onClick={() => showModal("editSkill", data)} outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      edit
                                    </Button>
                                    <Button onClick={() => dispatch(deleteskill(data._id))} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                      delete
                                    </Button>
                                  </td>    
                                </tr>      
                              ))
                            }
                          </tbody>
                    </Table>
                    <Button onClick={() => showModal("addSkill")} outline color="primary" size="sm" style={{float:'center'}}>
                      Add New
                    </Button>
                </CardBody>
              </Card>
            </Col>
        </Page>
      </Fade>
      )
} 

export default Skillpage
