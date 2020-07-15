import Link from 'next/link'
import Meta from '../components/meta'
import { TiSocialGithub, TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

export default () => {
    return(
            <div className="frame">
                <Meta title="Bay Area Hackathons"/>
                <div className="segment">
                    <img src="/static/btext.png"/>
                    <div className="slog">Bringing the hacker community closer together</div>
                    <div className="buttons">
                        <Link href="/join">
                            <div className="blue button">Join</div>
                        </Link>
                        <Link href="/about">
                            <div className="orange button">About</div>
                        </Link>
                        <Link href="/apply">
                            <div className="magenta button">Apply</div>
                        </Link>
                    </div>
                </div>

                <div className="segment">
                    <div className="socials">
                        <a href="#">
                            <TiSocialFacebook className="cyan social"/>
                        </a>
                        <a href="#">
                            <TiSocialGithub className="violet social"/>
                        </a>
                        <a href="#">
                            <TiSocialInstagram className="azure social"/>
                        </a>
                        <a href="#">
                            <TiSocialTwitter className="red social"/>
                        </a>
                    </div>
                    <img className="blogo" src="/static/blogo.png"/>
                </div>
                <style jsx global>{`
                    html, body{
                        background: #101010;
                        color: #c0c0c0;
                        font-family: Roboto Condensed;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100vw;
                        height: 100vh;
                        margin: 0;
                    }

                    @media(min-width: 650px){
                        .frame{
                            width: 600px;
                            height: 350px;

                            display: flex;
                            justify-content: space-between;
                        }

                        .segment {
                            display: flex;
                            justify-content: space-between;
                            flex-direction: column;
                        }

                        .btext {
                            width: 450px;
                        }

                        .buttons {
                            display: flex;
                            width: 420px;
                            justify-content: space-between;
                        }

                        .button {
                            width: 120px;
                            height: 40px;

                            display: flex;
                            align-items: center;
                            justify-content: center;

                            border: 2.25px solid #c0c0c0;
                            border-radius: 8px;

                            transition: 250ms ease;
                        }

                        .button:hover, .social:hover {
                            color: #101010;
                            cursor: pointer;
                            box-shadow: 5px 5px 0px #c0c0c0;

                            transform: translate(-5px, -5px);
                        }

                        .blue:hover {
                            border: 2.25px solid #a3b8ef;
                            background: #a3b8ef;
                        }

                        .green:hover {
                            border: 2.25px solid #80c990;
                            background: #80c990;
                        }

                        .orange:hover {
                            border: 2.25px solid #e0af85;
                            background: #e0af85;
                        }

                        .magenta:hover {
                            border: 2.25px solid #e6a3dc;
                            background: #e6a3dc;
                        }

                        .aquamarine:hover {
                            border: 2.25px solid #5accaf;
                            background: #5accaf;
                        }

                        .azure:hover {
                            border: 2.25px solid #74c3e4;
                            background: #74c3e4;
                        }

                        .red:hover {
                            border: 2.25px solid #efa6a2;
                            background: #efa6a2;
                        }

                        .rose:hover {
                            border: 2.25px solid #f2a2c2;
                            background: #f2a2c2;
                        }

                        .cyan:hover {
                            border: 2.25px solid #50cacd;
                            background: #50cacd;
                        }

                        .violet:hover {
                            border: 2.25px solid #ccaced;
                            background: #ccaced;
                        }

                        .blogo {
                            width: 100px;
                        }

                        .social {
                            font-size: 30px;
                            padding: 2.75px;
                            color: #c0c0c0;
                            border: 2.25px solid #c0c0c0;
                            border-radius: 20px;
                            transition: 250ms ease;
                        }

                        .socials {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            height: 230px;
                        }

                        .slog {
                            font-size: 24px;
                        }
                    }
                `} </style>
            </div>
    )
}
