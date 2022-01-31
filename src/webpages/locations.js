import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Imagecollage from "../ components/ImageCollage";
import Accordion from "../ components/Accordion";


function locations() {
    return (
        <Container sx={{ width: 1000 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Making Memories in Montana
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }} >
                <img src="https://www.visitmt.com/binaries/content/gallery/MTOT/photos/fall/2019/0081mt_cabinetmts_couser_rgbrm.jpg/0081mt_cabinetmts_couser_rgbrm.jpg/MTOT%3Alandscape" alt="Image of person looking at landscape of Montana" width={630} />
                <Imagecollage />
            </Box>
            <Box>
                <Typography variant="h4" component="h1" marginTop={3}>
                    About Montana
                </Typography>
                <Typography variant="h6" component="p" marginTop={3}>
                    When visiting Montana make sure to stop at the Yellowstone National Park.The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular. Montana offers unmatched trails and undiscovered country for mountain bikers of all levels. If visiting in the winter time Montana has a long list of skiing and snowboarding options.
                </Typography>
                <Typography variant="h5" component="h1" marginTop={3}>
                    Frequently Asked Questions
                </Typography>
                <Typography marginTop={3}>
                    <Accordion />
                </Typography>
            </Box>
        </Container >
    )
};

export default locations;