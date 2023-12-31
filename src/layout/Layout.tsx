import React from 'react'
import { IonRouterOutlet, IonContent, IonHeader, IonPage } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect } from 'react-router'
import Home from '../pages/home'
import Access from '../pages/access'
import Profile from '../pages/profile'
import Navbar from '../components/admin/Navbar'
import Sidebar from '../components/admin/Sidebar'
import { verifyPathName } from '../utils/verifyPathName'
import Notfound from '../pages/errors/404'
import { verifyAuth } from '../helpers/verifyAuth'
import Unauthorized from '../pages/errors/401'

function Layout (): JSX.Element {
  return (
    <IonReactRouter>
      <IonPage>
        <IonHeader>
          {verifyPathName() && verifyAuth() && <Navbar />}
        </IonHeader>
        <IonContent>
          {verifyPathName() && verifyAuth() && <Sidebar />}
          <IonRouterOutlet>
            <Redirect exact path="/" to="/" />
            <Route path='/' component={Access} exact={true} />
            <Route path='/admin/home' component={verifyAuth() ? Home : Unauthorized} exact={true} />
            <Route path='/admin/profile' component={verifyAuth() ? Profile : Unauthorized} exact={true} />

            <Route path="/public/not-found" component={Notfound} exact />
            <Route component={() => <Redirect to="/public/not-found" />} />
          </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  )
}

export default Layout
