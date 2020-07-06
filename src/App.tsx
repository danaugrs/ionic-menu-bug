import Menu from './components/Menu';
import PageMenuEnabled from './pages/PageMenuEnabled';
import PageMenuDisabled from './pages/PageMenuDisabled';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [menuEnabled, setMenuEnabled] = useState(true);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu menuEnabled={menuEnabled} setMenuEnabled={setMenuEnabled}/>
          <IonRouterOutlet id="main">
            <Route path="/page/menu-enabled" exact >
              <PageMenuEnabled/>
            </Route>
            <Route path="/page/menu-disabled" exact >
              <PageMenuDisabled setMenuEnabled={setMenuEnabled}/>
            </Route>
            <Redirect from="/" to="/page/menu-enabled" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
