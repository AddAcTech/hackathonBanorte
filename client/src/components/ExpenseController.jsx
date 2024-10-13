import { useState, useMemo } from "react";
import { Box, TextField } from "@mui/material"; // Importación corregida
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function ExpenseController() {
  const [budget, setBudget] = useState(0);
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const handleChange = (e) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando...");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg m-10 p-10">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Presupuesto inicial"
            variant="outlined"
            sx={{ width: "80ch" }}
            color="none"
          />
        </Box>
        <div className="flex flex-col space-y-5 mt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha Estimada"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </div>
        <input
          type="submit"
          value="Cantidad"
          className="bg-banorte-red hover:bg-red-600 cursor-pointer w-full p-2 mt-5 text-white font-black uppercase disabled:opacity-40 rounded-lg"
          disabled={isValid}
        />
      </form>
    </div>
  );
}
