import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter'

// REDUX
import store from '@store/store'
import { Provider } from 'react-redux'

// STYLE
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
