import React from "react";
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import {Box,Grid} from '@mui/material';
import Table2 from '../../Components/Table2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Accordian() {
    const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};
 return(
     <>
         <Navbar/>
         
         <Box>
        
             <Grid container spacing={0} >
            
            
                    <Grid item xs={2}>
                       <Sidebar/>
                    </Grid>
                    <Grid item xs={9}>
                    <Grid xs={{display:'flex'}} className='btn-icon-grid'>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    
                            <Tab label="Permissions" ></Tab>
                            <Tab label="Approval Matrix"></Tab> 
                            {/* <Typography >Last synced 15 mins ago</Typography> */}
                            </Tabs>
                      
                    </Grid>
                    
                    <Grid xs={{display:'flex'}} className='btn-icon-grid'>
                        <Button variant="contained" startIcon={<AddIcon  />} className='add-btn'>
                            Add Role
                             </Button>
                        <CreateIcon style={{marginLeft:50}}/>
                        <DeleteOutlineIcon style={{marginLeft:50}}/>
                    </Grid>
                        <Table2/>
                    </Grid>
                    <Grid item xs={1}></Grid>
             </Grid>
         </Box>
         
     </>
 )   
}
export default Accordian