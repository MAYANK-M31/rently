import React, { Component } from 'react';
import Searchnav from "./Searchnav";
import './Searchpage.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Detailpage from "./Detailpage";
document.body.style = 'background:#fafafa';

class Searchpage extends Component {

    searchdata;

    constructor(props) {
        super(props);
        // this.handlesearch=this.handlesearch.bind(this);
        // this.handlesubmit=this.handlesubmit.bind(this);

        this.state = {
            result: "",
            search: ""


        }
    }

    handlesearch = (e) => {
        this.setState({ search: e.target.value })
    }
    // {this.props.location.passdata}


    handlesubmit = (e) => {
        e.preventDefault();
        console.log(`${this.state.search}`)
        //   alert(`${this.searchdata.search}`)
        fetch("https://tranquil-brushlands-49127.herokuapp.com/data/" + `${this.state.search}`).then((data) => {
            data.json().then((data) => {
                // console.log("data",data)
                this.setState({ result: data })
            })
        });
    }

    //http://localhost/json/rentlyapi.php?locality=

    componentDidMount() {
        // fetch("https://tranquil-brushlands-49127.herokuapp.com/data/"+`${this.props.location.passdata}`).then((data)=>{
        //      data.json().then((data)=>{
        //          // console.log("data",data)
        //          this.setState({result:data})    
        //      })
        //  });
        this.searchdata = JSON.parse(localStorage.getItem("user"));

        if (localStorage.getItem("user")) {
            this.setState({
                search: this.searchdata.search,
                result: this.searchdata.result
            })
        } else {
            this.setState({
                search: "",
                result: ""
            })
        }
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("user", JSON.stringify(nextState));
    }


    //  search(key){
    //     // console.warn(key)
    //     fetch("http://localhost/json/rentlyapi.php?locality="+key).then((data)=>{
    //         data.json().then((data)=>{
    //             // console.log("data",data)
    //             this.setState({result:data})    
    //         })
    //     });

    // }


    render(props) {
        return (
            <div className="container-fluid p-0  ">
                <div className="nav searchbarnav sticky-top">
                    <form className="searchbar" onSubmit={this.handlesubmit}>
                        <input className="form-control" placeholder="ENTER LOCATION" value={this.state.search} onChange={this.handlesearch} />
                    </form>
                    <Searchnav />
                </div>
                {
                    this.state.result ?
                        <div className="divstart">
                            {
                                this.state.result.map((item) =>
                                    <Link to={{ pathname: '/Detailpage', passdata: { item } }}>
                                        <div className="cardbody" >


                                            <div class="cardimage bg-white ">
                                                <img src={item.images} class="card-img" alt="" />
                                            </div>

                                            <div class="mayank bg-white ">
                                                <div className="pricetag">
                                                    <div>
                                                        <h2 class="card-title">&#8377;{item.price}/<span class=" monthtext">month</span></h2>
                                                    </div>
                                                    <div id="deal" >
                                                        <h2 className="text-info sizefull">Limited Deal</h2>
                                                    </div>

                                                </div>
                                                <div id="type" >
                                                    <h5 class="card-text text-uppercase">{item.type}</h5>
                                                </div>


                                                <p class="card-text text-capitalize"><i class="fa fa-map-marker" aria-hidden="true"></i> {item.locality},New Delhi</p>
                                                <div className="facilities">
                                                    <p class="text-muted"> <i class="fa fa-bullseye" aria-hidden="true"></i> Area : 570 sq.ft </p>
                                                    <hr className="hrruler" />
                                                    <p class="text-muted"> <i class="fa fa-bed" aria-hidden="true"></i> Fully Furnished </p>
                                                    <hr className="hrruler" />
                                                    <p class="text-muted"> <i class="fa fa-building" aria-hidden="true"></i> FREE Parking </p>
                                                    <hr className="hrruler" />
                                                    <p class="text-muted"> <i class="fa fa-clock-o" aria-hidden="true"></i> 24Hr Electricity </p>
                                                </div>
                                               <hr id="hrr" />
                                                <div className="getdeal">
                                                    <div className="x" >
                                                        <p class="text-capitalize" >{item.ownername}</p>
                                                    </div>

                                                    <div className="btngetdeal">
                                                        <button className="btn btn-outline-info ml-auto"><p>Grab Deal</p></button>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    </Link>
                                )
                            }

                        </div>

                        : ""
                }
            </div>

        )
    }
}

export default Searchpage;