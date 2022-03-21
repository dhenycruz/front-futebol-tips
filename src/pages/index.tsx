import GlobalStyles from '../styles/globals';
import ImageSVG from '../assets/25775.svg';
import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('testando');
  },[]);
  return (
    <>
      <div>
        <h1>Página inicial</h1>
        <ImageSVG width="50" height="50" />
      </div>
      <main>
        <h2>Main</h2>
      </main>
    </>
  )
}
export default Home;