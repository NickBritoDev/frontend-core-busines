import React from 'react';
import { IonRouterOutlet, IonContent, IonHeader, IonFooter, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Home from '../pages/home';
import Access from '../pages/access';
import Profile from '../pages/profile';
import Navbar from '../components/Admin/Navbar';
import Sidebar from '../components/Admin/Sidebar';
import Footer from '../components/Public/Footer';
import { verifyPathName } from '../utils/verifyPathName';
import Notfound from '../pages/errors/404';
import { verifyAuth } from '../helpers/verifyAuth';
import Unauthorized from '../pages/errors/401';

function Layout() {
  const isAuthenticated = verifyAuth();

  return (
    <IonReactRouter>
      <IonPage>
        <IonHeader>
          {verifyPathName() && isAuthenticated && <Navbar />}
        </IonHeader>
        <IonContent>
          {verifyPathName() && isAuthenticated && <Sidebar />}
          <IonRouterOutlet>
            <Redirect exact path="/" to="/" />
            <Route path='/' component={Access} exact={true} />
            <Route path='/admin/home' component={isAuthenticated ? Home : Unauthorized} exact={true} />
            <Route path='/admin/profile' component={isAuthenticated ? Profile : Unauthorized} exact={true} />

            <Route path="/public/not-found" component={Notfound} exact />
            <Route component={() => <Redirect to="/public/not-found" />} />
          </IonRouterOutlet>
        </IonContent>
        {!verifyPathName() && !isAuthenticated && <Footer />}
      </IonPage>
    </IonReactRouter>
  );
}

export default Layout;
