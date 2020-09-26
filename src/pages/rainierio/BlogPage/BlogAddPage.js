import Page from 'components/Page';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ImageUpload } from './DropZone';
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Form,
  FormText,
  FormGroup,
  Row,
  Label,
  Button,
  Input,
} from 'reactstrap';

//import custom component
import BlogTitle from './BlogComponent/BlogTitle';

//import 3rd party component
import { Editor } from '@tinymce/tinymce-react';

// import actions
import {
  createArticle,
  updateAddField,
  aLocationChange,
  disableServResp,
} from './blogActions';

class BlogAddPage extends React.Component {
  state = {
    header_img: [],
  };
  componentDidMount() {}

  handleChange = e => {
    if (e.target.name === 'status') {
      this.props.updateAddField(e.target.name, !this.props.addPost.status);
    } else {
      this.props.updateAddField(e.target.name, e.target.value);
    }
  };

  setImages = img => {
    this.setState({
      header_img: img,
    });
  };

  handleEditorChange = (content, editor) => {
    this.props.updateAddField(editor.id, content);
  };

  toBlogList = () => this.props.history.push('/bloglist');

  onSubmitClick = post => {
    post.preventDefault();

    //data preparation
    const sendData = {
      title: this.props.addPost.title,
      content: this.props.addPost.content,
      status: this.props.addPost.status || false,
      category: this.props.addPost.category,
      tags: this.props.addPost.tags,
      header_img: this.state.header_img,
    };
    //invoke add article function
    this.props.createArticle(sendData);
  };

  toggleModal = e => {
    this.props.disableServResp();
    if (this.props.updatedPost.serverMsg) {
      this.toBlogList();
    }
  };

  render() {
    const { addPost, addPostResp } = this.props;
    if (addPostResp !== undefined && addPostResp !== '') {
      alert(addPostResp);
      this.props.disableServResp();
      this.toBlogList();
    }

    return (
      <Page title="Blog" breadcrumbs={[{ name: 'blog', active: true }]}>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                <BlogTitle
                  status={addPost.status}
                  title="Blog Post"
                  handleOnchange={this.handleChange}
                />
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmitClick}>
                  <FormGroup>
                    <div>
                      <Input
                        Value={addPost.title}
                        placeholder="title"
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
                        value={addPost.content}
                        init={{
                          file_picker_callback: function (
                            callback,
                            value,
                            meta,
                          ) {
                            // Provide file and text for the link dialog
                            if (meta.filetype == 'file') {
                              callback('mypage.html', { text: 'My text' });
                            }
                            // Provide image and alt text for the image dialog
                            if (meta.filetype == 'image') {
                              callback('myimage.jpg', { alt: 'My alt text' });
                            }

                            // Provide alternative source and posted for the media dialog
                            if (meta.filetype == 'media') {
                              callback('movie.mp4', {
                                source2: 'alt.ogg',
                                poster: 'image.jpg',
                              });
                            }
                          },
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
                        Value={addPost.category}
                        placeholder="category"
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
                        Value={addPost.tags}
                        placeholder="tags"
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
                    <div>
                      <Label for="images">Header Image</Label>
                      <ImageUpload name="images" setImages={this.setImages} />
                    </div>
                    <FormText color="muted">
                      Image size must be 640 X 425
                    </FormText>
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
                      onClick={this.onSubmitClick}
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
BlogAddPage.propTypes = {
  createArticle: PropTypes.func.isRequired,
  updateAddField: PropTypes.func.isRequired,
  aLocationChange: PropTypes.func.isRequired,
  disableServResp: PropTypes.func.isRequired,
};

//map the state into props
const mapStateToProps = state => ({
  addPost: state.aBlog.addPost,
  addPostResp: state.aBlog.addPostResp,
  loading: state.aBlog.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createArticle,
      updateAddField,
      aLocationChange,
      disableServResp,
    },
    dispatch,
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  BlogAddPage,
);
