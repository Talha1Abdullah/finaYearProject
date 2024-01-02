import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import AppContainer from './navigator/index (2)';
import FlashMessage from 'react-native-flash-message';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Provider as PaperProvider } from 'react-native-paper';
const Stripe="pk_test_51NgDKKJHRG4EXTAzd9h8N49lBjorBk2dJiq8K6Wws19oF7S7qe9q5KfFAD3cMBMBr7RMz61eyLlVCCa6bnTMOIp4006zh62ZVu"
const App=()=>{
  return(
     
      <>
   <StripeProvider publishableKey={Stripe}>
   <PaperProvider>
   <FlashMessage position="top" />
    <AppContainer/>
    </PaperProvider>
    {/* <Subscription/> */}
    {/* <Toast/> */}
    </StripeProvider>
    </>

)
}
export default App;
