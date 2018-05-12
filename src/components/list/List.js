import React, { Component } from 'react'
import Loading from '../common/Loading'
import "./Table.css"
import Table from './Table'
import Pagination from './Pagination'

export default class List extends Component {
  constructor(){
    super();// have to call it because it is a subclass of Component also this is uninitialized if super is not called
    this.state={
      loading:false,
      game:[],
      page:1,
      totalPages:0,
      updatedData:[],
      error:null
    }
    this.Pagination=this.Pagination.bind(this);
    this.handlePaginationClick=this.handlePaginationClick.bind(this)
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://raw.githubusercontent.com/WaysToGo/api/master/gamesdata.json")
    .then(response=>{
      return response.ok?response:Promise.reject(response)
    }).then(data=>data.json())
    .then(data=>{

      this.setState({game:data,loading:false,totalPages:data.length/20},()=>this.Pagination(0,19));
    }).catch(error=>{

      this.setState({loading:false,error:'Sorry somthing went wrong'})})

  }

  renderchoice(value){
if(value==='Y'){
  return <span className="yes">{value}</span>
}
else
return <span className="no">{value}</span>
  }

  handlePaginationClick(direction) {
    let numberOfItems=20
    let nextPage = this.state.page;

    // Increment nextPage if direction variable is next, otherwise decrement
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      // call fetchCurrencies function inside setState's callback
      // because we have to make sure first page state is updated
      this.Pagination(nextPage*numberOfItems,(nextPage*numberOfItems+numberOfItems))
    });
  }

  Pagination(start,end){


    let arr=[];
    for(let i=start;i<end;i++){
      arr.push(this.state.game[i])
    }
    this.setState({updatedData:arr})
  }

  render() {
const{loading,error,game,page,totalPages,updatedData}=this.state
    if(loading){
      return <div className="loading-container"><Loading/></div>

    }
    if(error){
      return <div className="error">{error}</div>
    }

    return (
      <div>
      <Table game={updatedData}
      renderchoice={this.renderchoice}/>

        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
        </div>
    )
  }
}
