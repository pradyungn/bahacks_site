import Container from '../components/container'

let indices = ['Hackathon', 'Opportunity', 'Lecture', 'Workshop', 'Other']
let colors = ["blue", "orange", "rose", "violet", "green"]

function Tile(props) {
    return(
        <a href={props.link} className="tile">
            <div>
                <div className="top"> <div>{props.name}</div>
                    <div className="category" style={{backgroundColor: "var(--" + colors[indices.indexOf(props.category)] + ")"}}>{props.category}</div>
                </div>
                <div className="hline" />
                <div>{props.description}</div>
                <div className="date">{props.date}</div>
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

                .date {
                    margin-top: 10px;
                    border-top: 2px solid #c0c0c0;
                    width: 5rem;
                }
            `} </style>
            </div>
        </a>
    )
}

function Array(props) {
    if (props.events == "oof") {
        return (
            <div className="erban">
                <div>There was an error fetching the list? Contact staff, this could be a bug.</div>
            </div>
        )
    } else {
        return(
            <div className="array">
                {props.events.map((record) => {
                    return(
                        <Tile key={record["Event Name"]} date={record["Date"]} name={record["Event Name"]} category={record["Category"]} link={record["Website"] } description={record["Description"]}/>
                    )
                })}
            </div>
        )
    }
}

const main = (props) => {
    return(
            <Container title="Listings">
                <h1>Listings</h1>
                <div className="center">Events, Opportunities, and car dealerships.</div>
                <Array events={props.events}/>
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

export async function getServerSideProps() {
        const Airtable = require('airtable')
        const base = new Airtable({ apiKey: process.env.airkey }).base(process.env.airbase)

        return {
            props: {
                events: await new Promise((resolve, reject) => {
                    const events = []
                    base('Public')
                        .select({ maxRecords: 3, view: 'Grid view' })
                        .eachPage((records, fetchNextPage) => {
                            events.push(...records.map(({ fields }) => fields))
                            fetchNextPage()
                        }, error => error ? reject(error) : resolve(events))
                })
            }
        }
    }


export default main
