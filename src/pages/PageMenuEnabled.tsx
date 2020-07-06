import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page Menu Enabled</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        The menu is enabled on this page
      </IonContent>
    </IonPage>
  );
};

export default Page;
