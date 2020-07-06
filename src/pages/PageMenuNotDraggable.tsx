import { IonButton, IonButtons, IonContent, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const PageMenuNotDraggable: React.FC<{setMenuDraggable: any}> = ({ setMenuDraggable }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Note: we can't add an onClick listener to the IonBackButton. Why? */}
            {/* <IonBackButton defaultHref="/" onClick={() => setMenuDraggable(true)} /> */}
          </IonButtons>
          <IonTitle>Page Menu Not Draggable</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        The menu should be not draggable on this page but it is.
        <IonButton routerLink="/" onClick={() => setMenuDraggable(true)}>Make menu draggable and go back</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PageMenuNotDraggable;
