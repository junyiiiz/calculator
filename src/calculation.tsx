import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
// import './Calculator.css'
export default function Calculator() {
  return (
    <>
    <Button className="special_operator">AC</Button>
      <Container>
        <Grid container sx={{ padding: "5px" }}>
          <Box> Display of the</Box>
        </Grid>
        <Grid container sx={{ padding: "5px" }}>
          <Button className="special_operator">AC</Button>
          <Button className="special_operator">+/-</Button>
          <Button className="special_operator">%</Button>
          <Button className="operator">/</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button className="numbers">7</Button>
          <Button className="numbers">8</Button>
          <Button className="numbers">9</Button>
          <Button className="operator">X</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button className="numbers">4</Button>

          <Button className="numbers">5</Button>

          <Button className="numbers">6</Button>
          <Button className="operator">-</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button className="numbers">1</Button>
          <Button className="numbers">2</Button>
          <Button className="numbers">3</Button>
          <Button className="operator">+</Button>
        </Grid>
        <Grid container sx={{ padding: "5px" }}>
          <Button
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "139px",
              minHeight: "37px",
            }}
            className="numbers"
          >
            0
          </Button>
          <Button className="numbers">,</Button>
          <Button className="operator">=</Button>
        </Grid>
      </Container>
    </>
  );
}
