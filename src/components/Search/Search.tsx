import { SearchStyles } from "./Search.styled-components";
import { Seeker, Filter } from "@/components";

const Search = () => {
	return (
		<SearchStyles>
			<Seeker />
			<Filter />
		</SearchStyles>
	);
};

export default Search;
