import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Flex, Text, useToast } from '@chakra-ui/react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import enUS from 'date-fns/locale/en-US';

const locales = { 'en-US': enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialPosts = [
  { id: '1', title: 'Post for Facebook', start: new Date(), end: new Date() },
  { id: '2', title: 'Instagram Story', start: new Date(), end: new Date() },
];

const PostScheduler = () => {
  const [events, setEvents] = useState(initialPosts);
  const toast = useToast();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedEvents = Array.from(events);
    const [movedEvent] = updatedEvents.splice(result.source.index, 1);
    updatedEvents.splice(result.destination.index, 0, movedEvent);

    setEvents(updatedEvents);

    toast({
      title: `Post rescheduled: ${movedEvent.title}`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" p={4}>
      <Text fontSize="2xl" mb={4}>Social Media Post Scheduler</Text>
      <Box bg="white" p={4} rounded="md" shadow="md" h="80vh">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="posts" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
              >
                {events.map((event, index) => (
                  <Draggable
                    key={event.id} // Make sure key matches draggableId
                    draggableId={event.id} // ID should be a string
                    index={index}
                  >
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        bg="blue.500"
                        color="white"
                        p={3}
                        rounded="md"
                        cursor="grab"
                      >
                        {event.title}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%', borderRadius: '8px' }}
          onSelectEvent={(event) => alert(event.title)}
        />
      </Box>
    </Flex>
  );
};

export default PostScheduler;
