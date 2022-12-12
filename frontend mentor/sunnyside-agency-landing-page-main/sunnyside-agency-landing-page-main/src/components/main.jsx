import egg from '../../images/desktop/image-transform.jpg';
import cup from '../../images/desktop/image-stand-out.jpg';
import './main.css';


function Main() {
    return (
        <div className="main">
            <div className="container">
                <section className="section_1">
                    <div className="section_1-text">
                        <h2 className="section_1-header">
                            Transform your brand
                        </h2>
                        <p className="section_1-paragraph">
                            We are a full-service creative agency specializing in helping brands grow fast. Engage your
                            clients through compelling visuals that do most of the marketing for you.
                        </p>

                        <button className="section_1-btn">
                            Learn more
                        </button>
                    </div>
                    <div className="section_1-img">
                        <img src={egg} alt=""/>
                    </div>
                </section>
                <section className="section_2">
                    <div className="section_2-img">
                        <img src={cup} alt=""/>
                    </div>
                    <div className="section_2-text">
                        <h2 className="section_2-header">
                            Stand out to the right audience
                        </h2>
                        <p className="section_2-paragraph">
                            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                    </div>  

                </section>



            </div>
        </div>
    );
}

export default Main;