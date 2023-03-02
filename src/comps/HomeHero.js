import styles from '../../styles/Button.module.css'
import Button from './Button';


const HomeHero = () => {
    return (
        <div className="container">
            <div className="text">
                <h2>Hello i'm</h2>
                <h1 className='h1blue'>GIAN <br></br>
                    GALLO,</h1>
                <p>a Multimedia Designer that aims to create authentic and engaging visual experiences that connect with audiences on multiple levels.</p>
                <Button />
            </div>
            <div className="imageGian">
                <img src="/gian-intro-2.png" />
            </div>
        </div>
    );
}

export default HomeHero;
