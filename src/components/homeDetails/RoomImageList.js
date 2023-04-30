import * as React from "react";
import { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Container } from "@mui/material";
// import Navbar from "../navbar/Navbar";
import ImageNav from "./ImageNav";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../../api/redux/index";
import { useParams } from "react-router-dom";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?im_w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format`,
    srcSet: `${image}?im_w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function RoomImageList() {
  const { list, loading } = useSelector((state) => state.list);

  const query = useParams();
  const id = query.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(`${id}`));
  }, [id]);
  // console.log(query);
  const data = list[0];
  return (
    <>
      <ImageNav />
      <Container maxWidth="md">
        <ImageList
          sx={{
            width: 800,
            minHeight: "100%",

            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: "translateZ(0)",
          }}
          rowHeight={200}
          gap={8}
        >
          {data?.images.map((item) => {
            const cols = item.isHeroImage ? 2 : 1;
            const rows = item.isHeroImage ? 2 : 1;

            return (
              <ImageListItem
                key={item.url}
                cols={cols}
                rows={rows}
                sx={{
                  cursor: "pointer",
                  bgcolor: "black",
                  objectFit: "contain",
                  overflow: "hidden",
                  "&:hover": {
                    filter: `brightness(0.93)`,
                  },
                }}
              >
                <img
                  {...srcset(item.url, 720, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Container>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
