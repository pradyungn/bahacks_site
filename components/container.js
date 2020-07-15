import Meta from './meta'

export default (props) => {
    return(
        <>
            <Meta title={props.title}/>
            {props.children}
        </>
    )
}
