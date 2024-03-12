import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const ForgotPassword = () => {
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
            Forgot Password
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Send Reset Link
            </Button>
            <Grid container>
                <Grid item>
                <Link to="/login" variant="body2">
                    {"Remember your password? Sign In"}
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>
        </Container>
    );
}

