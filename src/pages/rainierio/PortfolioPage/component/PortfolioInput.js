import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Page from 'components/Page';
import { ImageUpload } from './DropZone';
import { MdClose } from 'react-icons/md';
import {
  getSinglePortfolio,
  addPortfolio,
  editPortfolio,
  setInitial,
  removeImg,
} from '../PortfolioActions';
import {
  Col,
  Row,
  Container,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Fade,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  FormFeedback,
  Alert,
} from 'reactstrap';

const PortfolioInput = props => {
  const singlePortfolio = useSelector(
    state => state.portfolios.singlePortfolio,
  );
  const errorMsg = useSelector(state => state.portfolios.errorMsg);
  const successMsg = useSelector(state => state.portfolios.successMsg);
  const { register, handleSubmit, errors, setValue } = useForm();
  const dispatch = useDispatch();

  const [id] = useState(props.match.params.id);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [alert, setAlert] = useState(false);

  // Define fetch data function
  const getPortfolio = useCallback(() => {
    dispatch(getSinglePortfolio(id));
  });

  // Invoke data fetching function
  useEffect(() => {
    // fetch single data from backend
    if (props.match.params.id) {
      getPortfolio();
    }

    // Invoked when unmounted
    return () => {
      dispatch(setInitial());
    };
  }, []);

  // pre-filled form in edit page
  useEffect(() => {
    if (singlePortfolio.hasOwnProperty('title')) {
      setTitle(singlePortfolio.title);
      setStatus(singlePortfolio.status);
      setDescription(singlePortfolio.description);
      setCategory(singlePortfolio.category);
      setCompany(singlePortfolio.company);
      setUrl(singlePortfolio.url);
      setUploadedImages(singlePortfolio.image);
    }
  }, [singlePortfolio]);

  // Show uploaded image
  const showImage =
    uploadedImages &&
    uploadedImages.map(img => (
      <Col xs="auto" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <CardImg
          src={process.env.PUBLIC_URL + '/portfolio/' + img}
          style={{ width: 'auto', height: 90, marginLeft: 5, marginTop: 5 }}
        />
        <div>
          <Button onClick={() => dispatch(removeImg(img))}>
            <MdClose />
          </Button>
        </div>
      </Col>
    ));

  //Handle form submit
  const onSubmit = data => {
    const editedData = {
      ...data,
      uploadedImages,
    };
    if (props.match.url === '/addportfolio') {
      //add new portfolio
      dispatch(addPortfolio(data));
    } else {
      // Edit portfolio
      dispatch(editPortfolio(id, editedData));
    }
  };

  // Handling success and error response from backend
  useEffect(() => {
    if (Object.keys(errorMsg).length !== 0) {
      setAlert(true);
    }

    if (Object.keys(successMsg).length !== 0) {
      dispatch(setInitial());
      props.history.push('/portfolio');
    }
  }, [errorMsg, successMsg]);

  // Drop-zone handling
  useEffect(() => {
    setValue('ImageUpload', images);
  }, [images, setValue]);

  useEffect(() => {
    register('ImageUpload');
  }, [register]);

  return (
    <Fade in={true}>
      <Page
        title="Portfolio"
        breadcrumbs={[{ name: 'portfolio', active: true }]}
      >
        <Container>
          <Col xl={{ size: 8, offset: 1 }} lg={{ size: 8, offset: 1 }} md={12}>
            <Card className="mb-3">
              <CardHeader>Detail Portfolio</CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Start alert */}
                  <Alert
                    focus
                    color="danger"
                    isOpen={alert}
                    toggle={() => setAlert(false)}
                  >
                    {' '}
                    {errorMsg}{' '}
                  </Alert>
                  {/* End alert */}
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                      Name="title"
                      defaultValue={title}
                      invalid={errors.title}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"Title is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="status">status</Label>
                    <Input
                      Name="status"
                      defaultValue={status}
                      invalid={errors.status}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"Status is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">description</Label>
                    <Input
                      type="textarea"
                      Name="description"
                      defaultValue={description}
                      invalid={errors.description}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"Description is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="category">category</Label>
                    <Input
                      Name="category"
                      defaultValue={category}
                      invalid={errors.category}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"Category is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="company">company</Label>
                    <Input
                      Name="company"
                      defaultValue={company}
                      invalid={errors.company}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"Company is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="url">url</Label>
                    <Input
                      Name="url"
                      defaultValue={url}
                      invalid={errors.url}
                      innerRef={register({ required: true })}
                    />
                    <FormFeedback>"URL is required"</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Card className="flex-row">
                      <CardBody>
                        <Row>{showImage}</Row>
                      </CardBody>
                    </Card>
                  </FormGroup>

                  <FormGroup>
                    <Card>
                      <CardBody>
                        <ImageUpload
                          name="images"
                          loadImage={images}
                          setImages={setImages}
                          ref={register({ required: false })}
                        />
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup className="mx-auto">
                    <Col>
                      <Button
                        onClick={() => {
                          props.history.push('/portfolio');
                        }}
                        outline
                        color="danger"
                        size="sm"
                        style={{ float: 'left', marginRight: '10px' }}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        outline
                        color={
                          props.match.url !== '/addportfolio'
                            ? 'success'
                            : 'primary'
                        }
                        size="sm"
                        style={{ float: 'left' }}
                      >
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Page>
    </Fade>
  );
};

export default PortfolioInput;
