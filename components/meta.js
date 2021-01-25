import Head from 'next/head'

export default (props) => {
    return(
        <>
            <Head>
                <link rel="icon" href="https://bahacks.vercel.app/static/app.png"/>
                <title>{props.title}</title>
                <meta name="description" content={props.desc}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="og:title" content={props.title} />
                <meta name="og:description" content={props.desc} />
                <meta
                    name="og:image"
                    content="https://bahacks.vercel.app/static/app.png"
                />

            </Head>
        </>
    )
}
