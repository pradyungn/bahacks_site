import Link from 'next/link'
import Meta from '../components/meta'
import { TiSocialGithub, TiMessage, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

export default () => {
    return(
        <div className="frame">
            <Meta title="Bay Area Hackathons" desc="A community of hackathon-goers in the bay area!"/>
            <div className="segment">
                <img src="/static/btext.png" className="btext"/>
                <div className="slog">Bringing the hacker community closer together</div>
                <div className="buttons">
                    <Link href="/about">
                        <div className="blue button">About</div>
                    </Link>
                    <Link href="/listings">
                        <div className="orange button">Listings</div>
                    </Link>
                    <Link href="/apply">
                        <div className="magenta button">Apply</div>
                    </Link>
                </div>
            </div>

            <div className="segment">
                <div className="socials">
                    <a href="#">
                        <TiMessage className="cyan social"/>
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

                <a href="https://www.pradyungn.tech">
                    <img className="blogo" src="/static/blogo.png"/>
                </a>
            </div>
            <style jsx global>{`
            html, body{
                background: #101010;
                color: #c0c0c0;
                font-family: Roboto Condensed;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                margin: 0;
            }

            .buttons {
                display: flex;
                justify-content: space-between;
            }

            .button {
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

            .socials {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .social {
                font-size: 30px;
                padding: 2.75px;
                color: #c0c0c0;
                border: 2.25px solid #c0c0c0;
                border-radius: 20px;
                transition: 250ms ease;
            }

            @media(min-width: 650px){
                .button {
                    width: 120px;
                }

                .buttons {
                    width: 420px;
                }

                .frame{
                    width: 600px;
                    height: 350px;

                    display: flex;
                    justify-content: space-between;
                }

                .button:hover, .social:hover {
                    box-shadow: 5px 5px 0px #c0c0c0;
                    transform: translate(-5px, -5px);
                }

                .segment {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                }

                .blogo {
                    width: 100px;
                    transition: 250ms ease;
                }

                .blogo:hover {
                    cursor: pointer;
                    transform: scale(1.1, 1.1);
                }

                .socials {
                    height: 230px;
                    flex-direction: column;
                }

                .slog {
                    font-size: 24px;
                }
            }

            @media(max-width: 649px){
                .btext {
                    width: 350px;
                }

                .blogo {
                    display: none;
                }

                .slog {
                    display: none;
                }

                .frame {
                    width: 350px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .socials {
                    width: 230px;
                }

                .buttons {
                    width: 350px;

                    margin: 20px 0;
                }

                .button {
                    width: 100px;
                }
            }
            `} </style>
        </div>
    )
}
