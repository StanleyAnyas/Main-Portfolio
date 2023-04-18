import React from 'react'
import { SectionWrapper } from '../hoc'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Stack from '@mui/material/Stack';
import { Anyassor_Stanley_Developer } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

function Resume() {

  return (
    <motion.div
        variants={fadeIn("left", "spring")}
    >
         <a
            href={Anyassor_Stanley_Developer}
            download="Anyassor_Stanley_Developer.pdf"
        >
            <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<DownloadIcon />}>
                    Download My CV 
                </Button>
            </Stack>
        </a>
    </motion.div>
   
  )
}

export default SectionWrapper(Resume, "cv")