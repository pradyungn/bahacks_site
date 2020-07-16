import { TiSocialGithub, TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

export default () => {
    return(
        <div className="footer">
            <div className="hline"></div>
            <div>Copyright Bay Area Hackathons 2019-2020</div>
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
            <style jsx global>{`
            .socials {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 150px;
                margin: 10px 0;
            }

            .social {
                font-size: 18px;
                padding: 1px;
                color: #c0c0c0;
                border: 2px solid #c0c0c0;
                border-radius: 12px;
                transition: 250ms ease;
            }

            .social:hover {
                color: #101010;
            }
            
            .hline {
                width: 100%;
                margin: 10px 0;
                height: 4px;
                border-radius: 2px;
                background-color: var(--white);
            }

            .footer {
                margin: 10px;
            }
            `} </style>
        </div>
    )
}
