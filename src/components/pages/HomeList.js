import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import ListNavbar from "../navbar/ListNavbar";
import Box from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import Spinner from "react-spinkit";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import DestCard from "../cards/DestCard";
import { fetchList } from "../../api/redux/index";
import { appendToList } from "../../api/redux/index";
import Footer from "../footer/Footer";
import { FooterLinks } from "../footer/footerLinks";
import Skeleton from "@mui/material/Skeleton";

function HomeList() {
  const q = useParams();
  const { list, loading } = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(q);
    dispatch(fetchList(""));
  }, []);

  function fetchMoreData() {
    dispatch(appendToList({}));
  }

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ justifyContent: "center", height: "100%", width: "100%" }}
      >
        <Box
          sx={{
            px: { lg: "3%", md: "0" },
            height: "100%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ListNavbar />
          <InfiniteScroll
            dataLength={list.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              <Spinner
                name="ball-beat"
                loading={loading}
                style={{
                  marginLeft: "48%",
                  marginBottom: "10%",
                }}
              />
            }
          >
            <Grid
              container
              sx={{ my: 10 }}
              spacing={{ xs: 1, sm: 1.5, md: 1.5 }}
            >
              {list.length > 0 &&
                list.map((lists, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    {loading ? (
                      <Box sx={{ pt: 0 }}>
                        <Skeleton
                          // variant="rectangular"
                          height="35rem"
                          width="23rem"
                          spacing={1}
                          animation="wave"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            maxWidth: "23rem",
                            justifyContent: "space-between",
                          }}
                        >
                          <Skeleton width="30%" />
                          <Skeleton width="20%" />
                        </Box>
                        <Skeleton width="60%" />
                      </Box>
                    ) : (
                      <DestCard
                        key={index}
                        city={lists?.address?.city}
                        price={lists?.price}
                        images={lists?.images}
                        latitude={lists?.location.latitude}
                        longitude={lists?.location.longitude}
                        country={lists?.address?.countryName}
                        loading={loading}
                        id={lists?.id}
                      />
                    )}
                  </Grid>
                ))}
            </Grid>
          </InfiniteScroll>
        </Box>
        <Footer FooterLinks={FooterLinks} />
      </Container>
    </>
  );
}

export default HomeList;
