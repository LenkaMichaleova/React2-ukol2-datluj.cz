import { Button } from "@mui/material";
import { HeaderBox } from "../styles";
import { TitleStyled } from "../../Welcome/styles";

export const StageHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <HeaderBox>
      <TitleStyled variant="h4">Datlování</TitleStyled>
      <Button variant="outlined" onClick={onMenuClick} size="small">
        ← Menu
      </Button>
    </HeaderBox>
  );
};
