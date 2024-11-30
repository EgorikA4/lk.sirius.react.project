import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import React, { useState, useEffect } from "react";
import { Grid } from "@consta/uikit/Grid";


const MainPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://673423afa042ab85d1190055.mockapi.io/api/v1/main', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <Grid cols={5} gap="x1">
        {news.map((publication) => (
        <Card
            key={publication.id}
            verticalSpace="l"
            horizontalSpace="l"
            shadow
            style={{ backgroundColor: '#fff', borderRadius: '8px', width: '300px' }}
        >
            <Text weight="bold" size="l" style={{ marginBottom: '10px', color: '#333' }}>
            {publication.name}
            </Text>
            <Text size="m" style={{ color: '#666' }}>
            {publication.description}
            </Text>
        </Card>
        ))}
    </Grid>
  );
};

export default MainPage;
