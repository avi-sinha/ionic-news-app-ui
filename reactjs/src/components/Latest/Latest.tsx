import { IonItem, IonLabel, IonList, IonListHeader, IonIcon} from '@ionic/react';
import "./Latest.css"

const Highlights: React.FC<{title?:string,attachMenuId?:string,color?:string}> = (props) => {
    return (
        <>
          <IonList>
            <IonListHeader color="primary" className="ion-padding-bottom">
              Latest headlines
            </IonListHeader>
            <IonItem>
              <IonLabel className="ion-color ion-color-primary">
                <b>11:14 am</b><br/>
                I tried the viral Milo and Baileys drink
              </IonLabel>
              <IonIcon
                name="play-circle-outline"
                color="primary"
              ></IonIcon>
            </IonItem>

            <IonItem>
              <IonLabel color="primary">
                <b>11:13 am</b><br/>
                Teen takes drunken joyride on ride-on lawnmower
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel color="primary">
                <b>11:10 am</b><br/>
                Is this the best bounce back in Birmingham?
              </IonLabel>
              <IonIcon
                name="play-circle-outline"
                color="primary"></IonIcon>
            </IonItem>
            <IonItem>
              <IonLabel color="primary">
                <b>11:08 am</b><br/>
                Is this the best fish burger in Auckland?
              </IonLabel>
              <IonIcon
                name="play-circle-outline"
                color="primary"
              ></IonIcon>
            </IonItem>

            <IonItem>
              <IonLabel color="primary">
                <b>11:03 am</b><br/>
                Live: Climate minister announces new law to cover climate hazards on LIMs
              </IonLabel>
              <IonIcon
                name="play-circle-outline"
                color="primary"></IonIcon>
            </IonItem>

            <IonItem>
              <IonLabel color="primary">
                <b>11:02 am</b><br/>
                Election candidates for 2022
              </IonLabel>
            </IonItem>
          </IonList>
        </>
    );
};

export default Highlights;