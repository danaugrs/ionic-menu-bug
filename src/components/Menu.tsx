import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import './Menu.css';

const Menu: React.FC<{menuEnabled: any, setMenuEnabled: any}> = ({ menuEnabled, setMenuEnabled }) => {

  return (
    <IonMenu contentId="main" type="overlay" disabled={!menuEnabled}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <IonMenuToggle key="0" autoHide={false}>
            <IonItem routerLink={'/page/menu-enabled'} routerDirection="none" lines="none" detail={false}>
              <IonLabel>MenuEnabledPage</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle key="2" autoHide={false}>
            <IonItem onClick={() => setMenuEnabled(false)} routerLink={'/page/menu-disabled'} routerDirection="none" lines="none" detail={false}>
              <IonLabel>MenuDisabledPage</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
