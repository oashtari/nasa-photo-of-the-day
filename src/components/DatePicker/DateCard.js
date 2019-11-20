import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


<form className={classes.container} noValidate>
    <TextField
        id="date"
        label="imageDate"
        type="date"
        defaultValue="2019-09-29"
        className={classes.textField}
        InputLabelProps={{
            shrink: true,
        }}
    />
</form>

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));

// export default function DatePicker() {
//     const classes = useStyles();

//     return (
//         <form className={classes.container} noValidate autoComplete="off">
//             <div>
//                 <TextField
//                     id="standard-basic"
//                     className={classes.textField}
//                     label="Standard"
//                     margin="normal"
//                 />
//             </div>
//             <div>
//                 <TextField
//                     id="filled-basic"
//                     className={classes.textField}
//                     label="Filled"
//                     margin="normal"
//                     variant="filled"
//                 />
//             </div>
//             <div>
//                 <TextField
//                     id="outlined-basic"
//                     className={classes.textField}
//                     label="Outlined"
//                     margin="normal"
//                     variant="outlined"
//                 />
//             </div>
//         </form>
//     );
// }


// const DatePicker = props => {
    //     return (
    //         <div className="newDate">
    //             <div className="imageByDate" alt="image from ${props.date}" src={props.nasa.hdurl}>
    //                 <h3>{props.nasa.title}</h3>
    //                 <p>{props.nasa.explanation}</p>
    //                 <p>{props.nasa.date}</p>
    //                 <img src={props.nasa.hdurl} />
    //             </div>
    //         </div>
    //     )
    // }

    // export default ImageCard;