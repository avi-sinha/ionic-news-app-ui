import Head from 'next/head';
/* The following line enforces SSR for the title "THE DOMINION POST" */  
 export async function getServerSideProps(){
 return{
  props:{title:'THE DOMINION POST'}
 }
}
export default function Home({title}) {
  return(<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <title id="page-title">{title}</title>
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/> 
    <style id="core-style">
    {`:root {
      --ion-color-primary: #5260ff;
      --ion-color-primary-rgb: 82, 96, 255;
      --ion-color-primary-contrast: #ffffff;
      --ion-color-primary-contrast-rgb: 255, 255, 255;
      --ion-color-primary-shade: #4854e0;
      --ion-color-primary-tint: #6370ff;
      --ion-safe-area-bottom: 10px;
    }`}
    </style>
  </Head>

  <main>
    <ion-app>
      <ion-menu side="end" id="side-menu" content-id="main-content">
        <ion-header color="primary">
          <ion-toolbar translucent  color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-icon name="newspaper-outline" slot="start"></ion-icon>
              <ion-label>News</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="chatbox-ellipses-outline" slot="start"></ion-icon>
              <ion-label>Commment</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="business" slot="start"></ion-icon>
              <ion-label>Business</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="car-outline" slot="start"></ion-icon>
              <ion-label>Capital Life</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="color-filter-outline" slot="start"></ion-icon>
              <ion-label>Culture</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="american-football-outline" slot="start"></ion-icon>
              <ion-label>Sports</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="call-outline" slot="start"></ion-icon>
              <ion-label>Contact us</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>


      <div className="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons id="icon-menu" class="icon-menu" slot="end">
              <ion-menu-button id="icon-menu-button"></ion-menu-button>
            </ion-buttons>
            <ion-title id="header-title">
              {title}
            </ion-title>
            <ion-row id="inline-menu" class="inline-menu" slot="end">
              <ion-col>
                <ion-icon name="newspaper-outline"></ion-icon>&nbsp;<ion-label>News</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>&nbsp;<ion-label>Commment</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="business"></ion-icon>&nbsp;<ion-label>Business</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="car-outline"></ion-icon>&nbsp;<ion-label>Capital&nbsp;Life</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="color-filter-outline"></ion-icon>&nbsp;<ion-label>Culture</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="american-football-outline"></ion-icon>&nbsp;<ion-label>Sports</ion-label>
              </ion-col>
              <ion-col>
                <ion-icon name="call-outline"></ion-icon>&nbsp;<ion-label>Contact&nbsp;us</ion-label>
              </ion-col>
            </ion-row>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen>
          <ion-grid>
            <ion-row>
              <ion-col size-xs="12" size-sm="12" size-md="6">
                <ion-card class="ion-no-margin ion-no-padding">
                  <img src="/assets/imgs/news1.jpeg"/>
                  <ion-card-header>
                    <ion-card-title color="primary">
                      First grain ship leaves under Russia deal
                    </ion-card-title>
                    <ion-card-subtitle>
                      A ship carrying grain leaves Odesa under a deal aimed at
                      easing a global food crisis.
                    </ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content class="ion-text-justify">
                    The first ship carrying grain has left a Ukrainian port
                    under a landmark deal with Russia. Turkish and Ukrainian
                    officials say the ship left the southern port of Odesa early
                    on Monday morning local time.
                    </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col size-md="3" >
                <ion-card class="ion-no-margin">
                  <img src="/assets/imgs/news3.jpeg" />
                  <ion-card-header>
                    <ion-card-title color="primary">
                      New Zealand fully reopens borders</ion-card-title
                    >
                    <ion-card-subtitle>
                      The boardes were closes since March 2020.
                    </ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content class="ion-text-justify">
                    New Zealand's borders are fully open for the first time
                    since March 2020, when they shut in an effort to keep out
                    Covid-19.
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col size-md="3">
                <ion-card class="ion-no-margin">
                  <img src="/assets/imgs/news2.jpeg" />
                  <ion-card-header>
                    <ion-card-title color="primary"
                      >The PM and politicians go on tour</ion-card-title
                    >
                    <ion-card-subtitle>
                      Celebrating 60 years of official friendship.
                    </ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content class="ion-text-justify">
                    Jacinda Ardern and politicians from across the spectrum have
                    touched down in Samoa, marking the reopening of the Pacific
                    nation.
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-toolbar>
                  <ion-title color="primary">Tranding Now</ion-title>
                  </ion-toolbar>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <ion-item color="light">
                    <ion-thumbnail slot="start">
                      <ion-img src="/assets/imgs/news4.png"></ion-img>
                    </ion-thumbnail>
                    <ion-label color="primary" class="small">
                      1. Mystery as massive sinkhole appears in
                      Chile
                    </ion-label>
                  </ion-item>
                </ion-col>

                <ion-col size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <ion-item color="light">
                    <ion-thumbnail slot="start">
                      <ion-img src="/assets/imgs/news5.png"></ion-img>
                    </ion-thumbnail>
                    <ion-label color="primary" class="small"
                      >2. The fight over political donations
                    </ion-label>
                  </ion-item>
                </ion-col>

                <ion-col size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <ion-item color="light">
                    <ion-thumbnail slot="start">
                      <ion-img src="/assets/imgs/news6.png"></ion-img>
                    </ion-thumbnail>
                    <ion-label color="primary" class="small"
                      >3. One minute world news</ion-label
                    >
                  </ion-item>
                </ion-col>

                <ion-col size-xs="12" size-sm="6" size-lg="4" size-xl="3">
                  <ion-item color="light">
                    <ion-thumbnail slot="start">
                      <ion-img src="/assets/imgs/news7.png"></ion-img>
                    </ion-thumbnail>
                    <ion-label color="primary" class="small"
                      >4. Official unemployment edges up to 3.3%
                    </ion-label>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
          <div>
            <ion-grid>
              <ion-row>
                <ion-col size-xs="12" size-md="4" size-lg="4" size-xl="3">
                  <ion-list>
                    <ion-list-header color="primary" className="ion-padding-bottom">
                      Latest headlines
                    </ion-list-header>
                    <ion-item>
                      <ion-label className="ion-color ion-color-primary">
                        <b>11:14 am</b><br/>
                        I tried the viral Milo and Baileys drink
                      </ion-label>
                      <ion-icon
                        name="play-circle-outline"
                        color="primary"
                      ></ion-icon>
                    </ion-item>

                    <ion-item>
                      <ion-label color="primary">
                        <b>11:13 am</b><br/>
                        Teen takes drunken joyride on ride-on lawnmower
                      </ion-label>
                    </ion-item>

                    <ion-item>
                      <ion-label color="primary">
                        <b>11:10 am</b><br/>
                        Is this the best bounce back in Birmingham?
                      </ion-label>
                      <ion-icon
                        name="play-circle-outline"
                        color="primary"></ion-icon>
                    </ion-item>
                    <ion-item>
                      <ion-label color="primary">
                        <b>11:08 am</b><br/>
                        Is this the best fish burger in Auckland?
                      </ion-label>
                      <ion-icon
                        name="play-circle-outline"
                        color="primary"
                      ></ion-icon>
                    </ion-item>

                    <ion-item>
                      <ion-label color="primary">
                        <b>11:03 am</b><br/>
                        Live: Climate minister announces new law to cover climate hazards on LIMs
                      </ion-label>
                      <ion-icon
                        name="play-circle-outline"
                        color="primary"></ion-icon>
                    </ion-item>

                    <ion-item>
                      <ion-label color="primary">
                        <b>11:02 am</b><br/>
                        Election candidates for 2022
                      </ion-label>
                    </ion-item>
                  </ion-list>
                </ion-col>
                <ion-col size-xs="12" size-md="8" size-lg="8" size-xl="9">
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                      <ion-toolbar>
                        <ion-title color="primary">Commonwealth Games</ion-title>
                      </ion-toolbar>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col size-md="6" size-lg="3">
                        <ion-card class="ion-no-margin">
                          <img src="/assets/imgs/news8.png" />
                          <ion-card-header>
                            <ion-card-subtitle color="primary"
                              >Is this the best bounce back in
                              Birmingham?</ion-card-subtitle
                            >
                          </ion-card-header>
                          <ion-card-content class="ion-text-justify">
                            Beaten for first time in eight years, Adam Peaty was
                            "the lowest of the low". His response was
                            remarkable.
                          </ion-card-content>
                        </ion-card>
                      </ion-col>

                      <ion-col size-md="6" size-lg="3">
                        <ion-card class="ion-no-margin">
                          <img src="/assets/imgs/news9.png" />
                          <ion-card-header>
                            <ion-card-subtitle color="primary"
                              >Australian swimmer becomes most successful
                            </ion-card-subtitle>
                          </ion-card-header>
                          <ion-card-content class="ion-text-justify">
                            Emma McKeon wins her 19th medal and fifth gold in
                            Birmingham in the mixed 4x100m relay.
                          </ion-card-content>
                        </ion-card>
                      </ion-col>

                      <ion-col size-md="6" size-lg="3">
                        <ion-card class="ion-no-margin">
                          <img src="/assets/imgs/news10.png" />
                          <ion-card-header>
                            <ion-card-subtitle color="primary"
                              >White Ferns in medal mix at Commonwealth
                              Games</ion-card-subtitle
                            >
                          </ion-card-header>
                          <ion-card-content class="ion-text-justify">
                            Career-best figures from Hayley Jensen in big win
                            over Sri Lanka ensures Kiwis in
                            semifinals.
                          </ion-card-content>
                        </ion-card>
                      </ion-col>

                      <ion-col size-md="6" size-lg="3">
                        <ion-card class="ion-no-margin">
                          <img src="/assets/imgs/news11.png" />
                          <ion-card-header>
                            <ion-card-subtitle color="primary"
                              >Eve Thomas fourth in 800m final
                            </ion-card-subtitle>
                          </ion-card-header>
                          <ion-card-content class="ion-text-justify">
                            No golds for New Zealand on day five as 21-year-old
                            pole vaulter Imogen Ayris and the women's bowls four
                            secure bronzes.
                          </ion-card-content>
                        </ion-card>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          
        </ion-content>

        <ion-footer class="hidden-object" id="footer">
          <ion-toolbar class="ion-no-border">      
          <ion-tabs class="ion-no-border" no-outlet>
            <ion-tab tab="news"></ion-tab>
            <ion-tab tab="commment"></ion-tab>
            <ion-tab tab="business"></ion-tab>
            <ion-tab tab="sports"></ion-tab>
            <ion-tab tab="more"></ion-tab>
            
            <ion-tab-bar slot="top" class="ion-no-border">
              <ion-tab-button tab="news">
                <ion-label>News</ion-label>
                <ion-icon name="newspaper-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="commment">
                <ion-label>Commment</ion-label>
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="business">
                <ion-label>Business</ion-label>
                <ion-icon name="business"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="sports">
                <ion-label>Sports</ion-label>
                <ion-icon name="american-football-outline"></ion-icon>
              </ion-tab-button>

              <ion-tab-button tab="more" onclick="document.getElementById('icon-menu-button').click()">
                <ion-label>More</ion-label>
                <ion-icon name="menu-outline"></ion-icon>
              </ion-tab-button>

            </ion-tab-bar>
          </ion-tabs>
        </ion-toolbar>
        </ion-footer>
      </div>
    </ion-app>
  </main>
  <style jsx global>
    {`

      ion-tab-button{
        padding:5px
      }

      ion-card-subtitle{
        font-variant: inherit !important;
        margin-top:5px;
        font-size:90%
      }

      div#main-content ion-label:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      ion-menu#side-menu ion-label:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      .menubar-item :hover{
        text-decoration: underline;
        cursor: pointer;
      }

      .bold {
        font-size: 110%
      }

      .small {
        
      }

      ion-card-content{
        padding-left:15px !important;
        padding-right:15px !important;
        padding-bottom:15px !important;
        font-size:90%;
      }

      ion-card-title{
        font-size:120%;
      }

      .hidden-object {
        display: none;
      }

      @media screen and (min-width: 0px) and (max-width: 1024px) {

        ion-card-title{
          font-size:110%;
        }
        
        
        ion-card-content {
            display: none;
        }
        

        .inline-menu {
          display: none;
        }

        .icon-menu {
          display: block;
        }
        

        /* show it on small screens */
      }

      @media screen and (min-width: 1024px) {
        
        ion-card-content {
          display: block;
        }
        

        .inline-menu {
          display: block;
        }

        .icon-menu {
          display: none;
        }
        
        /* hide it elsewhere */
      }

    `}
  </style>
  <script src="/assets/js/support.js"></script>
  </>)
}
