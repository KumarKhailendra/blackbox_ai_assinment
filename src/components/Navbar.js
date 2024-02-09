import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return <>
       <AppBar position="static" sx={{ background: "#121212" }}>
       <Container maxWidth="lg">
        <Toolbar>
          <Link href={"/"} style={{height: "100%"}}>
            <Image src={"https://www.blackbox-ai.org/images/logo.svg"} alt="BlackBoxAI" width={70} height={70} />
          </Link>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "3%" }}>
                BlackBox AI
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Webinar" />
                <Tab label="Blogs" />
                <Tab label="Contact" />
                <Tab label="Services" />
              </Tabs>
              <Button variant="outlined" sx={{ marginLeft: "auto" }}>
                Signin
              </Button>
            </>
          )}
        </Toolbar>
        </Container>
      </AppBar>
    </>
}