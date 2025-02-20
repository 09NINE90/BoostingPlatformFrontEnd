import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import { useState } from 'react';
import ModalTemplate from '../../utils/modalTemplate/ModalTemplate';


const Dashboard = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUUID, setSelectedUUID] = useState(null);


    const getAllActiveOrders = () => {
        return [
            {uuid:"123", name: "Dark Matter", game: "COD:BO6", desc: "START: ASAP \n REGION: LA", platform: "PS5", price: "1200"},
            {uuid:"321", name: "Last Wish", game: "DESTINY", desc: "START: ASAP \n ADDONS: ALL \n REGION: LA", platform: "PC",price: "12"},
            {uuid:"54321", name: "ASC 3", game: "VOLORANT", desc: "test", platform: "PS4",price: "500"}
        ]
    }

    const openModal = (uuid) => {
        setSelectedUUID(uuid);
        setModalIsOpen(true);
    }

    const getOrderInWork = () => {
        console.log(`get order with uuid: ${selectedUUID} in work `);
    }

    return (
        <>
            <TableContainer className='bg-[#1E1930] m-3 w-full'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div className='text-[#fff]'>Available Orders </div></TableCell>
                            <TableCell align="center"><div className='text-[#fff]'>Game</div></TableCell>
                            <TableCell align="center"><div className='text-[#fff]'>Description</div></TableCell>
                            <TableCell align="center"><div className='text-[#fff]'>Platform</div></TableCell>
                            <TableCell align="center"><div className='text-[#fff]'>Price</div></TableCell>  
                            <TableCell align="center"><div className='text-[#fff]'>Action</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getAllActiveOrders().map((row) => (
                            <TableRow
                                
                                key={row.uuid}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, p:2 }}
                            >
                                <TableCell component="th" scope="row">
                                <div className='text-[#fff]'>{row.name}</div>
                                </TableCell>
                                <TableCell align="center"><div className='text-[#fff]'>{row.game}</div></TableCell>
                                <TableCell align="center"><div className='text-[#fff]'>{row.desc}</div></TableCell>
                                <TableCell align="center"><div className='text-[#fff]'>{row.platform}</div></TableCell>
                                <TableCell align="center"><div className='text-[#fff]'>${row.price}</div></TableCell>
                                <TableCell align="center">
                                    <Button
                                        onClick={() => openModal(row.uuid)} 
                                    >
                                        Accept
                                    </Button>
                            </TableCell>
                         </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            <ModalTemplate
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                content={<p>Are you sure?</p>}
                actions={<div className='flex justify-center items-center'>
                    <Button variant="outlined" onClick={getOrderInWork}>
                        Accept
                    </Button>
                </div>} 
        />
    </>
    );
}

export default Dashboard