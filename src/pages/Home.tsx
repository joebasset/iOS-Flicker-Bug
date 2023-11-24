import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Page 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer />
        <IonButton
          onClick={() => {
            history.push('/page2')
          }}
        >
          Next
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
