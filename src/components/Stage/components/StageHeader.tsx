import { Button, Typography } from "@mui/material";
import { HeaderBox } from "../styles";

export const StageHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <HeaderBox>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Datlování
      </Typography>
      <Button variant="outlined" onClick={onMenuClick} size="small">
        ← Menu
      </Button>
    </HeaderBox>
  );
};
