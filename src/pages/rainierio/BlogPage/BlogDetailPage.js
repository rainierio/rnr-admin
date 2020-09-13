
import Page from 'components/Page';
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { 
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button
} from 'reactstrap';

//import custom component
import BlogTitle  from "./BlogComponent/BlogTitle"

//import 3rd party component

// import actions
import { aSingleBlog, aLocationChange } from "./blogActions";

class BlogDetailPage extends React.Component {
  componentDidMount() {
    this.props.aSingleBlog(this.props.match.params.postId);
  }

  componentWillUnmount(){
    this.props.aLocationChange();
  }
  
  createMarkup = (data) => {
    return { __html: data}
  } 

  render() {
    const { singlePost } = this.props.blog;
    return (
      <Page title="Blog" breadcrumbs={[{ name: "blog", active: true }]}>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                <BlogTitle 
                  status={singlePost.status}
                  created={singlePost.createdAt}
                  updated={singlePost.updatedAt}
                  title="View Blog Post"
                />
              </CardHeader>
              <CardBody>
                <div>
                  <h3 style={{marginBottom: "30px"}}>{singlePost.title}</h3>
                </div>
                  <div dangerouslySetInnerHTML={ this.createMarkup(singlePost.content)} />  
                <div>
                  <Button outline onClick={this.props.history.goBack} color="primary" size="sm" style={{marginTop: "20px"}}>
                    Back
                  </Button>
                </div>                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
};

// register prop types for the class
BlogDetailPage.propTypes = {
  aSingleBlog: PropTypes.func.isRequired,
  aLocationChange: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

//map the state into props
const mapStateToProps = state => ({
  blog: state.aBlog
});

export default compose(
  connect(
    mapStateToProps,
    { aSingleBlog, aLocationChange }
  )
)(BlogDetailPage);