import React, { Component } from "react";
import { Grid, IconButton, Card, Typography, LinearProgress } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";

export default class MusicPlayer extends Component {
    constructor(props) {
        super(props);
    }

    pauseSong() {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
        };
        fetch("/spotify/pause", requestOptions);
    }

    playSong() {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
        };
        fetch("/spotify/play", requestOptions);
    }

    render() {
        const songProgress = (this.props.time / this.props.duration)*100;
        return (<Card>
            <Grid container>
                <Grid item xs={4} align="center">
                    <img src={this.props.image_url} height="100%" width="100%"/>
                </Grid>
                <Grid item xs={8} align="center">
                    <Typography variant="h5" component="h5">
                        {this.props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {this.props.artist}
                    </Typography>
                    <div>
                        <IconButton onClick={ () => {this.props.is_playing ? this.pauseSong() : this.playSong();}} >
                            {this.props.is_playing ? <PauseIcon/> : <PlayArrowIcon/>}
                        </IconButton>
                        <IconButton>
                            <SkipNextIcon/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgress} />
        </Card>);
    }
}