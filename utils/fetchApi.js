import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key":
				"1a1bc3d087msh2a5d1a17b61af00p13192ejsn7ef913858659",
		},
	});
	return data;
};
