import Hero from "../Hero/Hero";
import ArrowIcon from '../../img/arrow-down.svg';
const Herocontainer = ({ mainHeader, subtitle }) => {
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row align-items-center vh-100">
                    <Hero/>
                    <div className="col-12 order-3 col-md-2 order-md-2 text-center align-self-end py-3">
                        <a href="#productos">
                            <button className="btn btn-primary rounded-circle pad-btn zoomIn my-3">
                                <img src={ArrowIcon} alt={"ArrowIcon"} style={{ height: 16 }} />
                            </button>
                        </a>
                    </div>
                    <div className="col-12 order-2 col-md-4 order-md-3 text-center align-self-center">
                        <h1 className="hoverLine">{mainHeader}</h1>
                        <h6>{subtitle}</h6>
                    </div>
                </div>
                
                   
               
            </div>

        </>
    );
}

export default Herocontainer;
