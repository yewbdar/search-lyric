import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from '../component/Loading'
import Room from '../component/Room'
import Title from '../component/Title'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading ,featuredRooms:rooms} = this.context
         rooms = rooms.map(room => {
             console.log(room.id)
         return <Room key={room.id} room={room}/>})
        
         return (
            <section className='featured-rooms'>
                <Title title='featured rooms'/>
                <div className='featured-rooms-center'>
                    {loading ? <Loading/>: rooms}
                </div>
                
            </section>
        )
    }
}
