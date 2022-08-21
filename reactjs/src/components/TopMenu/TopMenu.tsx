import {  IonCol,  IonRow,  IonIcon, IonLabel } from '@ionic/react';
import { callOutline, carOutline, colorFilterOutline, newspaperOutline, chatboxEllipsesOutline, business, americanFootballOutline } from 'ionicons/icons';

import "./TopMenu.css"

const TopMenu: React.FC<{ title?: string, attachMenuId?: string, color?: string }> = (props) => {
    return (
        <>
            <IonRow id="inline-menu" className="main-header-inline-menu" slot="end">
                <IonCol>
                    <IonIcon icon={newspaperOutline}></IonIcon>
                    <IonLabel> News</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                    <IonLabel> Commment</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={business}></IonIcon>
                    <IonLabel> Business</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={carOutline}></IonIcon>
                    <IonLabel> Capital Life</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={colorFilterOutline}></IonIcon>
                    <IonLabel> Culture</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={americanFootballOutline}></IonIcon>
                    <IonLabel> Sports</IonLabel>
                </IonCol>
                <IonCol>
                    <IonIcon icon={callOutline}></IonIcon>
                    <IonLabel> Contact us</IonLabel>
                </IonCol>
            </IonRow>
        </>
    );
};

export default TopMenu;