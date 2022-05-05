import React from 'react';
import './3DTour.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';



function ThreeDTour() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false)};

    return (
        <div>
            <div className="threeDTourBackground">
                <div className="threeDTourBackground2"></div>
            </div>            
            <div>
                <div className="threeDTourСontent">
                    <Stack spacing={5} sx={{width: '100%', justifyContent: 'center'}}>
                        <div className="threeDTourTitle">3D ТУР ПО ДОМУ ФРАНКА</div>
                        <Typography variant="body2" color="secondary" maxWidth='600px' textAlign='center' alignSelf='center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                        <Box textAlign='center' style={{marginBottom: '5vw'}}>
                            <Button variant="text" color="secondary" id='but' className='b2' onClick={handleOpen}>
                                Почати тур
                            </Button>
                        </Box>
                    </Stack>
                </div>
            </div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "1200px",
                            backgroundColor: 'rgba(0,0,0,0)'
                        },
                    },
                }}
                PaperProps={{
                    elevation: 0
                }}
                ><iframe title="title" src="https://www.google.com/maps/embed?pb=!4v1651694835721!6m8!1m7!1sCAoSLEFGMVFpcE9nTTRabzR3MmJyYmVmSGFaZmNLSGhxbmx3SHJ1NjhOSTM0Z2hX!2m2!1d49.8222018032935!2d24.03152789814749!3f78.41!4f-10.170000000000002!5f0.7820865974627469" width="800" height="600" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Dialog>
        </div>
    )
}

export default ThreeDTour;