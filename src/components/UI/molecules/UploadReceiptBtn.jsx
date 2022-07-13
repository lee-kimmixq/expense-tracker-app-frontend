import React from "react";
import Box from "@mui/material/Box"
import { Button } from "@mui/material";
import GenerateIcon from "../atoms/GenerateIcon.jsx";

export default function UploadReceiptBtn ({ photo, setPhoto }) {

  const handleFileUpload = (e) => {
    setPhoto(e.target.files[0]);
  }

  return (
    <Box>
      <label htmlFor="contained-button-file">
        <input style={{display: 'none'}} accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileUpload}/>
        <Button variant="contained" component="span"
        sx={{
          display: 'flex', 
          width: '100%', 
        }}  
        color={'secondary'} 
        startIcon={photo ? <GenerateIcon name={'download_done'} /> : <GenerateIcon name={'upload'} />}>
          {photo ? `${photo.name}`: "Upload Receipt"}
        </Button>
      </label>
        
    </Box>
  );
}

