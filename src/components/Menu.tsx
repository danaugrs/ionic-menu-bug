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

const Menu: React.FC<{menuDraggable: any, setMenuDraggable: any}> = ({ menuDraggable, setMenuDraggable }) => {

  return (
    <IonMenu contentId="main" type="push" draggable={menuDraggable}>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <IonMenuToggle key="0" autoHide={false}>
            <IonItem routerLink={'/page/menu-draggable'} routerDirection="none" lines="none" detail={false}>
              <IonLabel>PageMenuDraggable</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle key="2" autoHide={false}>
            <IonItem onClick={() => setMenuDraggable(false)} routerLink={'/page/menu-not-draggable'} routerDirection="none" lines="none" detail={false}>
              <IonLabel>PageMenuNotDraggable</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
