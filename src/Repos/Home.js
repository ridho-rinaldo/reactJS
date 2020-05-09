import React from 'react'
import axios from 'axios'
import Repo from './Repo'
import Relasi from './Relasi'
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Grid
} from '@material-ui/core'


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            dataRelasi: []
        }
    }

    componentWillMount = async () => {
        let url = 'http://localhost:3000/get-relasi'
        await Repo(url, axios)
        this.setState({ dataRelasi: Relasi.data })
    }

    render() {
        const { dataRelasi } = this.state
        return (
            Relasi !== null ?
                <Paper style={{ borderRadius: 0, boxShadow: 'none' }}>
                    <Grid container>
                        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <Paper>
                                <TableContainer>
                                    <Table style={{ minWidth: 650 }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Id</TableCell>
                                                <TableCell align="center">Nama</TableCell>
                                                <TableCell align="center">Tipe</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {dataRelasi.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell align="center">{row.id}</TableCell>
                                                    <TableCell align="center">{row.nama}</TableCell>
                                                    <TableCell align="center">{row.tipe}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>

                        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                    </Grid>
                </Paper>
                : ''
        )
    }
}

export default Home