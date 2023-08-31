import React, { Component } from 'react'
import Course from '../Course/Course'
export default class Courses extends Component {
    state = {
        courses: [{
            id: 1,
            title:'pure Frontend',
            description: 'pure HTML & CSS & JS',
            sale: false,
            price: 50
        },
        {
            id: 2,
            title:'React',
            description: 'HTML & CSS  & JS using React library',
            sale: true,
            price: 100
        },
        {
            id: 3,
            title:'Angular',
            description: 'HTML & CSS  & JS using Angular framework',
            sale: false,
            price: 200
        }
    ]
    }
    deleteCourse = (id)=>{
      // this.state.courses.filter((courses)=>{
      //   return courses.id!==id
      // }

      // )
      //1.deep copy
      let myCourses = [...this.state.courses]
      myCourses=this.state.courses.filter((courses)=>{
        return courses.id!=id
      }
      )
      //2.set state
      this.setState({courses:myCourses})
    }
    constructor(){
      super();
      console.log('constructor')
    }
    componentDidMount(){
      console.log('componentDidMount')

    }
    componentWillUnmount(){
      console.log('unmounting')

    }
    componentDidUpdate(){
      console.log('updated')

    }
  render() {
    // console.log(this.state.courses[0].title)
    console.log('render')

    return (
      <div className="container">
    <div className="row d-flex justify-content-around">
       {this.state.courses.map( (ele,index)=>{
            return <Course key={ele.id} data={ele} delete ={this.deleteCourse} />
       }
       )}
  
    </div>
    </div>

    )

  }
}
