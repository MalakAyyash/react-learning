import React, { Component } from 'react'

export default class Course extends Component {
  render() {
    const {id, title, description, sale, price } = this.props.data
    return (
         <div className="col-md-3 card position-relative ">
          <h2 className=''>{title}</h2>
          <p>{description}</p>
          {sale?<span className='badge bg-success position-absolute top-0 end-0 '>sale</span>:''}
          <h3 className={(price>50)?'text-danger':'text-success'}>{price}</h3>
          <button className="btn bg-danger" onClick={()=>this.props.delete(id)}>Delete</button>
        </div>
    )
  }
}
