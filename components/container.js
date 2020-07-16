import Meta from './meta'
import Link from 'next/link'
import Footer from './footer'

export default (props) => {
    return(
        <div className="container">
            <Meta title={props.title}/>
            <div>
                <div className="navbar">
                    <Link href="/">
                        <img src="/static/blogo.png" className="blogo"/>
                    </Link>

                    <div>
                        <Link href="/listing"><a className="slink hrlink">Listings</a></Link>
                        <Link href="/about"><a className="blink hrlink">About</a></Link>
                        <Link href="/apply"><a className="glink hrlink">Apply</a></Link>
                    </div>
                </div>
                {props.children}
            </div>
            <Footer/>
            <style jsx global>{`
            :root {
                --black: #101010;
                --dgray: #454545;
                --red: #efa6a2;
                --orange: #e0af85;
                --green: #80c990;
                --aquamarine: #5accaf;
                --amber: #a69460;
                --yellow: #c8c874;
                --blue: #a3b8ef;
                --violet: #ccaced;
                --magenta: #e6a3dc;
                --rose: #f2a1c2;
                --cyan: #50cacd;
                --azure: #74c3e4;
                --gray: #808080;
                --white: #c0c0c0;
            }

            html, body {
                font-family: Roboto Condensed, sans-serif;
                background-color: var(--black);
                color: var(--white);

                display: flex;
                flex-direction: column;
                height: 100%;
                align-items: center;
            }

            h1 {
                text-align: center;
            }

            .center {
                text-align: center;
            }

            .navbar {
                width: 100%;
                
                margin: 20px 0;

                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .container {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                height: 100%;
            }

            .hrlink {
                margin-left: 10px;
            }

            a {
                text-decoration: none;
                font-weight: 800;
                color: var(--white);
                transition: 250ms ease;
            }

            a:hover {
                text-decoration: underline;
            }

            body > div {
                height: 100%;
            }

            @media (max-width: 699px){
                .container {
                    max-width:700px;
                }
            }

            @media (min-width: 700px){
                .container {
                    width:700px;
                }
            }

            .blogo {
                width: 50px;
                transition: 250ms ease;
            }

            .blogo:hover {
                cursor: pointer;
                transform: scale(1.1, 1.1);
            }

            .violet:hover {
                border-color: var(--violet);
                background: var(--violet);
            }

            .blue:hover {
                border-color: var(--blue);
                background: var(--blue);
            }

            .cyan:hover {
                border-color: var(--cyan);
                background: var(--cyan);
            }

            .red:hover {
                border-color: var(--red);
                background: var(--red);
            }

            .orange:hover {
                border-color: var(--orange);
                background: var(--orange);
            }

            .green:hover {
                border-color: var(--green);
                background: var(--green);
            }

            .aquamarine:hover {
                border-color: var(--aquamarine);
                background: var(--aquamarine);
            }

            .azure:hover {
                border-color: var(--azure);
                background: var(--azure);
            }

            .amber:hover {
                border-color: var(--amber);
                background: var(--amber);
            }

            .yellow:hover {
                border-color: var(--yellow);
                background: var(--yellow);
            }

            .rose:hover {
                border-color: var(--rose);
                background: var(--rose);
            }

            .magenta:hover {
                border-color: var(--magenta);
                background: var(--magenta);
            }
            
            .vlink:hover {
                color: var(--violet);
            }

            .blink:hover {
                color: var(--blue);
            }

            .clink:hover {
                color: var(--cyan);
            }

            .rlink:hover {
                color: var(--red);
            }

            .olink:hover {
                color: var(--orange);
            }

            .glink:hover {
                color: var(--green);
            }

            .alink:hover {
                color: var(--aquamarine);
            }

            .zlink:hover {
                color: var(--azure);
            }

            .amlink:hover {
                color: var(--amber);
            }

            .ylink:hover {
                color: var(--yellow);
            }

            .slink:hover {
                color: var(--rose);
            }

            .mlink:hover {
                color: var(--magenta);
            }

            `} </style>
        </div>
    )
}
