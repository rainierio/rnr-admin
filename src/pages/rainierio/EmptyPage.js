
import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const BlogListPage = () => {
  return (
    <Page title="BlogList" breadcrumbs={[{ name: 'blog', active: true }]}>
      
    </Page>
  );
};

export default BlogListPage;
