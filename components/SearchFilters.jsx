import { useEffect, useState } from "react";
import {
	Flex,
	Select,
	Box,
	Text,
	Input,
	Spinner,
	Icon,
	Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
//import {MdCancel} from 'react-icon/md'
import Image from "next/image";

const SearchFilters = () => {
	const [filters, setFilters] = useState({});
	return <div>SearchFilters</div>;
};

export default SearchFilters;
