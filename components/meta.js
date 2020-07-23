import Head from 'next/head'

export default (props) => {
    return(
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="https://bahacks.vercel.app/static/blogo.png"/>
            </Head>
        </>
    )
}
