import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views/";
import { AddOutlined } from "@mui/icons-material";

export const JournalPages = () => {
  return (
    <>
      <JournalLayout>
        {<NothingSelectedView />}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
        </IconButton>
        {/*<NoteView />*/}
      </JournalLayout>
    </>
  );
};
