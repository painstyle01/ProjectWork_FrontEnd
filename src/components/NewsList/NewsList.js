import { React } from 'react'
import './NewsList.css'
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';

function NewsList(props) {

    let myNews = [
        {
            'id': 1, 'title': 'Дім Франка тісніше співпрацюватиме з УКУ', 'link': 'http://fromatoz.dimfranka.lviv.ua/',
            'source': 'Еспресо. Захід.', 'date': '26.02'
        },
        {
            'id': 2, 'title': 'Іван Франко та Агатангел Кримський: дві галактики', 'link': 'http://fromatoz.dimfranka.lviv.ua/',
            'source': 'Збруч.', 'date': '26.02'
        }
    ]

    const [news, getNews] = useState(myNews);

    const filteredData = news.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })

    return (
        <Stack spacing={2} style={{border: '2px solid #c5c5c5', padding: '3vw 5vw', alignItems: 'center'}}>
            {filteredData.map(function(item) {
                return (
                    <a href={item.link} className='mauLinks'>
                        <div>{item.id}. <b>{item.title}</b> {'\u2013'} {item.source} {item.date}</div>
                    </a>
                )
            })}
        </Stack>
    )
}

export default NewsList