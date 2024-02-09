import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Badge, Box, Container } from "@mui/material";
import WebinarRegistretion from "@/components/WebinarRegistretion";
import WebinarDetaile from "@/components/WebinarDetaile";
import Image from "next/image";

const Img = styled(Image)({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "100%",
  width: "100%",
});

const BadgeStyled = styled(Badge)({
  paddingLeft: "2rem",

  "& .MuiBadge-badge.MuiBadge-standard": {
    padding: "0.4rem",
    color: "#fff",
    fontWeight: "600",
  },
});

const BadgeCustomised = styled(Badge)({
  "& .MuiBadge-badge.MuiBadge-standard": {
    // transform: scale(1) translate(50%, -50%);
    transform: "unset",
    right: "unset",
    left: 0,
    top: 0,
    "transform-origin": "unset",

    padding: "0.4rem",
    color: "#fff",
    fontWeight: "600",
    width: "250px",
  },
});

export default function Webinar({ webinarCardData }) {
  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 6 }}>
      <Paper
        sx={{
          p: 2,
          margin: "20px",
          maxWidth: "100%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#000000" : "#fff",
          border: "1px solid #fff",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ width: "100%", height: "100%" }}>
              {webinarCardData?.image && (
                <Img
                  alt="complex"
                  src={webinarCardData?.image || ""}
                  height={1000}
                  width={1000}
                  priority
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ pt: 10, pb: 8 }}>
            <Typography gutterBottom variant="subtitle1" component="div">
              <BadgeStyled
                badgeContent={webinarCardData?.category}
                color="primary"
              ></BadgeStyled>
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "1.8rem",
                lineHeight: "2.3rem",
              }}
              component="div"
            >
              {webinarCardData?.webinar_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify" }}
              gutterBottom
            >
              {webinarCardData?.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Host By:- {webinarCardData?.Author_name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              <BadgeCustomised
                badgeContent={`Upcoming slot is ${webinarCardData?.date} at ${webinarCardData?.time}`}
                color="primary"
              ></BadgeCustomised>
            </Typography>
            <BadgeCustomised
              badgeContent={`₹ ${webinarCardData?.price}`}
              sx={{
                marginTop:"1rem",
                "& .MuiBadge-badge.MuiBadge-standard": {
                  width: "70px",
                  borderRadius:"5px"
                },
              }}
              color="success"
            ></BadgeCustomised>
          </Grid>
        </Grid>
      </Paper>
      <WebinarRegistretion webinarCardData={webinarCardData} />
      <WebinarDetaile webinarCardData={webinarCardData} />
    </Container>
  );
}
