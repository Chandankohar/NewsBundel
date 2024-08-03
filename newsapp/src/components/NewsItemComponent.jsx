import React from 'react'

const NewsItemComponent =(props)=> {
  return (
    <div>
      <div className="card" style={{width: '15rem', fontSize: '14px'}}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {props.creator ? props.creator : 'unknown'}
        </span>
        <img
          src={
            props.imageurl
              ? props.imageurl
              : 'https://ktla.com/wp-content/uploads/sites/4/2024/05/Juan-Luis-Gomez-Ramirez-1.jpeg?w=900'
          }
          className="card-img-top"
          style={{height: '15rem'}}
          alt="..."
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{fontSize: '16px', fontWeight: 'bold'}}>
            {props.title}
          </h5>
          <p className="card-text">{props.description}</p>
          <p class="card-text">
            <small class="text-body-secondary">
              By {props.author ? props.author : ' Unknown'} <br /> On{' '}
              {props.date ? new Date(props.date).toGMTString() : ' unknown'}{' '}
              <br />
              Country:{props.country ? props.country : ' unknown'}
            </small>
          </p>
          <a href={props.url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItemComponent
