import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const PageMenuDraggable: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page Menu Draggable</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        The menu is draggable on this page.
      </IonContent>
    </IonPage>
  );
};

export default PageMenuDraggable;
