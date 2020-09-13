import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolios, deletePortfolio} from "./PortfolioActions";
import Page from 'components/Page';
import { 
    Card,
    CardHeader,
    CardBody,
    Col,
    Button,
    Table,
    Fade
  } from 'reactstrap';

export const PortfolioPage = (props) => {
    // Connect to redux store
    const portfolio = useSelector(state => state.portfolios.portfolio);
    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(getPortfolios());
    },[])

    return (
      <Fade in={true}>
        <Page title="Portfolio" breadcrumbs={[{ name: 'portfolio', active: true }]}>      

          {/* Portfolio List  */}
          <Col xl={12} lg={12} md={12}>
            <Card className="mb-3" >
              <CardHeader>
                Portfolio list
              </CardHeader>                
              <CardBody>
                  <Table hover>                  
                    <thead>
                          <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          portfolio && portfolio.map(data => (
                            <tr key={data._id}>
                              <td>{data.title}</td>
                              <td>{data.status}</td>
                              <td>{data.category}</td>
                              <td>{data.company}</td>
                              <td>
                                <Link to={`/portfoliodetail/${data._id}`}>
                                  <Button outline color="info" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                    edit
                                  </Button>
                                </Link>
                                <Button onClick={() => dispatch(deletePortfolio(data._id))} outline color="danger" size="sm" style={{marginRight: "5px", marginBottom: "3px"}}>
                                  delete
                                </Button>
                              </td>    
                            </tr>      
                          ))
                        }
                        </tbody>
                  </Table>
                  <Link to="/addportfolio" >
                    <Button outline color="primary" size="sm" style={{float:'center'}}>
                      Add New
                    </Button>
                  </Link>
              </CardBody>
            </Card>
          </Col>
        </Page>
      </Fade>
    )
} 

export default PortfolioPage
