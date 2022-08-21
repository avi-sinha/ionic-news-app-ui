import { IonCol, IonRow, IonCard, IonGrid, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonToolbar, IonTitle} from '@ionic/react';

const RunningNews: React.FC<{title?:string,attachMenuId?:string,color?:string}> = (props) => {
    return (
      <>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonToolbar>
              <IonTitle color="primary">Commonwealth Games</IonTitle>
            </IonToolbar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size-md="6" size-lg="3">
              <IonCard class="ion-no-margin">
                <IonImg src="/assets/imgs/news8.png" />
                <IonCardHeader>
                  <IonCardSubtitle color="primary"
                    >Is this the best bounce back in
                    Birmingham?</IonCardSubtitle
                  >
                </IonCardHeader>
                <IonCardContent class="ion-text-justify">
                  Beaten for first time in eight years, Adam Peaty was
                  "the lowest of the low". His response was
                  remarkable.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size-md="6" size-lg="3">
              <IonCard class="ion-no-margin">
                <IonImg src="/assets/imgs/news9.png" />
                <IonCardHeader>
                  <IonCardSubtitle color="primary"
                    >Australian swimmer becomes most successful
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent class="ion-text-justify">
                  Emma McKeon wins her 19th medal and fifth gold in
                  Birmingham in the mixed 4x100m relay.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size-md="6" size-lg="3">
              <IonCard class="ion-no-margin">
                <IonImg src="/assets/imgs/news10.png" />
                <IonCardHeader>
                  <IonCardSubtitle color="primary"
                    >White Ferns in medal mix at Commonwealth
                    Games</IonCardSubtitle
                  >
                </IonCardHeader>
                <IonCardContent class="ion-text-justify">
                  Career-best figures from Hayley Jensen in big win
                  over Sri Lanka ensures Kiwis in
                  semifinals.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size-md="6" size-lg="3">
              <IonCard class="ion-no-margin">
                <IonImg src="/assets/imgs/news11.png" />
                <IonCardHeader>
                  <IonCardSubtitle color="primary"
                    >Eve Thomas fourth in 800m final
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent class="ion-text-justify">
                  No golds for New Zealand on day five as 21-year-old
                  pole vaulter Imogen Ayris and the women's bowls four
                  secure bronzes.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </>
    );
};

export default RunningNews;