import { ActivityIndicator, Button, ScrollView, Text, View } from 'react-native';
import {useEffect} from "react";
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
            <Button
              title='Delete all news from local store'
              onPress={() => newsStore.deleteNewsFromLocal()}
            />
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
