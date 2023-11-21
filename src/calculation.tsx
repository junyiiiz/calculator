import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Calculator.css";

export default function Calculator({
  resetNumber,
  currentInput,
  result,
  handleOperations,
  toggleNumber,
}: {
  resetNumber: () => void;
  currentInput: string;
  handleOperations: (operator: string) => void;
  result: number;
  toggleNumber: (value:string) => void;
}) {
  const handleOperation = (operator: string) => {
    handleOperations(operator);
  };
  const handleSettingCurrentInput = (value: string) => {
    toggleNumber(value);
  };

  const handleReset = () => {
    resetNumber();
  }
  return (
    <>
      <Grid
        container
        display="flex"
        sx={{
          border: 1,
          width: 320,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: 2,
            width: 285,
            height: 50,
            marginLeft: 1,
            alignItems: "right",
            justifyContent: "right",
          }}
        >
          {result ?  result :  currentInput }
        </Box>
        <Grid container sx={{ padding: "5px" }}>
          <Button className="special_operator" onClick={handleReset}>
            AC
          </Button>
          <Button className="special_operator" onClick={() => handleOperation("+/-")}>+/-</Button>
          <Button className="special_operator" onClick={() => handleOperation("%")}>%</Button>
          <Button className="operator" onClick={() => handleOperation("/")}>/</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("7")}
          >
            7
          </Button>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("8")}
          >
            8
          </Button>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("9")}
          >
            9
          </Button>
          <Button className="operator" onClick={() => handleOperation("X")}>X</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("4")}
          >
            4
          </Button>

          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("5")}
          >
            5
          </Button>

          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("6")}
          >
            6
          </Button>
          <Button className="operator" onClick={() => handleOperation("-")}>-</Button>
        </Grid>

        <Grid container sx={{ padding: "5px" }}>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("1")}
          >
            1
          </Button>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("2")}
          >
            2
          </Button>
          <Button
            className="numbers"
            onClick={() => handleSettingCurrentInput("3")}
          >
            3
          </Button>
          <Button className="operator" onClick={() => handleOperation("+")}>+</Button>
        </Grid>
        <Grid container sx={{ padding: "5px" }}>
          <Button
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "139px",
              minHeight: "37px",
            }}
            className="numbers" onClick={() => handleSettingCurrentInput("0")}
          >
            0
          </Button>
          <Button className="numbers">,</Button>
          <Button className="operator" onClick={() => handleOperation("=")}>=</Button>
        </Grid>
      </Grid>
    </>
  );
}
