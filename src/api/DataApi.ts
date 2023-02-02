import axios from "axios";
import { APIInterface } from "./apiInterface";

const BASE_URL = "https://restcountries.com/v3.1/";

export const getData = async (url: string) => {
	const { data } = await axios.get<APIInterface[]>(`${BASE_URL}${url}`);
	return data;
};
