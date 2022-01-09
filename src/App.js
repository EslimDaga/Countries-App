import { useEffect, useState } from "react";
import Header from "./components/Header";
import { countries } from "./service/countries";
import styled from "styled-components";

const ImageFlag = styled.img`
  width: 100%;
  height: 200px;
`

const App = () => {

  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    countries().then((countries) => {
      setAllCountries(countries);
    })
  },[])

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
            {
              allCountries.map((countrie) => (
                <div className="card card-bordered" key={countrie.alpha2Code}>
                  <figure>
                    <ImageFlag src={countrie.flags.png} alt={countrie.name} width="auto" height="200"/>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{countrie.name}
                      <div className="badge mx-2 badge-primary-focus">{countrie.alpha2Code}</div>
                    </h2>
                    <div className="flex justify-between">
                      <h2>Nombre Nativo</h2>
                      <h2 className="font-bold">{countrie.nativeName}</h2>
                    </div>
                    <div className="flex justify-between">
                      <h2>Población</h2>
                      <h2 className="font-bold">{countrie.population}</h2>
                    </div>
                    <div className="flex justify-between">
                      <h2>Capital</h2>
                      <h2 className="font-bold">{countrie.capital}</h2>
                    </div>
                    <div className="flex justify-between">
                      <h2>Región</h2>
                      <h2 className="font-bold">{countrie.region}</h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
