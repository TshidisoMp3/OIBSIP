import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";


const Login = () => {
    return (
        <Container>
        <Box
            sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            >
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            <Grid container>
                <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    );
}
