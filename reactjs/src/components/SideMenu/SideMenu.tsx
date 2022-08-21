import { IonToolbar, IonIcon, IonLabel, IonMenu, IonHeader, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { callOutline, carOutline, colorFilterOutline, newspaperOutline, chatboxEllipsesOutline, business, americanFootballOutline } from 'ionicons/icons';

const SideMenu: React.FC<{ title?: string, menuId?: string, color?: string }> = (props) => {
    return (
        <>
            <IonMenu side="end" id="side-menu" content-id={props.menuId}>
                <IonHeader color={props.color}>
                    <IonToolbar color={props.color}>
                        <IonTitle>{props.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonIcon icon={newspaperOutline} slot="start"></IonIcon>
                            <IonLabel>News</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={chatboxEllipsesOutline} slot="start"></IonIcon>
                            <IonLabel>Commment</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={business} slot="start"></IonIcon>
                            <IonLabel>Business</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={carOutline} slot="start"></IonIcon>
                            <IonLabel>Capital Life</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={colorFilterOutline} slot="start"></IonIcon>
                            <IonLabel>Culture</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={americanFootballOutline} slot="start"></IonIcon>
                            <IonLabel>Sports</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={callOutline} slot="start"></IonIcon>
                            <IonLabel>Contact us</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );

};

export default SideMenu;