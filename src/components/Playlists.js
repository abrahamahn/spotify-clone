import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import {Link} from 'react-router-dom'

const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1',
            img: 
                'https://images.unsplash.com/photo-1598797098850-595d68cc142a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
            
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2',
            img: 
                'https://images.unsplash.com/photo-1582714970190-5889929aeabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img: 
                'https://images.unsplash.com/photo-1598830853058-3474f6a66003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            img: 
                'https://images.unsplash.com/photo-1598815856231-445370fc3f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday Playlist',
            img: 
                'https://images.unsplash.com/photo-1598818384697-62330d600309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Mood playlist 1',
            img: 
                'https://images.unsplash.com/photo-1598782489479-8c486665b327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood playlist 2',
            img: 
                'https://images.unsplash.com/photo-1582715400663-430d308352bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            desc: 'Lorem Ipsum'
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(
        (playlist) => playlist.category_id === props.category_id
    )
    
    return (
        <div className="cardsWrapInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={'/playlist/' + playlist.id}>
                    <div className="card" key={id}>
                        <div className="cardImage">
                            <img src={playlist.img} alt="pic 1" />
                        </div>
                        <div className="cardContent">
                                <h3>{playlist.name}</h3>
                                <span>Minimalism, electronica and modern...</span>
                            </div>
                        <span className="playIcon">
                            <playIcon />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Playlists