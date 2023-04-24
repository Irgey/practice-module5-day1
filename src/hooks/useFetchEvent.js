import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/eventsAPI';

export function useFetchEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  return event;
}
