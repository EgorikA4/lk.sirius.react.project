import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import React, { useEffect } from "react";
import { Grid } from "@consta/uikit/Grid";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../../store/store";
import { MainNewsAPI } from "../../../const";


const MainPage = () => {
  const dispatch = useDispatch()
  const mainNews = useSelector((state) => state.mainNews)

  useEffect(() => {
    fetch(MainNewsAPI, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => dispatch(setNews(data)))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <Grid cols={1} gap="x1" style={{gap: "2rem" }}>
        {mainNews.map((publication) => (
        <Card
            key={publication.id}
            verticalSpace="l"
            horizontalSpace="l"
            shadow
            style={{paddingBottom:"1rem", backgroundColor: '#fff', borderRadius: '8px', border:"solid 1px ", position:"relative"}}
        >
            <Text weight="bold" size="l" style={{ marginBottom: '10px', color: '#333' }}>
            {publication.name}
            </Text>
            <Text size="m" style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
            {publication.description}
            </Text>
            <Text style={{width: "100%", display:"flex", justifyContent:"right", marginTop:"1rem" }}>{publication.createdAt}</Text>
        </Card>
        ))}
    </Grid>
  );
};

export default MainPage;
