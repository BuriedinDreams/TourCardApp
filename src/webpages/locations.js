import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuiltedImageList from "../ components/ImageCollage";


function locations() {
    return (
        <Container sx={{ width: 1000 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Making Memories in Montana
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }} >
                <img src="https://www.visitmt.com/binaries/content/gallery/MTOT/photos/fall/2019/0081mt_cabinetmts_couser_rgbrm.jpg/0081mt_cabinetmts_couser_rgbrm.jpg/MTOT%3Alandscape" alt="Image of person looking at landscape of Montana" width={630} />
                <QuiltedImageList />
            </Box>
        </Container>
    )
};

export default locations;