import MePhoto from "../../images/me.jpeg"


const Home = (props) => {
    return (
        <div className="row">
            <div className="col-2">
                <img src={MePhoto} alt="Ryan" className="selfie"/>
            </div>
            <div className="col-10">
                <h2>About Me</h2>
                <p>
                    Full stack developer leveraging my extensive technical knowledge to bring empathy and respect to computer
                    software. Self-starter who is passionate about developing software with an eye towards performance. Strengths in
                    teamwork, collaboration and leadership. Have been programming as a hobby for 10+ years.
                </p>
            </div>
        </div>
    )
}

export default Home;