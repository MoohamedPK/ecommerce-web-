import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter'

// REDUX
import {store, persistor} from '@store/store'
import { Provider } from 'react-redux'

// STYLE
import './index.css'

//PERSISTOR
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter/>
    </PersistGate>
  </Provider>
)
