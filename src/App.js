import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  Home,
  DirectionsCar,
  Refresh,
} from "@mui/icons-material";

function App() {
  const [value, setValue] = useState(0);

  const [slots, setSlots] = useState([
    { id: 1, status: "Free" },
    { id: 2, status: "Occupied" },
    { id: 3, status: "Free" },
    { id: 4, status: "Free" },
    { id: 5, status: "Occupied" },
    { id: 6, status: "Free" },
  ]);

  const refreshSlots = () => {
    const updated = slots.map((slot) => ({
      ...slot,
      status: Math.random() > 0.5 ? "Free" : "Occupied",
    }));
    setSlots(updated);
  };

  const freeCount = slots.filter((s) => s.status === "Free").length;
  const occupiedCount = slots.length - freeCount;

  return (
    <Box sx={{ background: "#f4f6f8", minHeight: "100vh", pb: 8 }}>
      <Container maxWidth="sm" sx={{ pt: 3 }}>

        {/* ---------------- HOME ---------------- */}
        {value === 0 && (
          <>
            <Box
  sx={{
    background: "linear-gradient(135deg, #1565c0, #42a5f5)",
    color: "white",
    p: 2,
    borderRadius: 3,
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: 4,
  }}
>
  <DirectionsCar sx={{ fontSize: 28, mr: 1 }} />
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{
      letterSpacing: 1,
      textTransform: "uppercase",
    }}
  >
    Smart Parking
  </Typography>
</Box>


            <Card sx={{ borderRadius: 3, mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Parking Availability
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Box textAlign="center">
                    <Typography variant="h4" color="green">
                      {freeCount}
                    </Typography>
                    <Typography variant="body2">
                      Free Slots
                    </Typography>
                  </Box>

                  <Box textAlign="center">
                    <Typography variant="h4">
                      {slots.length}
                    </Typography>
                    <Typography variant="body2">
                      Total Slots
                    </Typography>
                  </Box>

                  <Box textAlign="center">
                    <Typography variant="h4" color="orange">
                      {occupiedCount}
                    </Typography>
                    <Typography variant="body2">
                      Occupied
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {slots.map((slot) => (
              <Card
                key={slot.id}
                sx={{
                  mb: 2,
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 2,
                  py: 1.5,
                }}
              >
                <Typography>Slot {slot.id}</Typography>
                <Chip
                  label={slot.status}
                  color={slot.status === "Free" ? "success" : "error"}
                />
              </Card>
            ))}

            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                startIcon={<Refresh />}
                onClick={refreshSlots}
                sx={{ borderRadius: 5, px: 4 }}
              >
                Refresh
              </Button>
            </Box>
          </>
        )}

        {/* ---------------- REALISTIC TOP VIEW ---------------- */}
        {value === 1 && (
          <>
            <Box
  sx={{
    background: "linear-gradient(135deg, #1565c0, #42a5f5)",
    color: "white",
    p: 2,
    borderRadius: 3,
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: 4,
  }}
>
  <DirectionsCar sx={{ fontSize: 32, mr: 1 }} />
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{
      letterSpacing: 1,
      textTransform: "uppercase",
    }}
  >
    Parking Area - Top View
  </Typography>
</Box>


            <Box
              sx={{
                background: "#e0e0e0",
                borderRadius: 4,
                p: 4,
                height: 550,
                position: "relative",
              }}
            >
              {/* Center Road */}
              <Box
                sx={{
                  position: "absolute",
                  left: "35%",
                  width: "30%",
                  top: 0,
                  bottom: 0,
                  background: "#9e9e9e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                ↑
                <br />
                ↓
              </Box>

              {/* LEFT SLOTS */}
              <Box
                sx={{
                  position: "absolute",
                  left: 10,
                  top: 20,
                  bottom: 20,
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {slots.slice(0, 3).map((slot) => (
                  <Box
                    key={slot.id}
                    sx={{
                      height: 110,
                      border: "3px solid white",
                      borderRadius: 2,
                      background:
                        slot.status === "Free"
                          ? "#fafafa"
                          : "#ffcdd2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {slot.status === "Occupied" && (
                      <DirectionsCar
                        sx={{
                          fontSize: 50,
                          transform: "rotate(90deg)",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>

              {/* RIGHT SLOTS */}
              <Box
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 20,
                  bottom: 20,
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {slots.slice(3, 6).map((slot) => (
                  <Box
                    key={slot.id}
                    sx={{
                      height: 110,
                      border: "3px solid white",
                      borderRadius: 2,
                      background:
                        slot.status === "Free"
                          ? "#fafafa"
                          : "#ffcdd2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {slot.status === "Occupied" && (
                      <DirectionsCar
                        sx={{
                          fontSize: 50,
                          transform: "rotate(-90deg)",
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}
      </Container>

      {/* ---------------- BOTTOM NAV ---------------- */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Area" icon={<DirectionsCar />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
