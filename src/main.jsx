import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import theme from './theme.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={theme} >
      <Toaster />
      <Provider store={store}>
          <App />
      </Provider>
    </ChakraProvider>


  </React.StrictMode>,
)


// console.log(apiUrl)
