import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import {ListItem} from "react-native-elements";

export const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
})


export default function NewsScreen({ }) {
    const [news, setNews] = useState([])

    useEffect(()=>{
        axiosClient
            .get("/todos")
            .then(res => setNews(res.data))
            .finally(() => console.log('done'));
    }, [])


    return (
        <ScrollView style={{flex: 1, flexDirection: "column"}}>
            {news ?
                news.map((item, i) =>
                    <ListItem key={i}>
                        <Text>{item.title}</Text>
                    </ListItem>)
                :
                <ActivityIndicator/>
            }
        </ScrollView>
    )
}
