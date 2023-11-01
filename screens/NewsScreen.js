import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";
import {ListItem} from "react-native-elements";
import { useRootStore } from '../hooks/useRootStore';
import { observer } from 'mobx-react';


const NewsScreen = observer(({ }) => {

    const { newsStore } = useRootStore();

    useEffect(() => {
        newsStore.getNews();
        console.log(newsStore.news)
    }, []);

    return (
        <ScrollView style={{flex: 1, flexDirection: "column"}}>
            {newsStore.news ?
              newsStore.news.map((item, i) =>
                    <ListItem key={i}>
                        <Text>{item.title}</Text>
                    </ListItem>)
                :
                <ActivityIndicator/>
            }
        </ScrollView>
    )
})

export default NewsScreen;
