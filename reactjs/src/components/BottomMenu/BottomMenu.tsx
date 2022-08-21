import {   IonIcon, IonLabel,  IonTabButton, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/react';
import { menuOutline, newspaperOutline, chatboxEllipsesOutline, business, americanFootballOutline } from 'ionicons/icons';
import "./BottomMenu.css";

const BottomMenu: React.FC<{ title?: string, menuId?: string, color?: string }> = (props) => {
    return (
        <IonFooter className="hidden-object" id="footer">
            <IonGrid>
                <IonRow>
                <IonCol>
                        <IonTabButton>
                            <IonLabel>News</IonLabel>
                            <IonIcon icon={newspaperOutline}></IonIcon>
                        </IonTabButton>
                    </IonCol>
                    <IonCol>
                        <IonTabButton>
                            <IonLabel>Commment</IonLabel>
                            <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                        </IonTabButton>
                    </IonCol>
                    <IonCol>
                        <IonTabButton>
                            <IonLabel>Business</IonLabel>
                            <IonIcon icon={business}></IonIcon>
                        </IonTabButton>
                    </IonCol>
                    <IonCol>
                        <IonTabButton>
                            <IonLabel>Sports</IonLabel>
                            <IonIcon icon={americanFootballOutline}></IonIcon>
                        </IonTabButton>
                    </IonCol>
                    <IonCol>
                        <IonTabButton onClick={handleClick}>
                            <IonLabel>More</IonLabel>
                            <IonIcon icon={menuOutline}></IonIcon>
                        </IonTabButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonFooter>
    );

    function handleClick() {
        let button = document.getElementById("icon-menu-button");
        if (button) {
            button.click();
        }
    }

};

export default BottomMenu;