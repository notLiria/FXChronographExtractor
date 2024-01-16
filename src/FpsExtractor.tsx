import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FPSExtractor = () => {
  // eslint-disable-next-line no-unused-vars
  const [outputText, updateOutputText] = useState("");

  const updateInputText = (e: any) => {
    const fpsVals = e.target.value
      .split("\n")
      .map((line: string) => {
        return line.split(",")[1];
      })
      .join("\n")
      .trim();

    updateOutputText(fpsVals);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="input"
            multiline
            placeholder="FPS Values"
            variant="outlined"
            onChange={updateInputText}
            rows={10}
            sx={{ width: "50%" }}
          />
          <TextField
            id="output"
            multiline
            value={outputText}
            disabled
            variant="filled"
            rows={10}
            sx={{ width: "50%" }}
          />
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            navigator.clipboard.writeText(outputText);
          }}
        >
          Copy
        </Button>
      </Box>
    </div>
  );
};

export default FPSExtractor;
