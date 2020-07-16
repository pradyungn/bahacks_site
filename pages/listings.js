import Container from '../components/container'

let indices = ['Hackathon', 'Opportunity', 'Lecture', 'Workshop', 'Other']
let colors = ["blue", "orange", "rose", "violet", "green"]

function Tile(props) {
    return(
        <a href={props.link} className="tile">
            <div>
                <div className="top">
                    <div>{props.name}</div>
                    <div className="category" style={{backgroundColor: "var(--" + colors[indices.indexOf(props.category)] + ")"}}>{props.category}</div>
                </div>
                <div className="hline" />
                <div>{props.description}</div>
                <style jsx global>{`
                .category {
                    border-radius: 2px;
                    color: #101010;
                    padding: 2px;
                }

                .top {
                    display: flex;
                    justify-content: space-between;
                }

                .tile {
                    font-weight: 400;
                }
            `} </style>
            </div>
        </a>
    )
}

export default () => {
    return(
            <Container title="Listings">
                <h1>Listings</h1>
                <div className="center">Events, Opportunities, and car dealerships.</div>
                <div className="array">
                </div>
                <style jsx global>{`
                    .tile {
                        padding: 20px;
                        border-radius: 8px;
                        border: 3px solid var(--white);
                        transition: 250ms ease;
                        margin-bottom: 10px;
                    }

                    .tile:hover {
                        transform: scale(1.05, 1.05);
                        cursor: pointer;
                        text-decoration: none;
                    }

                    .array {
                        margin: 20px;

                        display: flex;
                        flex-wrap: wrap;
                        margin-bottom: -10px;
                    }

                    @media(min-width: 700px) {
                        .array {
                            justify-content: space-between;
                        }

                        .tile {
                            width: 42.25%;
                        }
                    }

                    @media(max-width: 699px) {
                        .array {
                            justify-content: center;
                        }

                        .tile {
                            width: 100%;
                        }
                    }
                `} </style>
            </Container>)
}
