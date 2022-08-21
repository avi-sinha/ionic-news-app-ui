import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import Header from "../components/Header/Header";
import Highlights from "../components/Highlights/Highlights";
import RunningNews from "../components/RunningNews/RunningNews";
import TopLines from "../components/TopLines/TopLines";
import Tranding from "../components/Tranding/Tranding";
import SideMenu from "../components/SideMenu/SideMenu";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import settings from "../theme/variable";

const Home: React.FC = () => {
  return (
    <>
      <Header title="The Dominion Post" color="primary" attachMenuId="mainMenu" />
      <SideMenu title="Menu" menuId="mainMenu" color="primary" />
      <IonContent class="scroll-content">
        <TopLines />
        <Tranding />
        <IonGrid>
          <IonRow>
            <IonCol size-xs="12" size-md="4" size-lg="4" size-xl="3">
              <Highlights />
            </IonCol>
            <IonCol size-xs="12" size-md="8" size-lg="8" size-xl="9">
              <RunningNews />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      { settings.config.mode === 'ios' && <BottomMenu />}
      
    </>
  );
};

export default Home;
