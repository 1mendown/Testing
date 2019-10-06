import React, { Component } from "react";
import { StyleSheet ,Text, TouchableOpacity } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form
} from "native-base";


class validation extends Component {

constructor(props) {
  super(props);
        this.state = {
          icon : "eye-off",
          password: true,
          icon2: "eye-off",
          password2: true,
          firstname: '',
          lastname:'',
          email:'',
          pinCode:'',
          confirmPinCode:'',
          validationFirstname:true,
          validationlastname:true,
          validationEmail:true,
          validationPinCode:false,
          validationConfirmPinCode:false,

    };
  }
  
validation = (text,type) => {
  const regex = /^[a-zA-Z]+$/; 
  const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if(type === "firstname") { 
   if(!text == '') {
      if(regex.test(text))
      {
        this.setState({
          validationFirstname:true
        })
      }
      else {
        this.setState({
          validationFirstname:false
        })
      }
   }
  }

  else if(type === "lastname") { 
    if(!text == '') {
      if(regex.test(text))
      {
        this.setState({
          validationlastname:true
        })
      }
      else {
        this.setState({
          validationlastname:false
        })
      }
    }
  }

  else if(type === "email") {
    if(!text == '') {
      if(EmailRegex.test(text))
      {
        this.setState({
          validationEmail:true
        })
      }
      else {
        this.setState({
          validationEmail:false
        })
      }
    }
  }
}


validationPinCode = () =>{

  const { pinCode , confirmPinCode} = this.state

  const numberRegex = /^[0-9]*$/;

  if(pinCode === '')
  {
    this.setState({
      validationConfirmPinCode:true,
      validationPinCode: true
    })
    console.log('this is required')
  }
  else if(!numberRegex.test(pinCode)){
    this.setState({
      validationPinCode: true,
      validationConfirmPinCode:false
    })  
    console.log("Number Contains Letters and Special Characters");
  }
  else { 

   if(confirmPinCode === pinCode){
      this.setState({
        validationConfirmPinCode:false,
        validationPinCode:false
      })
      console.log("Password Match");
    }
    else{
      this.setState({
        validationConfirmPinCode:true
      })
      console.log("Not Match");
    }
  }



  }
  





  changeIcon = () => {
      this.setState(prevState => ({
        icon:prevState.icon === 'eye' ? 'eye-off' : 'eye',
        password:!prevState.password,
        
      }));
  }

  changeIcon2 = () => {
    this.setState(prevState => ({
      icon2:prevState.icon2 === 'eye' ? 'eye-off' : 'eye',
      password2:!prevState.password2,
      
    }));
}


  render() {


    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rounded</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item rounded style={{marginTop:10}}>
              <Input 
              placeholder="First Name"
              type="name"
              keyboardType="name-phone-pad"
              onChangeText ={
                text => this.validation(text,'firstname')
              }
              style={!this.state.validationFirstname ? styles.error : null}
              />
            </Item>

            <Item rounded style={{marginTop:10}}>
              <Input 
              placeholder="Last Name"
              type="name"
              keyboardType="name-phone-pad"
              onChangeText ={
                text => this.validation(text,'lastname')
              }
              style={!this.state.validationlastname ? styles.error : null}
              />
            </Item>

            <Item rounded style={{marginTop:10}}>
              <Input 
              placeholder="Email"
              type="email"
              keyboardType="email-address"
              onChangeText ={
                text => this.validation(text, 'email')
              }
              style={!this.state.validationEmail ? styles.error : null}
              />
            </Item>

            <Item rounded 
            style={this.state.validationPinCode ? styles.error : null
            }>
              <Input 
              placeholder="Create PIN CODE"
              secureTextEntry={this.state.password}
              editable={true}
              maxLength={10}
              type="password"
              name="pinCode"
              enablesReturnKeyAutomatically={true}
              // keyboardType='numeric'
              keyboardAppearance="dark"
              onChangeText ={
                pinCode => this.setState({pinCode})
              }
              
              />
              <Icon name={this.state.icon} style={{paddingRight:20,fontSize:20}} onPress={() => this.changeIcon()} />
            </Item>

            <Item rounded 
            style={this.state.validationConfirmPinCode ? styles.error : null}
            >
              <Input 
              placeholder="Confirm PIN CODE" 
              secureTextEntry={this.state.password2}  
              maxLength={10}
              type="password"
              name="confirmPinCode"
              enablesReturnKeyAutomatically={true}
              keyboardType='numeric'
              keyboardAppearance="dark"
              onChangeText ={
                confirmPinCode => this.setState({confirmPinCode})
              }
              
              />
               <Icon name={this.state.icon2} style={{paddingRight:20,fontSize:20}} onPress={() => this.changeIcon2()}   />
            </Item>
          <TouchableOpacity style={{marginTop:20,alignSelf:"center"}} onPress={() => this.validationPinCode()} >
            <Text> SUBMIT</Text>
          </TouchableOpacity>
           
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  error:{
      borderColor:'red',
      borderWidth:1,
      borderRadius:50,
      width:'100%'
    
  }
});

export default validation;