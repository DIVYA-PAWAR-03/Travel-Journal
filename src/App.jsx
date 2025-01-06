
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'

function App() {
  
  return (
    <>
      <Header/>
      <MainContainer 
      img={
        {
          src:"/images/mountain.jpg",
          alt:"Mountain"
         }}
         city="Switzerland"
         location="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=swizrland&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
         dates="27 May,2024 - 8 June,2024"
         description="Switzerland, nestled in the heart of Europe, is a paradise of Alpine peaks, crystal-clear lakes, and charming towns like Lucerne and Interlaken. Known for its adventure sports, efficient transport, and iconic landmarks like the Matterhorn and Rhine Falls, it blends natural beauty with cultural sophistication in cities like Zurich and Geneva. Add Swiss chocolate, cheese, and warm hospitality, and it’s a dream destination for all."
      
      
      
      />
      <MainContainer 
      img={
        {
          src:"/images/bridge.jpg",
          alt:"bridge"
         }}
         city="Norway"
         location="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=norway&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
         dates="31 July,2024 - 5 Aug,2024"
         description="Norway, known for its dramatic fjords, northern lights, and rich Viking history, is a paradise for nature and adventure enthusiasts. Iconic destinations include the Geirangerfjord, the Lofoten Islands, and the Arctic town of Tromsø, perfect for viewing the aurora borealis. Visitors can explore Oslo’s vibrant culture, hike the Pulpit Rock, or take scenic rail journeys like the Flåm Railway. With its midnight sun in summer and cozy winter charm, Norway offers unforgettable experiences year-round."
       />
      
      <MainContainer
      img={{
        src:"/images/river.jpg",
        alt:"river"
      }}
      city="Japan"
      location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttuhttps://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=japan&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      dates="26 Nov ,2024 - 7 Dec,2024"
      description="Japan, a land of timeless tradition and cutting-edge modernity, offers a unique blend of cultural and natural attractions. Visitors can marvel at historic landmarks like Kyoto’s temples, the iconic Mount Fuji, and Hiroshima’s Peace Memorial. Tokyo dazzles with its futuristic skyline, while Osaka is famed for its street food. The cherry blossoms in spring and autumn foliage provide breathtaking scenery. From ancient castles to hot springs and vibrant festivals, Japan promises an unforgettable journey for every traveler."
      
      
      
      />
      
      <Footer/>
    </>
  )
}

export default App
