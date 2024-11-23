import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const responce = await axios.get(BASE_URL + "/users");
    console.log(responce.data);
  };

  const getUserByID = async (userId) => {
    const responce = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(responce.data);
  };

  const createUser = async (newUser) => {
    //Post : veri eklemek icin kullanilir.
  const responce =  await axios.post(`${BASE_URL}/users`, newUser);
  console.log("ressponce",responce.data);
  };

  const updateUser =  async (userId, updatedUser) => {
    //Put : veri guncellemek icin kullanilir.
    const responce = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(responce.data);
  }

  const deleteUserById = async (userId)=>{
    //Delete : veri silmek icin kullanilir.
    const deletedResponce = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log("kullanici silindi" , deletedResponce.data);
  }

  // *****************************************************

  const getPost = async ()=>{

  }

  useEffect(() => {
    // deleteUserById("3");

    // getAllUsers();
    // getUserByID(1);

    // const newUser = {
    //   "id" : "3",
    //   "useername": "text",
    //   "password" : "333333"
    // }
    // createUser(newUser);

    // updateUser("4",{
    //   "username" : "yakup",
    //   "password" : "5555"
    // })
  }, []);

  return <div></div>;
}

export default App;
