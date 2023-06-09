import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="space-between"
      sx={{ marginBottom: 1 }}
      alignItems={"center"}
    >
      <Grid>
        <Typography fontSize={39} fontWeight={"light"}>
          4 de abril de 2023
        </Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, marginRight: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", marginBottom: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
        />
      </Grid>

      {/*Image gallery*/}
      <ImageGallery />
    </Grid>
  );
};
