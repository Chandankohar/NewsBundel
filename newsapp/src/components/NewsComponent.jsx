import React, { useEffect,useState} from 'react'
// import PropTypes from 'prop-types'
import NewsItemComponent from './NewsItemComponent'
import Spinner from './Spinner'

const NewsComponent =(props) => {
   let arr=[]
  const[loading,setloading]=useState(false)
  const[articles,setarticles]=useState([])
  const[page,setpage]=useState('')
    
   
    

const overallapi=async()=>{
props.setprogress(10)
let url=`https://newsdata.io/api/1/latest?apikey=${props.apiKey}${page===''?'':'&page='+page}${props.category===''?'':'&category='+props.category}`;
setloading(true)
let data=await fetch(url)
 let datajson=await data.json();
setarticles(datajson.results)
setpage(datajson.nextPage)
setloading(false)
props.setprogress(100)
}
useEffect(() => {
    document.title=`${props.category?props.category:'latest'} --News Bundle`;
    arr.push(page)
    overallapi()
  }, []);

const handlePrev=async()=>{
    arr.pop()
    setpage(arr[(arr.length)-1])
    overallapi()
}
const handleNext=async()=>{
    arr.push(page)
    overallapi()}

    return (
      <div className="container my-2 ">
        <h1 className="text-center" style={{marginTop:'80px'}}>NewsBundle --{props.category} news!</h1>
               {loading && <Spinner/>}
               <div className="row">
           {!loading && articles.map((element)=>{ return <div className="col-md-3" key={element.link}>
                <NewsItemComponent title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,80):""} imageurl={element.image_url} url={element.link} author={element.creator} date={element.pubDate} country={element.country} creator={element.creator}/>
                
            </div>}) }
           
            
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={arr[(arr.length)-1]==null} onClick={handlePrev} className="btn btn-info">&larr; prev</button>
        <button type="button" disabled={page==null} onClick={handleNext} className="btn btn-info">next &rarr;</button>
        </div>
      </div>
    )
 }

export default NewsComponent