import Head from 'next/head'

export default (props) => {
    return(
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
        </>
    )
}
