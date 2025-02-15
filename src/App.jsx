import { ToastContainer } from 'react-fox-toast';
import CoffeeForm from './components/CoffeeForm';
import Hero from './components/Hero';
import Layout from './components/layout';
import Stats from './components/Stats';
import History from './components/History';

function App() {

  const isAuthenticated = true;

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout >
      <ToastContainer/>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default App
