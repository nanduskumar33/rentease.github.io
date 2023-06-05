import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://st2.depositphotos.com/1225275/11138/i/450/depositphotos_111383532-stock-photo-sri-padmanabhaswamy-temple-in-trivandrum.jpg" alt="" className="featuredImg"></img>
            <div className="featureTitles">
                <h1>Trivandrum</h1>
                <h3>345 Properties</h3>
            </div>
            <img src="https://media.istockphoto.com/id/875647666/photo/chinese-fishing-nets-at-sunset-fort-kochin-india.jpg?b=1&s=612x612&w=0&k=20&c=Mzva4ZxmDD-DFC1Iv7AmMNLe_DLEEd9LcEas3BAkaP4=" alt="" className="featuredImg"></img>
            <div className="featureTitles">
                <h1>Ernakulam</h1>
                <h3>234 Properties</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1579955267568-d533e197ef1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a296aGlrb2RlfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="featuredImg"></img>
            <div className="featureTitles">
                <h1>Kozhikode</h1>
                <h3>123 Properties</h3>
            </div>
        </div>
    </div>
  )
}

export default Featured