
import Page from 'components/Page';
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Fade,
  Row
} from 'reactstrap';

//import component
import NewDynamicTable from '../../../components/NewDynamicTable';

// import actions
import { aGetBlog, deleteArticle, disableServResp } from "./blogActions";

class BlogListPage extends React.Component {
  state = {
    isOpen: false,
    tempDelKey: ''
  }

  componentDidMount() {
    this.props.aGetBlog();
  }

  showModal = (id) => {
    this.setState({isOpen: true, tempDelKey: id})
  }

  deleteArtButton = (id, hideModal) => {
    this.props.deleteArticle(id)
    hideModal()
  }

  hideModal = () => {
    this.setState({isOpen: false, tempDelKey:''})
  }

  render() {
    const { blog, errInfo, respMsg } = this.props.blog;

      return (
      <Fade in={true}>
        <Page title="Blog" breadcrumbs={[{ name: 'blog', active: true }]}>
          <Row>
            <Col>
              <Card className="mb-3">
                <CardHeader>
                  <div style={{float:'left', marginTop:'3px'}}>
                    Blog Posts
                  </div>
                  <Link to ={`/blogadd/`}>
                    <Button outline color="primary" size="sm" style={{float:'right'}}>
                      New Article
                    </Button>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Alert color="danger" isOpen={errInfo} toggle={this.props.disableServResp}>
                    {respMsg}
                  </Alert>
                  <NewDynamicTable 
                    headers={[
                      'Title',
                      'Created at',
                      'Status',
                      'Actions'
                    ]}
                    rowData = {blog}
                    isOpen = {this.state.isOpen}
                    showModal = {this.showModal}
                    hideModal = {this.hideModal}
                    tempDelKey = {this.state.tempDelKey}
                    deleteArticle = {this.deleteArtButton}
                  />
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
BlogListPage.propTypes = {
  aGetBlog: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  disableServResp: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

//map the state into props
const mapStateToProps = state => ({
  blog: state.aBlog,
});

//map dispatch to props
const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    aGetBlog,
    deleteArticle,
    disableServResp
  }, dispatch)
)

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BlogListPage);