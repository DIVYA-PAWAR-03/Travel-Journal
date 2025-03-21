

export default function MainContainer(props){
    return(
        <main>
            
                <div className="container1">
                <div >
                    <img src={props.img.src} alt={props.img.alt}className="image1" />
                </div>
                <div className="desc">
                    <h2>{props.city}</h2>
                    <a href={props.location}>View on Google Maps</a>
                    <h3>{props.dates}</h3>
                    <p className="para1">{props.description}</p>
                </div>
                </div>


                {/* <div className="container2">
                <div >
                    <img src="/images/bridge.jpg" alt="bridge" className="image" />
                </div>
                <div className="desc">
                    <h2>Norway</h2>
                    <a href="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=norway&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">View on Google Maps</a>
                    <h3>31 July,2024 - 5 Aug,2024</h3>
                    <p className="para1">Norway, known for its dramatic fjords, northern lights, and rich Viking history, is a paradise for nature and adventure enthusiasts. Iconic destinations include the Geirangerfjord, the Lofoten Islands, and the Arctic town of Tromsø, perfect for viewing the aurora borealis. Visitors can explore Oslo’s vibrant culture, hike the Pulpit Rock, or take scenic rail journeys like the Flåm Railway. With its midnight sun in summer and cozy winter charm, Norway offers unforgettable experiences year-round.</p>
                </div>
                </div> */}


                {/* <div className="container3">
                <div >
                    <img src="/images/river.jpg" alt="river" className="image" />
                </div>
                <div className="desc">
                    <h2>Japan</h2>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttuhttps://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=japan&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">View on Google Maps</a>
                    <h3>26 Nov ,2024 - 7 Dec,2024</h3>
                    <p className="para1">Japan, a land of timeless tradition and cutting-edge modernity, offers a unique blend of cultural and natural attractions. Visitors can marvel at historic landmarks like Kyoto’s temples, the iconic Mount Fuji, and Hiroshima’s Peace Memorial. Tokyo dazzles with its futuristic skyline, while Osaka is famed for its street food. The cherry blossoms in spring and autumn foliage provide breathtaking scenery. From ancient castles to hot springs and vibrant festivals, Japan promises an unforgettable journey for every traveler.</p>
                </div>
                </div> */}

                


                


        </main>
    )
}