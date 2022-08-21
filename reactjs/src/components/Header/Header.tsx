import { IonButton,  IonHeader, IonMenuButton,  IonTitle, IonToolbar, } from '@ionic/react';
import TopMenu from '../TopMenu/TopMenu';
import settings from '../../theme/variable';

import "./Header.css"

const Header: React.FC<{ title?: string, attachMenuId?: string, color?: string }> = (props) => {
    return (
        <>
            <IonHeader id={props.attachMenuId}>
                <IonToolbar color={props.color}>
                    <IonTitle id="header-title">
                        {props.title}
                    </IonTitle>
                    { settings.config.mode !== 'ios' && <TopMenu />} 
                    <IonButton id="icon-menu" className="main-header-icon-menu" slot="end">
                        <IonMenuButton id="icon-menu-button"></IonMenuButton>
                    </IonButton>
                </IonToolbar>
            </IonHeader>

        </>
    );
};

export default Header;