const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: []
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
			}
		}
	};
};

export default getState;
