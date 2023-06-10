import egg from '../../images/desktop/image-transform.jpg';
import cup from '../../images/desktop/image-stand-out.jpg';
import emily from '../../images/image-emily.jpg'
import thomas from '../../images/image-thomas.jpg'
import jennie from '../../images/image-jennie.jpg'
import './main.css';
import bottles from '../../images/desktop/image-gallery-milkbottles.jpg'  ;
import cone from '../../images/desktop/image-gallery-cone.jpg'  ;
import orange from '../../images/desktop/image-gallery-orange.jpg'  ;
import sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'  ;

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
                            Using a collaborative formula of designers, researchers, photographers, videographers, and
                            copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <button className="section_1-btn">
                            Learn more
                        </button>
                    </div>

                </section>
                <section className=" section_3">
                    <div className=" section_3-img1">
                        <div className="padding">
                            <h2>
                                Graphic design
                            </h2>
                            <p>
                                Great design makes you memorable. We deliver artwork that underscores your brand message
                                and captures potential clients’ attention.
                            </p>
                        </div>
                    </div>
                    <div className="section_3-img2">
                        <div className="padding">
                            <h2>
                                Photography
                            </h2>
                            <p>
                                Increase your credibility by getting the most stunning, high-quality photos that improve
                                your business image.
                            </p>
                        </div>


                    </div>
                </section>
                {/*    reviews----------------------------*/}
                <div className="reviews">
                    <h1 className="title">
                        CLIENT TESTIMONIALS
                    </h1>
                    <div className="row">
                        <div className="col">
                            <img src={emily} alt=""/>
                            <p>
                                We put our trust in Sunnyside and they delivered, making sure our needs were met and
                                deadlines were always hit.
                            </p>
                            <h4>
                                <b> Emily R.</b>
                            </h4>
                            <span>Marketing Director</span>
                        </div>
                        <div className="col">
                            <img src={thomas} alt=""/>
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Sunnyside enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                            </p>
                            <h4>
                                <b> Thomas S.</b>
                            </h4>
                            <span>Chief Operating Officer</span>
                        </div>
                        <div className="col">
                            <img src={jennie} alt=""/>
                            <p>
                                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                            </p>
                            <h4>
                                <b> Jennie F.</b>

                            </h4>
                            <span>Business Owner</span>
                        </div>


                    </div>
                </div>
            {/*    images-------------------------------*/}
                <div className="images">
                    <img src={bottles} alt=""/>
                    <img src={orange} alt=""/>
                    <img src={cone} alt=""/>
                    <img src={sugar} alt=""/>
                </div>


            </div>
        </div>
    );
}

export default Main;