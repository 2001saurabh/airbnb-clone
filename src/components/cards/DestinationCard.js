import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SlickCard from "./Slick";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { fetchList } from "../../api/redux/index";

function DestinationCard({ rs = 8567, listData, fetchList }) {
  useEffect(() => {
    fetchList();
  }, []);

  // const data = listData.list;
  // console.log(data);
  // listData.isLoading ? (
  //   <h2>Loading</h2>
  // ) : listData.error ? (
  //   <h2>{listData.error}</h2>
  // ) :
  return (
    <>
      {/* // <Grid
    //   container
    //   spacing={{ xs: 1, sm: 1.5, md: 2.2 }}
    //   sx={{ height: "100%", width: "100%" }}
    //   // columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
    // > */}
      {Array.from(Array(12)).map((_, index) => (
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
          key={index}
          sx={{
            height: "100%",
            width: "100%",
          }}

          // sx={
          //   {
          //     // display: "flex",
          //     // width: "20%",
          //     // height: "30%",
          //     // justifyContent: "center",
          //     // alignItems: "center",
          //   }
          // }
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              // maxWidth: "25rem",
              minWidth: "35%",

              minHeight: "50%",
              cursor: "pointer",
            }}
          >
            <SlickCard link="/rooms" />

            <Link to="/rooms">
              {/* {listData.list.map((list) => ( */}
                <CardContent>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {/* {list.address.city},{list.address.countryName} */}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        distance kilometer away
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1">₹{rs} per night</Typography>
                      <Typography variant="body1" color="text.secondary">
                        8–15 May
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              {/* ))} */}
            </Link>
          </Card>
        </Grid>
      ))}
      {/* </Grid> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  listData: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchList: () => dispatch(fetchList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DestinationCard);
