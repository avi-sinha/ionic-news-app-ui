import {  IonContent } from "@ionic/react";
import Header from "../components/Header/Header";
import Highlights from "../components/Latest/Latest";
import RunningNews from "../components/RunningNews/RunningNews";
import TopLines from "../components/TopLines/TopLines";
import Tranding from "../components/Trending/Trending";
import SideMenu from "../components/SideMenu/SideMenu";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import settings from "../theme/variable";
import "./Home.css"

const Home: React.FC = () => {
  return (
    <>
      <Header title="The Dominion Post" color="primary" attachMenuId="mainMenu" />
      <SideMenu title="Menu" menuId="mainMenu" color="primary" />
      <IonContent class="scroll-content">
        <TopLines />
        <Tranding />
        <div className="left"><Highlights /></div>
        <div className="right"><RunningNews /></div>
      </IonContent>
      { settings.config.mode === 'ios' && <BottomMenu />}
    </>
  );
};

export default Home;
