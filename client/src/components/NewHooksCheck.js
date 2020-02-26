import React, { PureComponent } from 'react';
import { useLoading } from "../hooks/loading.hooks";

class NewHooksCheck extends PureComponent {
  state = {
    data: ''
  }

  componentDidMount() {
    setTimeout(() => {
      useLoading().finishLoading();
      this.setState({
        data:  'we gate the data'
      })
    }, 5000)
  }

  render() {
    const { loading } = useLoading();

    debugger;

    if(loading) {
      return(
       <h1>Loading ....</h1>
      )
    }else{
      return(
        <p>{this.state.data}</p>
      )
    }
  }
}

export default NewHooksCheck
