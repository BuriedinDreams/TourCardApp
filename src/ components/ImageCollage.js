import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: 500, height: 450, marginLeft: 1 }}
            variant="quilted"
            cols={4}
            rowHeight={130}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'http://montanaconnectionspark.com/wp-content/uploads/2019/03/discovery-ski-area-skiing-1024x1024.jpg',
        title: 'Skiing in Montana',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://permies.com/t/60918/a/45754/DSC_6161-(1).jpg',
        title: 'Elk',
    },
    {
        img: 'https://www.montanaangler.com/sites/default/files/gallery_images/43/p1b7ebtqh01uvubdt13qca35g9d13.jpg',
        title: 'Trout Fishing',
    },
    {
        img: 'https://res.cloudinary.com/springbok-puzzles-com/image/upload/q_40/q_60/v1411423181/Flag%20Large/60-100-10303-2.jpg',
        title: "Montana's flag",
        cols: 2,
    },
    {
        img: 'https://cdn.history.com/sites/2/2017/03/GettyImages-154931596.jpg',
        title: 'Waterfall',
        cols: 2,
    },
    {
        img: 'https://roadtrippinwithbobandmark.com/wp-content/uploads/2017/06/yellowstone-2225102_1280.jpg',
        title: 'Buffalo',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://blog.bozemancvb.com/hubfs/iStock-468052892_c-1.jpg',
        title: 'old Faithful',
    },
    {
        img: 'https://cdn.globetrotting.com.au/wp-content/uploads/20190205105539/Bozeman-feature-image.jpg',
        title: 'Bozeman Montana',
    },

];


export default QuiltedImageList;