import "./styles.css";
import Amazon from "./amazon.png";
import Location from "@material-ui/icons/PlaceOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import Input from "./components/input";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Menu from "@material-ui/icons/MenuOutlined";
import Mic from "@material-ui/icons/KeyboardVoiceRounded";
import Home from "./images/homebar.jpg";
import Categories from "./images/categories.jpg";
import Dod from "./images/dod.jpg";
import Alexa from "./images/alexa.jpg";
import Box from "./components/box";
import Pay from "./images/amazonpay.jpg";
import Spin from "./images/spinwin.jpg";
import Mini from "./images/minitv.jpg";
import Bags from "./images/luggage.jpg";
import Titan from "./images/titan.jpg";
import Pharma from "./images/pharma.jpg";
import Never from "./images/neversetle.jpg";
import Watches from "./images/watches.jpg";
import Save from "./images/subscribeandsave.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="mobile">
        <div className="head">
          <Input />
          <Search className="search" />
          <Mic className="mic" />
        </div>
        <div className="head1">
          <Location />
          <p className="m-s1">Deliver to Bangalore</p>
        </div>
        <img className="categ" src={Categories} alt="" />
        <img className="categ" src={Dod} alt="" />
        <Box
          title="Smart Electronics with Alexa Built-in"
          src={Alexa}
          caption="See more"
        />
        <Box title="" src={Spin} caption="" />
        <Box
          title="Contribute to help bridge the digital divide for underprivileged youth"
          src={Pay}
          caption=""
        />
        <Box
          title="Up tpo 60% off | Top brands | Bags and trolleys"
          src={Bags}
          caption=""
        />
        <Box title="" src={Never} caption="" />
        <Box
          title="Track your blood oxygen level with ease | Wearable devices"
          src={Watches}
          caption=""
        />
        <Box title="Quality Tech videos | Trakin Tech" src={Mini} caption="" />
        <Box
          title="Free shipping | Great price on pet supplies"
          src={Save}
          caption=""
        />
        <Box
          title="Amazon Pharmacy | Flat 15% off medicines"
          src={Pharma}
          caption=""
        />
        <Box
          title="Coming soon | Alexa enabled and 14 days battery life"
          src={Titan}
          caption=""
        />
        <img className="home" src={Home} alt="" />
      </div>
      <div className="app">
        <div className="header">
          <img src={Amazon} alt="" width="120" height="40" />
          <Location style={{ color: "white" }} />
          <p className="p1">Hello</p> <br></br>
          <p className="p2">Select your Address</p>
          <Input />
          <span className="s1">All</span>
          <Search
            style={{
              position: "relative",
              top: "5px",
              left: "-50px",
              color: "#111921"
            }}
          />
          <span className="s2">Hello,Sign in</span>
          <p className="p3">Accounts & Lists</p>
          <span className="s3">Returns</span>
          <p className="p4">& Orders</p>
          <Cart
            style={{ position: "relative", top: "10px", fontSize: "40px" }}
          />
          <p className="p5">Cart</p>
        </div>
        <div className="list">
          <Menu style={{ paddingLeft: "10px" }} />
          <span className="li">All</span>
          <span className="li">Mobiles</span>
          <span className="li">Best Sellers</span>
          <span className="li">Electronics</span>
          <span className="li">Customer Services</span>
          <span className="li">Fashion</span>
          <span className="li">Prime</span>
          <span className="li">Home & Kitchen</span>
          <span className="li">Today's Deals</span>
          <span className="li">Amazon Pay</span>
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/pc-main-banner_v2.jpg"
          alt=""
        />
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/deals_pc.gif"
          alt=""
        />
        <h2>Handcrafted bestsellers this season</h2>
        <div className="box1">
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41thuHI6i-L._AC_SX184_.jpg"
              alt=""
              height="150"
              width="150"
            />
            <p className="cap1">KADAM HAATH Handmade Grass</p>
            <p className="cap2">KADAM HAATH</p>
            <p className="cap3">699</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/510SWknTZUL._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">Artistic Wood Teak Wood Traditional..</p>
            <p className="cap2">Artistic Wood</p>
            <p className="cap3">16,499</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51CWFfryA9L._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">EIFFELS CRAFTS Wooden Partition Screen/Room</p>
            <p className="cap2">EIFFELS CRAFTS</p>
            <p className="cap3">6999</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/519UWkwn3gS._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">JH Gallery Recycled Material Rajasthani Mu..</p>
            <p className="cap2">JH Gallery</p>
            <p className="cap3">333</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51QkUUaH+rL._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">JH Gallery Handcrafted Rajasthani Door/Wall</p>
            <p className="cap2">JH Gallery</p>
            <p className="cap3">293</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41xjMD-1ypL._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">BLOCKS OF INDIA Hand Block Printed Cott..</p>
            <p className="cap2">BLOCKS OF INDIA</p>
            <p className="cap3">2199</p>
          </div>
          <div className="bx1">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51pSq--pMCS._AC_SX184_.jpg"
              alt=""
              height="150"
            />
            <p className="cap1">ARTISTIC WOOD Sheesham Wood Modren Ergono..</p>
            <p className="cap2">Artistic Wood</p>
            <p className="cap3">15999</p>
          </div>
        </div>
        <p>Shop on a budget</p>
        <div className="box2">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Home-Decor-Under-INR-699._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Home-Furnishing._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/footwear._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Kitchen-and-dinning._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Ethnic-clothing-._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/look-book-desktop-V2.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/1.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/2.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/4.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/3.jpg"
            alt=""
            width="250"
            height="300"
          />
        </div>
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tred_pc.jpg"
            alt=""
            width="600"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Kitchen_pc.jpg"
            alt=""
            width="600"
            height="300"
          />
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/header-clothing-web.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/saree.jpg"
            alt=""
            width="200"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tile-Kurtas.jpg"
            alt=""
            width="200"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Unstitched-fabrics.jpg"
            alt=""
            width="200"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tile-Dupattas--stoles.jpg"
            alt=""
            width="200"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tile-Mens-clothing.jpg"
            alt=""
            width="200"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tile-Kids-wear.jpg"
            alt=""
            width="200"
            height="300"
          />
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/header-home-web.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/figurines_idols.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/vases.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/lamps.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/candleholders.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/planters.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Paintings--wall-plates_1.jpg"
            alt=""
            width="150"
            height="200"
          />
        </div>
        <h2>Shop by crafts - Indian handicrafts</h2>
        <div className="box2">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/pottery._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Bamboo-Craft._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/toys_1._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/wooden_1._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Metal-Craft._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/new/Madhubani-paintings._SS400_QL85_.jpg"
              alt=""
              width="150"
              height="150"
            />
            <p className="cap1">Shop now</p>
          </div>
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/header-kitchen-web.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/decorative_bowls.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/jars_containers.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/dinnerware_serveware.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/baskets.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/cookware.jpg"
            alt=""
            width="150"
            height="200"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Mugs--coasters.jpg"
            alt=""
            width="150"
            height="200"
          />
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/header-furnishings-web.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Bedsheets--quilts.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Cushion-covers.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Woven-carpets.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Tablecloth.jpg"
            alt=""
            width="250"
            height="300"
          />
        </div>
        <img
          className="bigimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/govt-emp-web.jpg"
          alt=""
        />
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/cauvery.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/biswa.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tribes_india.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/tantuja.jpg"
            alt=""
            width="250"
            height="300"
          />
        </div>
        <div className="box3">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/jh.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/blocks_of_india.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/Odisha-Handloom.jpg"
            alt=""
            width="250"
            height="300"
          />
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/events/KarigarMela21/ASCart.jpg"
            alt=""
            width="250"
            height="300"
          />
        </div>
        <span>Sort By Categories</span>
        <button>Most Popular</button>
        <div className="box4">
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41yzxowGxHS._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/31ugZAjIVCL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41DAQzgS%2BtL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/21YcVWUs0oL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41xJeCZhHuL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41blJqesEZL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 2%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/31eeI06gPsL._SS135_.jpg"
              alt=""
            />
            <p className="greenp">Save 10%</p>
            <p className="cap1">Channapatna Toys</p>
            <p className="cap1">Handmade Non-Toxic</p>
            <button className="btn">Collect Coupon</button>
            <p className="cap2">Discount at Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
