import React from 'react'
import {
    Paper,
    Grid,
    Typography
} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import InputBase from '@material-ui/core/InputBase';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles'
import './style.css'

class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            menu: "CP",
            checkbox: []
        }
    }

    componentWillMount() {

    }

    handleClickMenu(code) {
        this.setState({ menu: code })
    }

    handleAdd() {
        const { checkbox } = this.state
        let length = checkbox.length
        if (length != listItem.length) {
            let obj = listItem[length].name
            let arr = [...checkbox, obj]

            this.setState({ checkbox: arr })
        }
    }

    render() {
        const { classes } = this.props
        const { menu, checkbox } = this.state
        let getColor = 0
        let first = project.length > 3 ? true : false
        return (
            <div style={{ height: "calc(100vh - 60px)" }}>
                <div style={{ height: "100%", padding: "2% 12%" }}>
                    <Paper className={classes.background}>
                        <Grid container style={{ height: "100%", width: "100%" }}>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Paper className={classes.left}>
                                    <Button variant="contained" className={classes.menuButton}>
                                        <ClearAllRoundedIcon fontSize="small" style={{ color: "#fff" }} />
                                    </Button>

                                    <Paper className={classes.leftContent}>
                                        <Paper className={classes.nameTitle}>
                                            <Typography className={classes.textName}>{"Hai Samantha"}</Typography>
                                            <Typography className={classes.textTitle}>{"Welcome back to the workspace, we missed You!"}</Typography>
                                            <Paper style={{ display: "flex", width: "100%", backgroundColor: "#46505b", borderRadius: 10, marginTop: 20 }}>
                                                <IconButton variant="outlined">
                                                    <SearchRoundedIcon fontSize="small" style={{ color: "white", fontSize: 12 }} />
                                                </IconButton>
                                                <InputBase
                                                    placeholder="Search Task or Project..."
                                                    style={{ color: "white", fontSize: 12, width: "100%", paddingRight: "2%" }}
                                                />
                                            </Paper>
                                        </Paper>

                                        <Paper className={classes.listMenu}>
                                            <Paper style={{ display: "flex", width: "100%", backgroundColor: "#031324", boxShadow: "none" }}>
                                                <Typography className={classes.textProject}>{"Project"}</Typography>
                                                <Typography className={classes.numberProject}>{`(${project.length})`}</Typography>
                                            </Paper>

                                            {
                                                <Paper className={classes.divMenu}>
                                                    {
                                                        project.slice(0, 3).map((item, index) => {
                                                            getColor = getColor + 1
                                                            return (
                                                                <div key={`A${index}`} className={classes.divListMenu} >
                                                                    <div className={classes.divListMenuSelect} style={{ borderColor: item.code == menu ? "aqua" : "#031324" }}>
                                                                        <Button variant="contained" className={classes.buttonListMenu} style={{ backgroundImage: colorProject[getColor - 1].color }}
                                                                            onClick={this.handleClickMenu.bind(this, item.code)}
                                                                        >
                                                                            <Typography className={classes.titleTextMenu}>{item.code}</Typography>
                                                                        </Button>
                                                                    </div>
                                                                    <Typography className={classes.textMenu} style={{ textAlign: "center" }}>{item.name}</Typography>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Paper>
                                            }

                                            <div style={{ height: "15%" }} />
                                            {
                                                first
                                                    ? <Paper className={classes.divMenu}>
                                                        {
                                                            project.slice(3, 6).map((item, index) => {
                                                                getColor = getColor + 1
                                                                return (
                                                                    <div key={`B${index}`} className={classes.divListMenu} >
                                                                        <div className={classes.divListMenuSelect} style={{ borderColor: item.code == menu ? "aqua" : "#031324" }}>
                                                                            <Button variant="contained" className={classes.buttonListMenu} style={{ backgroundImage: colorProject[getColor - 1].color }}
                                                                                onClick={this.handleClickMenu.bind(this, item.code)}
                                                                            >
                                                                                <Typography className={classes.titleTextMenu}>{index == 2 ? `${(project.length - 5)}+` : item.code}</Typography>
                                                                            </Button>
                                                                        </div>
                                                                        <Typography className={classes.textMenu} style={{ textAlign: "center" }}>{index == 2 ? "" : item.name}</Typography>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Paper>
                                                    : ""
                                            }
                                        </Paper>
                                    </Paper>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} style={{ padding: 5 }}>
                                <Paper className={classes.right}>
                                    <Paper className={classes.rightContent}>
                                        <Grid container>
                                            <Grid item xs={9} sm={9} md={9} lg={9}>
                                                <Typography className={classes.titleText}>{"Cyber Punk"}</Typography>
                                                <p style={{ marginTop: 10, marginBottom: 10, fontSize: "10px", fontWeight: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum augue cursus risus venenatis consectetur.</p>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3} lg={3} style={{ textAlign: "end" }}>
                                                <IconButton variant="outlined">
                                                    <AddIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>

                                        <Paper className={classes.today}>
                                            <Grid container>
                                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                                    <Typography className={classes.todayText} style={{ marginTop: 15 }}>{"Today"}</Typography>
                                                </Grid>
                                                <Grid item xs={3} sm={3} md={3} lg={3} style={{ textAlign: "end" }}>
                                                    <IconButton variant="outlined">
                                                        <MoreHorizRoundedIcon fontSize="small" />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Paper>

                                        <Paper className={classes.listItem}>
                                            {
                                                listItem.map((item, index) => {
                                                    return (
                                                        <Grid key={`C${index}`} container>
                                                            <Grid item xs={1} sm={1} md={1} lg={1} style={{ height: 30 }}>
                                                                <Checkbox
                                                                    checked={checkbox[index] != (undefined || null) ? true : false}
                                                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                                                    size="small"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                                                <Typography className={classes.listText}>{item.name}</Typography>
                                                            </Grid>
                                                            <Grid item xs={3} sm={3} md={3} lg={3}>
                                                                <div className={classes.oval}>
                                                                    <Typography className={classes.statusText}>{item.status}</Typography>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Paper>
                                    </Paper>

                                    <Paper className={classes.plusButton}>
                                        <Button variant="contained" color="primary" style={{ borderRadius: 10, width: 20, minWidth: 5 }}
                                            onClick={this.handleAdd.bind(this)}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>
                                    </Paper>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper >
                </div>
            </div>)
    }
}

const style = theme => ({
    background: {
        borderRadius: 10,
        boxShadow: "none",
        width: "100%",
        height: "100%",
        backgroundColor: "#031324"
    },
    left: {
        borderRadius: 10,
        boxShadow: "none",
        width: "100%",
        height: "100%",
        backgroundColor: "#031324"
    },
    right: {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: "white"
    },
    rightContent: {
        paddingTop: "5%",
        paddingLeft: "10%",
        paddingRight: "10%",
        borderRadius: "10px",
        boxShadow: "none",
        height: "85%"
    },
    titleText: {
        fontSize: "20px",
        color: "black",
        fontWeight: "bold",
        fontFamily: "unset"
    },
    today: {
        marginTop: "2%",
        borderRadius: 0,
        boxShadow: "none"
    },
    todayText: {
        fontSize: "16px",
        color: "black",
        fontWeight: "bold",
        fontFamily: "unset"
    },
    listItem: {
        marginTop: "1%",
        borderRadius: 0,
        boxShadow: "none"
    },
    listText: {
        marginTop: 8,
        fontSize: "12px",
        color: "black",
        fontWeight: 600,
        fontFamily: "unset"
    },
    statusText: {
        marginTop: 8,
        fontSize: "12px",
        color: "blueviolet",
        fontWeight: 600,
        fontFamily: "unset",
        textAlign: "center"
    },
    oval: {
        background: "rgba( 80, 80, 80, 0.2)",
        borderRadius: 50
    },
    plusButton: {
        height: "10%",
        textAlign: "end",
        borderRadius: "10px",
        boxShadow: "none",
        paddingRight: "5%"
    },

    menuButton: {
        backgroundColor: "rgba(137, 141, 146, 0.5)",
        borderRadius: 10,
        padding: 0,
        minWidth: 28,
        height: 28,
        marginTop: "4%",
        marginLeft: "4%"
    },
    leftContent: {
        paddingTop: "5%",
        paddingLeft: "20%",
        paddingRight: "20%",
        borderRadius: 0,
        boxShadow: "none",
        height: "70%",
        backgroundColor: "#031324"
    },
    nameTitle: {
        height: "40%",
        borderRadius: 0,
        boxShadow: "none",
        backgroundColor: "#031324"
    },
    textName: {
        fontSize: "25px",
        color: "white",
        fontWeight: 600,
        fontFamily: "unset"
    },
    textTitle: {
        fontSize: "14px",
        color: "#46505b",
        fontWeight: 600,
        fontFamily: "unset"
    },
    listMenu: {
        height: "60%",
        borderRadius: 0,
        boxShadow: "none",
        backgroundColor: "#031324"
    },
    textProject: {
        fontSize: "15px",
        color: "white",
        fontWeight: 600,
        fontFamily: "unset"
    },
    numberProject: {
        fontSize: "12px",
        color: "#46505b",
        fontWeight: 600,
        fontFamily: "unset",
        paddingTop: 2,
        paddingLeft: 10
    },
    divMenu: {
        display: "flex",
        width: "100%",
        boxShadow: "none",
        backgroundColor: "#031324"
    },
    divListMenu: {
        height: 75,
        width: "33.33%",
        padding: "2%"
    },
    divListMenuSelect: {
        height: "100%",
        padding: "4%",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 15
    },
    buttonListMenu: {
        height: "100%",
        width: "100%",
        borderRadius: 15,
        color: "#fff",
        backgroundColor: "#031324"
    },
    textMenu: {
        fontSize: "12px",
        color: "#46505b",
        fontWeight: 600,
        fontFamily: "unset",
        textAlign: "center"
    },
    titleTextMenu: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: 25
    }
})

const listItem = [
    {
        "name": "Create initial layout for homepage",
        "status": "Approved",
        "index": 0
    }, {
        "name": "Fixing icons with transparant background",
        "status": "In Progress",
        "index": 1
    }, {
        "name": "Fixing icons with transparant background",
        "status": "In Progress",
        "index": 2
    }, {
        "name": "Create initial layout for homepage",
        "status": "In Progress",
        "index": 3
    }, {
        "name": "Discussions regarding workflow improvement",
        "status": "In Review",
        "index": 4
    }, {
        "name": "Create quotation for app redesign project",
        "status": "Waiting",
        "index": 5
    }
]

const project = [
    {
        "name": "Green House",
        "code": "GH"
    },
    {
        "name": "Cyber Punk",
        "code": "CP"
    },
    {
        "name": "Easy Crypto",
        "code": "EC"
    },
    {
        "name": "Travel App",
        "code": "TA"
    },
    {
        "name": "Landing Page",
        "code": "LP"
    },
    {
        "name": "Lain - lain 1",
        "code": "L 1"
    },
    {
        "name": "Lain - lain 2",
        "code": "L 2"
    },
    {
        "name": "Lain - lain 3",
        "code": "L 3"
    },
    {
        "name": "Lain - lain 4",
        "code": "L 4"
    },
    {
        "name": "Lain - lain 5",
        "code": "L 5"
    },
    {
        "name": "Lain - lain 6",
        "code": "L 6"
    },
    {
        "name": "Lain - lain 7",
        "code": "L 7"
    },
    {
        "name": "Lain - lain 8",
        "code": "LP"
    }
]

const colorProject = [
    {
        "code": 0,
        "color": "linear-gradient(to left bottom, #ad5389, #3c1053)"
    },
    {
        "code": 1,
        "color": "linear-gradient(to left bottom, #12c2e9, #c471ed, #f64f59)"
    },
    {
        "code": 2,
        "color": "linear-gradient(to right top, #800080, #ffc0cb)"
    },
    {
        "code": 3,
        "color": "linear-gradient(to right top, #654ea3, #eaafc8)"
    },
    {
        "code": 4,
        "color": "linear-gradient(to right top, #C6FFDD, #FBD786, #f7797d)"
    },
    {
        "code": 5,
        "color": "#031324"
    }
]

export default withStyles(style)(Index)