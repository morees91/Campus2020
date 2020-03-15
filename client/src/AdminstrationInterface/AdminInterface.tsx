import * as React from 'react';


type Course = {
   CourseName: string
   CourseDate: string
   CourseID: string

}

export interface Props {
 
}

export interface State {
   CourseList: Array<Course>
   days:Array<Date>


}

class
   AdminInterface extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props)
      this.state = {

         CourseList: [{
            CourseDate: "",
            CourseID: "",
            CourseName: "js"
         },{
            CourseDate: "",
            CourseID: "",
            CourseName: "Bootstrap"
         },{
            CourseDate: "",
            CourseID: "",
            CourseName: "js"
         }],
         days:[]
        

      }

   }

   componentDidMount(){
this.state.days.map(day=>

   this.setState({





   })
   
   
   
   )


   }


   render() {
      return (

         <div className="container-fluid">
            <nav aria-label="Page navigation" className="d-flex justify-content-center">
               <ul className="pagination">
                  {
this.state.days.map(day =>
   
   
<li className="page-item"><a className="page-link" href="#">{day.getDay}</a></li>
                 
   
   )

                  }
               </ul>
            </nav>

            <div className="row">

               <div className="col-md-3">

                  <ul className="list-group">
                     <li className="list-group-item">Cras justo odio</li>
                     <li className="list-group-item">Dapibus ac facilisis in</li>
                     <li className="list-group-item">Morbi leo risus</li>
                     <li className="list-group-item">Porta ac consectetur ac</li>
                     <li className="list-group-item">Vestibulum at eros</li>
                  </ul>

               </div>
               <div className="col-md">Course View</div>
            </div>




         </div>


      );
   }
}

export default AdminInterface;