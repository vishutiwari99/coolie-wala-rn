import { Link } from "expo-router";
import SignUp from "./auth/SignUp";
import CreateOrderScreen from "./(tabs)/create-order-screen/CreateOrderScreen";

const Home = () => {
  // return <SignUp />;
  return <CreateOrderScreen />;
};

export default Home;
