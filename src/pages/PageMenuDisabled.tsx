import { IonButton, IonButtons, IonContent, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Page: React.FC<{setMenuEnabled: any}> = ({ setMenuEnabled }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Note: we can't add an onClick listener to the IonBackButton. Why? */}
            {/* <IonBackButton defaultHref="/" onClick={() => setMenuEnabled(true)} /> */}
            <IonButton routerLink="/" onClick={() => setMenuEnabled(true)}>Back</IonButton>
          </IonButtons>
          <IonTitle>Page Menu Disabled</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        The menu is disabled on this page
      </IonContent>
    </IonPage>
  );
};

export default Page;
