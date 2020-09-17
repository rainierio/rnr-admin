import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import AuthPageNew from 'pages/rainierio/AuthPage/AuthPageNew'; // New auth page
import withAuth from 'hocs/withAuth'; // withAuth HOC
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';
import './styles/reduction.scss';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

// rainierio blog section page
const BlogListPage = React.lazy(() =>
  import('pages/rainierio/BlogPage/BlogListPage'),
);
const BlogAddPage = React.lazy(() =>
  import('pages/rainierio/BlogPage/BlogAddPage'),
);
const BlogDetailPage = React.lazy(() =>
  import('pages/rainierio/BlogPage/BlogDetailPage'),
);
const BlogEditPage = React.lazy(() =>
  import('pages/rainierio/BlogPage/BlogEditPage'),
);
const NotFoundPage = React.lazy(() => import('pages/rainierio/NotFoundPage'));
const UserProfile = React.lazy(() =>
  import('pages/rainierio/AuthPage/UserProfile'),
);
const AboutPage = React.lazy(() =>
  import('pages/rainierio/AboutPage/AboutPage'),
);
const SkillsPage = React.lazy(() =>
  import('pages/rainierio/SkillPage/SkillPage'),
);
const PortfolioPage = React.lazy(() =>
  import('pages/rainierio/PortfolioPage/PortfolioPage'),
);
const PortfolioDetail = React.lazy(() =>
  import('pages/rainierio/PortfolioPage/component/PortfolioInput'),
);

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

var hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Router history={hist}>
            <Provider store={store}>
              <Switch>
                <LayoutRoute
                  exact
                  path="/login-old"
                  layout={EmptyLayout}
                  component={props => (
                    <AuthPage {...props} authState={STATE_LOGIN} />
                  )}
                />
                <LayoutRoute
                  exact
                  path="/signup"
                  layout={EmptyLayout}
                  component={props => (
                    <AuthPage {...props} authState={STATE_SIGNUP} />
                  )}
                />

                {/* rainierio AUTH section router */}
                <LayoutRoute
                  exact
                  path="/userauth"
                  layout={EmptyLayout}
                  component={props => (
                    <AuthPageNew {...props} authState={STATE_LOGIN} />
                  )}
                />

                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path="/" component={withAuth(DashboardPage)} />
                    <div>
                      {/* <Route exact path="/login-modal" component={AuthModalPage} />
                    <Route exact path="/buttons" component={ButtonPage} />
                    <Route exact path="/cards" component={CardPage} />
                    <Route exact path="/widgets" component={WidgetPage} />
                    <Route exact path="/typography" component={TypographyPage} />
                    <Route exact path="/alerts" component={AlertPage} />
                    <Route exact path="/tables" component={TablePage} />
                    <Route exact path="/badges" component={BadgePage} />
                    <Route exact path="/button-groups" component={ButtonGroupPage}/>
                    <Route exact path="/dropdowns" component={DropdownPage} />
                    <Route exact path="/progress" component={ProgressPage} />
                    <Route exact path="/modals" component={ModalPage} />
                    <Route exact path="/forms" component={FormPage} />
                    <Route exact path="/input-groups" component={InputGroupPage} />
                    <Route exact path="/charts" component={ChartPage} /> */}
                    </div>

                    {/* rainierio web section router */}
                    <Route
                      exact
                      path="/bloglist"
                      component={withAuth(BlogListPage)}
                    />
                    <Route
                      exact
                      path="/blogdetail/:postId"
                      component={withAuth(BlogDetailPage)}
                    />
                    <Route
                      exact
                      path="/blogadd"
                      component={withAuth(BlogAddPage)}
                    />
                    <Route
                      exact
                      path="/blogedit/:postId"
                      component={withAuth(BlogEditPage)}
                    />
                    <Route
                      exact
                      path="/userprofile"
                      component={withAuth(UserProfile)}
                    />
                    <Route
                      exact
                      path="/about"
                      component={withAuth(AboutPage)}
                    />
                    <Route
                      exact
                      path="/skills"
                      component={withAuth(SkillsPage)}
                    />
                    <Route
                      exact
                      path="/portfolio"
                      component={withAuth(PortfolioPage)}
                    />
                    <Route
                      exact
                      path="/addportfolio/"
                      component={withAuth(PortfolioDetail)}
                    />
                    <Route
                      exact
                      path="/portfoliodetail/:id"
                      component={withAuth(PortfolioDetail)}
                    />
                    <Route
                      exact
                      path="/notfound"
                      component={withAuth(NotFoundPage)}
                    />
                  </React.Suspense>
                </MainLayout>
              </Switch>
            </Provider>
          </Router>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
