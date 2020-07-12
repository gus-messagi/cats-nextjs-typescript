import { useFetch } from '../src/services/api';

const Home: React.FC = () => {

    const data = useFetch('/breeds');

    return (
        <div className="content">
            {data && data.map((element: any, index: number) => {
                return (
                    <div 
                        key={`cat-${index}`}
                        className="cat-div"
                    >
                        <div>
                            <img src="https://placekitten.com/200/200" alt=""/>
                        </div>
                        <div>
                            <h1>{element.name}</h1>
                        </div>
                        <div className="cat-country-div">
                            <img src={`https://www.countryflags.io/${element.country_code}/shiny/64.png`} />
                            <h2>{element.origin}</h2>
                        </div>
                        <div>
                            <p>{element.description}</p>
                        </div>
                        <div className="cat-button-div">
                            <button
                                type="button"
                                className="cat-button-component"
                            >
                                <a href={element.wikipedia_url}>Click to now more</a>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>    
    )
}

export default Home;
