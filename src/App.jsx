import { ToastContainer } from 'react-fox-toast';
import CoffeeForm from './components/CoffeeForm';
import Hero from './components/Hero';
import Layout from './components/layout';
import Stats from './components/Stats';

function App() {

  const isAuthenticated = false;

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
