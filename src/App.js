import './App.css';
import Card from './Card';
import { useState } from 'react';

const dummyData = [
  {
    "kind": "youtube#searchResult",
    "etag": "3Pj-61vPkO59WAYFqCniVHhdgO4",
    "id": {
      "kind": "youtube#video",
      "videoId": "xCCfF3J_BkA"
    },
    "snippet": {
      "publishedAt": "2018-10-21T05:38:17Z",
      "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
      "title": "Chris Paul, Rajon Rondo and Brandon Ingram ejected after Rockets and Lakers fight  | NBA Highlights",
      "description": "In the fourth quarter between the Houston Rockets and Los Angeles Lakers, Brandon Ingram gets fouled by James Harden on a ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/xCCfF3J_BkA/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/xCCfF3J_BkA/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/xCCfF3J_BkA/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "ESPN",
      "liveBroadcastContent": "none",
      "publishTime": "2018-10-21T05:38:17Z"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "TPlY_WXfd7FoM_bx1CM3iZj_ihs",
    "id": {
      "kind": "youtube#video",
      "videoId": "7lxiF4DNP6M"
    },
    "snippet": {
      "publishedAt": "2022-05-23T05:01:11Z",
      "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
      "title": "&#39;The Warriors have TOO many weapons!&#39; Tim Legler reacts to Warriors&#39; Game 3 win | SportsCenter",
      "description": "Tim Legler joins SportsCenter to give his immediate reaction to the Golden State Warriors' 109-100 victory in Dallas and their ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/7lxiF4DNP6M/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/7lxiF4DNP6M/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/7lxiF4DNP6M/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "ESPN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-05-23T05:01:11Z"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "3AuTthrGhtESqUdACAeX_wBHIPs",
    "id": {
      "kind": "youtube#video",
      "videoId": "h2jfBo5mem0"
    },
    "snippet": {
      "publishedAt": "2022-03-18T18:55:40Z",
      "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
      "title": "Stephen A.: &#39;I&#39;m happy Luka finally has a running mate he has confidence in!&#39; | Stephen A&#39;s World.",
      "description": "Stephen A. Smith reacts to Luka Doncic dishing the game-winning shot to Spencer Dinwiddie in the Dallas Mavericks' win over ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/h2jfBo5mem0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/h2jfBo5mem0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/h2jfBo5mem0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "ESPN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-03-18T18:55:40Z"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "-piy2xW8zKde_Ej-9ETQbo3kC_4",
    "id": {
      "kind": "youtube#video",
      "videoId": "FcV3ZEfYLN8"
    },
    "snippet": {
      "publishedAt": "2022-04-27T23:53:56Z",
      "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
      "title": "Is Doc Rivers to blame for his teams blowing 3-1 leads? Richard Jefferson doesn’t think so",
      "description": "Is Doc Rivers to blame for his teams blowing 3-1 leads? Richard Jefferson doesn't think so Richard Jefferson and Kendrick ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/FcV3ZEfYLN8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/FcV3ZEfYLN8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/FcV3ZEfYLN8/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "ESPN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-04-27T23:53:56Z"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "CX0UIjEKgqpLjsMUWLuS2idLSv4",
    "id": {
      "kind": "youtube#video",
      "videoId": "eiZvJuVGcKw"
    },
    "snippet": {
      "publishedAt": "2022-08-19T22:12:47Z",
      "channelId": "UC6ZFN9Tx6xh-skXCuRHCDpQ",
      "title": "Violent storms and droughts ravage parts of Europe and Asia",
      "description": "New blasts of extreme weather are taking a toll around the globe Friday. The latest in a series of fierce heat waves has moved into ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/eiZvJuVGcKw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/eiZvJuVGcKw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/eiZvJuVGcKw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "PBS NewsHour",
      "liveBroadcastContent": "none",
      "publishTime": "2022-08-19T22:12:47Z"
    }
  }
];

function App() {

  const [search, setSearch] = useState('');
  const [data,setData] = useState(dummyData);
  

  const fetchData = async (searchName) =>{
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchName}&key=AIzaSyAC5ZjxcJYcWfcfh7FVcHYAslVk9vs-Mbo`)

    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create item.');
    }
    //console.log(data);
    setData(data.items);
  }

  const searchHandler = (event)=>{

    setSearch(event.target.value);
  }

  const cardElement = data.map((item)=>{
    return <Card image={item.snippet.thumbnails.default.url} title={item.snippet.title} id={item.id.videoId}/>
  })

  return (
    <div className="App">
     <input type="text" className='search' id='search' value={search} onChange={searchHandler}/>
     <button type="button" onClick={()=>fetchData(search)}> Search</button>
     {cardElement}
    </div>

  );
}

export default App;
