
import './App.css';
import {
  Routes,
  Route,

} from "react-router-dom";
// import { Provider } from 'react-redux'
import Home from './view/Home/Home';
import PopularRestaurant from './view/PopularRestaurant/PopularRestaurant';
import RecentRestaurant from './view/RecentRestaurant/RecentRestaurant';
import RestaurantDetails from './view/RestaurantDetails/RestaurantDetails';
// import { Store } from './redux/Store';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/popular" element={<PopularRestaurant />} />
        <Route path="/restaurant/recent" element={<RecentRestaurant />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
  );
}

export default App;
