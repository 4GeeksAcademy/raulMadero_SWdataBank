const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favourites: [],
			character: {},
			vehicle: {},
			planet: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			setCharacters: async (data) => {
				const newCharacters = []
				for (let i = 1; i < data.results.length; i++) {
					const element = await fetch(`https://www.swapi.tech/api/people/${i}`);
					const character = await element.json()
					const store = getStore()
					newCharacters.push(character.result.properties)
					setStore({characters: newCharacters})					
				}
			},
			setVehicles: async (data) => {
				const newVehicles = []
				for (let i = 4; i < data.results.length; i++) {
					const element = await fetch(`https://www.swapi.tech/api/vehicles/${i}`);
					const vehicles = await element.json()
					const store = getStore()
					newVehicles.push(vehicles.result.properties)
					setStore({vehicles: newVehicles})					
				}
			},
			setPlanets: async (data) => {
				const newPlanets = []
				for (let i = 1; i < data.results.length; i++) {
					const element = await fetch(`https://www.swapi.tech/api/planets/${i}`);
					const planet = await element.json()
					const store = getStore()
					newPlanets.push(planet.result.properties)
					setStore({planets: newPlanets})					
				}
			},
			addFavourites: async (type, name) => {
				const element = await fetch(`https://www.swapi.tech/api/${type}?name=${name}`)
				const fav = await element.json()
				console.log(fav.result[0].properties)
				const store = getStore()
				const newFav = store.favourites.concat(fav.result[0].properties)
				setStore({favourites: newFav})
				console.log(store.favourites)
			},
			getCharacter: async (name) => {
				const element = await fetch(`https://www.swapi.tech/api/people?name=${name}`)
				const char = await element.json()
				const store = getStore()
				setStore({character: char.result[0].properties})
			},
			getVehicle: async (name) => {
				const element = await fetch(`https://www.swapi.tech/api/vehicles?name=${name}`)
				const vehicle = await element.json()
				console.log(char.result[0].properties)
				const store = getStore()
				setStore({vehicle: vehicle.result[0].properties})
				console.log(store.vehicle)
			},
			getPlanet: async (name) => {
				const element = await fetch(`https://www.swapi.tech/api/planets?name=${name}`)
				const planet = await element.json()
				console.log(planet.result[0].properties)
				const store = getStore()
				setStore({planet: planet.result[0].properties})
				console.log(store.planet)
			}
		}
	}
};

export default getState
