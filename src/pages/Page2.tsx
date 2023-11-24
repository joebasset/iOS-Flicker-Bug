import React from 'react'
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Page2 = () => {
	const history = useHistory()

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton></IonBackButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Page2</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonButton
					onClick={() => {
						history.push('/page3')
					}}
				>
					On click
				</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Page2