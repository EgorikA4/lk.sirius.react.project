import React, { useEffect, useState } from 'react';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://673423afa042ab85d1190055.mockapi.io/api/v1/services', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <div>
      {services.map((service) => (
        <Card verticalSpace="xs" horizontalSpace="xs" key={service.id}>
          <Text weight="bold">{service.name}</Text>
          <Text>{service.description}</Text>
          <Link to={`/service/${service.id}`}>
            <Text as="span" view="link">View Details</Text>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ServicePage;
