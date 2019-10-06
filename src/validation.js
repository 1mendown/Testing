


export default validation = () => {

    const regex = /^[a-zA-Z]+$/
        if(type==='firstname')
        {
          if(regex.test(text))
          {
            this.setState({
              validateName:true
            })
          }
          else {
            this.setState({
              validateName:false
            })
          }
        }

}