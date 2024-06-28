import './App.css'
import Card from './Card'
import './Card.css'
import MRSPC from "./assets/MRSPC.jpg"
import TFL from "./assets/TFL.jpeg"
import ATL from "./assets/ATL.jpg"


function App() {
  return (
    <>
      <Card img={MRSPC} 
            alt="Image représentative du Musée de l'Air et de l'Espace" 
            title="Musée de l'Air et de l'Espace" 
            desc="Le musée de l'Air et de l'Espace du Bourget est le plus important musée aéronautique de France. Fondé en 1919, il est le plus ancien et l'un des plus grands du monde."/>

      <Card img={TFL} 
            alt="Image représentative la Tour Eiffel" 
            title="Tour Eiffel" 
            desc="La tour Eiffel est une tour de fer puddlé de 330 m de hauteur située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7ᵉ arrondissement. Son adresse officielle est 5, avenue Anatole-France."/>

      <Card img={ATL} 
            alt="Image représentative l'Atelier des Lumières" 
            title="Atelier des Lumières" 
            desc="L’Atelier des Lumières est un centre d’art numérique situé au 38 rue Saint-Maur dans le 11ᵉ arrondissement de Paris. Créé par Culturespaces, il a ouvert ses portes le 13 avril 2018."/>
      <Card/>
    </>
    
  )
}

export default App
