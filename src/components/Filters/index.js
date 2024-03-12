import {Box,Input} from '@mui/material';
const Filters = ({query,setQuery}) => {
    const handleChange = (event) => {
        setQuery(event.target.value)
    }
    return(
        <Box>
            <Input
                onChange={handleChange}
                value={query}
            />
        </Box>
    )
}
export default Filters