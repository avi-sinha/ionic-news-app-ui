import { IonCol, IonRow,  IonGrid,  IonToolbar, IonTitle, IonItem, IonThumbnail, IonLabel, IonImg} from '@ionic/react';

const Tranding: React.FC<{title?:string,attachMenuId?:string,color?:string}> = (props) => {
    return (
        <>
        <IonGrid>
              <IonRow>
                <IonCol>
                  <IonToolbar>
                  <IonTitle color="primary">Tranding Now</IonTitle>
                  </IonToolbar>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <IonItem color="light">
                    <IonThumbnail slot="start">
                      <img src="/assets/imgs/news4.png" alt="news"></img>
                    </IonThumbnail>
                    <IonLabel color="primary" class="small">
                      1. Mystery as massive sinkhole appears in
                      Chile
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <IonItem color="light">
                    <IonThumbnail slot="start">
                      <IonImg src="/assets/imgs/news5.png"></IonImg>
                    </IonThumbnail>
                    <IonLabel color="primary" class="small"
                      >2. The fight over political donations
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <IonItem color="light">
                    <IonThumbnail slot="start">
                      <IonImg src="/assets/imgs/news6.png"></IonImg>
                    </IonThumbnail>
                    <IonLabel color="primary" class="small"
                      >3. One minute world news</IonLabel
                    >
                  </IonItem>
                </IonCol>

                <IonCol size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <IonItem color="light">
                    <IonThumbnail slot="start">
                      <IonImg src="/assets/imgs/news7.png"></IonImg>
                    </IonThumbnail>
                    <IonLabel color="primary" class="small"
                      >4. Official unemployment edges up to 3.3%
                    </IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>

        </>
    );
};

export default Tranding;