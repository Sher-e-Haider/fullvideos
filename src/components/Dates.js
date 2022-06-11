// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
 
// import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Dates extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: new Date(),
//       endDate:new Date()
//     };
//     //props=this.state.startDate
//     this.handleChanges = this.handleChanges.bind(this);
//     this.handleChange2 = this.handleChange2.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
   
//   }
  
    
//   handleChanges=(date)=> {
//     this.setState({
//       startDate: date
      
//     })
   
    
//   }
//   handleChange2=(date)=> {
//     this.setState({
//       endDate: date
//     })
//     console.log(this.props.dates,date,'plplplplplpl');
//     this.props.dates=date
//   }

//   componentDidUpdate=(prevProps)=> {
//     if(this.props.dates !== prevProps){
//        this.setState({ prevProps:this.state.startDate  });
//     }
//     console.log(prevProps,this.props.dates,'plplplplplpl');
//     //prevProps.dates=this.props.state
//  }
//   onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.startDate,'kokokokoko')
//   }
 
  
//   render() {
//     return (
//      <div>

//        <label for="Dates" className="form-label">Dates</label>
//        <div className='d-flex'>
//            <div className="form-group d-flex p-2">
       
//           <DatePicker
//               selected={ this.state.startDate }
//               onChange={ this.handleChanges }
//               name="startDate"
//               dateFormat="MM/dd/yyyy"
//               className='form-control p-2'
             
//           />
//           {/* <button className="btn btn-primary">add</button> */}
//         </div>
//          <strong className=' d-flex align-items-center' >To</strong>
//         <div className="form-group d-flex p-2">
       
//           <DatePicker
//               selected={ this.state.endDate }
//               onChange={ this.handleChange2 }
//               name="startDate"
//               dateFormat="MM/dd/yyyy"
//               className='form-control p-2'
             
//           />
//           {/* <button className="btn btn-primary">add</button> */}
//         </div>
//        </div>
//        </div>
     
//     );
//   }
  
// }
// export default Dates;


//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for Day.js
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // or for Luxon
// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// // or for Moment.js
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { useEffect } from 'react';

// export default function BasicDateTimePicker({postData,setPostData}) {
//   const [value, setValue] = React.useState(new Date());
//   //console.log(value,'baaaa');
//   useEffect(() => {
//     setPostData({...postData,dates:value})
//     console.log('datesssss');
//   },[postData,value,setPostData])
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DateTimePicker
//         renderInput={(props) => <TextField {...props} />}
//         label="DateTimePicker"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </LocalizationProvider>
//   );
// }