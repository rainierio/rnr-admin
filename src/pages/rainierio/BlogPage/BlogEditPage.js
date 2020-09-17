import Page from 'components/Page';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { MdClose } from 'react-icons/md';
import { ImageUpload } from './DropZone';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  FormText,
  CardImg,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

//import custom component
import BlogTitle from './BlogComponent/BlogTitle';

//import 3rd party component
import { Editor } from '@tinymce/tinymce-react';

// import actions
import {
  aSingleBlog,
  aUpdatePost,
  aUpdateField,
  aLocationChange,
  removeImg,
  disableServResp,
} from './blogActions';

class BlogEditPage extends React.Component {
  state = {
    header_img: [],
  };
  componentDidMount() {
    this.props.aSingleBlog(this.props.match.params.postId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post.header_img !== this.props.post.header_img) {
      this.setState({
        header_img: this.props.post.header_img,
      });
    }
  }

  componentWillUnmount() {
    this.props.aLocationChange();
  }

  handleChange = e => {
    if (e.target.name === 'status') {
      this.props.aUpdateField(e.target.name, !this.props.post.status);
    } else {
      this.props.aUpdateField(e.target.name, e.target.value);
    }
  };

  handleEditorChange = (content, editor) => {
    this.props.aUpdateField(editor.id, content);
  };

  setImages = img => {
    this.setState({
      header_img: img,
    });
  };

  toBlogList = () => this.props.history.push('/bloglist');

  onSubmitClick = post => {
    post.preventDefault();

    //data preparation
    const updatedInput = {
      id: this.props.match.params.postId,
      title: this.props.post.title,
      content: this.props.post.content,
      status: this.props.post.status,
      category: this.props.post.category,
      tags: this.props.post.tags,
      header_img: this.state.header_img,
    };
    this.props.aUpdatePost(updatedInput);
  };

  toggleModal = () => {
    this.props.disableServResp();
    if (this.props.updatedPost.serverMsg) {
      this.toBlogList();
    }
  };

  render() {
    const singlePost = this.props.post;
    const loadImage = singlePost.header_img;
    const showImage = loadImage && (
      <Col xs="auto" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <CardImg
          src={loadImage}
          style={{ width: 'auto', height: 90, marginLeft: 5, marginTop: 5 }}
        />
        <div>
          <Button onClick={() => this.props.removeImg()}>
            <MdClose />
          </Button>
        </div>
      </Col>
    );
    const { serverResp, serverMsg, serverErr } = this.props.updatedPost;

    return (
      <Page title="Blog" breadcrumbs={[{ name: 'blog', active: true }]}>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                {/* Blog Posts 
                <CheckboxToggle name="status" label="Published" value={singlePost.status } onChange={this.handleChange} style={{float: 'right'}}/>  */}
                <BlogTitle
                  status={singlePost.status}
                  title="Edit Blog Post"
                  created={singlePost.createdAt}
                  updated={singlePost.updatedAt}
                  handleOnchange={this.handleChange}
                />
              </CardHeader>
              <CardBody>
                <Modal isOpen={serverResp} className={this.props.className}>
                  <ModalHeader>Server Response</ModalHeader>
                  <ModalBody>{serverMsg ? serverMsg : serverErr}</ModalBody>
                  <ModalFooter>
                    {this.props.updatedPost.serverMsg ? (
                      <Button
                        outline
                        color="primary"
                        onClick={this.toggleModal}
                      >
                        Ok
                      </Button>
                    ) : (
                      <Button outline color="danger" onClick={this.toggleModal}>
                        Back
                      </Button>
                    )}
                  </ModalFooter>
                </Modal>
                <Form onSubmit={this.onSubmitClick}>
                  <FormGroup>
                    <div>
                      <Input
                        Value={singlePost.title}
                        Type="text"
                        Name="title"
                        bsSize="lg"
                        Style={{ marginBottom: '30px' }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <Editor
                        name="content"
                        id="content"
                        apiKey="8ubcryf7abla9utxbii92w2drh8hz8rjn0aes5216kek6h77"
                        value={singlePost.content}
                        init={{
                          height: 500,
                          menubar: true,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                          ],
                          toolbar:
                            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                        }}
                        onEditorChange={this.handleEditorChange}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <Input
                        Value={singlePost.category}
                        Type="text"
                        Name="category"
                        bsSize="lg"
                        Style={{ marginBottom: '30px' }}
                        onChange={this.handleChange}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <Input
                        Value={singlePost.tags}
                        Type="text"
                        Name="tags"
                        bsSize="lg"
                        Style={{ marginBottom: '30px' }}
                        onChange={this.handleChange}
                      />
                      <FormText color="muted">
                        Separate the tag with comma
                      </FormText>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Card className="flex-row">
                      <CardBody>
                        <Row>{showImage}</Row>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <Label for="images">Header Image</Label>
                      <ImageUpload
                        name="images"
                        initialImage={this.props.post.header_img}
                        setImages={this.setImages}
                      />
                      <FormText color="muted">
                        Image size must be 640 X 425
                      </FormText>
                    </div>
                  </FormGroup>
                  <div>
                    <Button
                      outline
                      onClick={this.toBlogList}
                      color="primary"
                      size="sm"
                      style={{ marginTop: '20px', marginRight: '10px' }}
                    >
                      Back
                    </Button>
                    <Button
                      outline
                      onClick={this.onSubmitClick.bind(this)}
                      color="success"
                      size="sm"
                      style={{ marginTop: '20px' }}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

// register prop types for the class
BlogEditPage.propTypes = {
  aSingleBlog: PropTypes.func.isRequired,
  aUpdatePost: PropTypes.func.isRequired,
  removeImg: PropTypes.func.isRequired,
  aUpdateField: PropTypes.func.isRequired,
  aLocationChange: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  disableServResp: PropTypes.func.isRequired,
};

//map the state into props
const mapStateToProps = state => ({
  post: state.aBlog.singlePost,
  loading: state.aBlog.loading,
  title: state.aBlog.singlePost.title,
  updatedPost: state.aBlog.updatedPost,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      aSingleBlog,
      aUpdatePost,
      aUpdateField,
      removeImg,
      aLocationChange,
      disableServResp,
    },
    dispatch,
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  BlogEditPage,
);
