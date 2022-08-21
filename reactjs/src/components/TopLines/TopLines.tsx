import { IonCol, IonRow, IonCard, IonGrid, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/react';

const TopLines: React.FC<{title?:string,attachMenuId?:string,color?:string}> = (props) => {
    return (
        <>
        <IonGrid>
            <IonRow>
              <IonCol size-xs="12" size-sm="12" size-md="6">
                <IonCard class="ion-no-margin ion-no-padding">
                  <img src="/assets/imgs/news1.jpeg" alt="news"/>
                  <IonCardHeader>
                    <IonCardTitle color="primary">
                      First grain ship leaves under Russia deal
                    </IonCardTitle>
                    <IonCardSubtitle>
                      A ship carrying grain leaves Odesa under a deal aimed at
                      easing a global food crisis.
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent class="ion-text-justify">
                    The first ship carrying grain has left a Ukrainian port
                    under a landmark deal with Russia. Turkish and Ukrainian
                    officials say the ship left the southern port of Odesa early
                    on Monday morning local time.
                    </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size-md="3" >
                <IonCard class="ion-no-margin">
                  <img src="/assets/imgs/news3.jpeg" alt="news" />
                  <IonCardHeader>
                    <IonCardTitle color="primary">
                      New Zealand fully reopens borders</IonCardTitle
                    >
                    <IonCardSubtitle>
                      The boardes were closes since March 2020.
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent class="ion-text-justify">
                    New Zealand's borders are fully open for the first time
                    since March 2020, when they shut in an effort to keep out
                    Covid-19.
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size-md="3">
                <IonCard class="ion-no-margin">
                  <img src="/assets/imgs/news2.jpeg" alt="news" />
                  <IonCardHeader>
                    <IonCardTitle color="primary"
                      >The PM and politicians go on tour</IonCardTitle
                    >
                    <IonCardSubtitle>
                      Celebrating 60 years of official friendship.
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent class="ion-text-justify">
                    Jacinda Ardern and politicians from across the spectrum have
                    touched down in Samoa, marking the reopening of the Pacific
                    nation.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

        </>
    );
};

export default TopLines;