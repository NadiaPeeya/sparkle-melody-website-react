
import Instruments from '../Instruments/Instruments';
import TopItems from '../TopItems/TopItems';
import Welcome from '../Welcome/Welcome';
import './Home.css'

const Home = () => {

    return (
        <div className="home-style">      
            <TopItems></TopItems>
            <Welcome></Welcome>
            <Instruments></Instruments>
                  
        </div>
    );
};

export default Home;