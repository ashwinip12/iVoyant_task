
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Form, DatePicker, TimePicker, message, List, Modal } from 'antd';
import { RootState } from '../redux/store';
import { addContent, updateContent, deleteContent, toggleComplete, setReminder } from '../redux/contentSlice';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './ContentForm.scss';

interface Content {
  id: number;
  content: string;
  description: string;
  completed: boolean;
}

const ContentManager: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [reminderDate, setReminderDate] = useState<Dayjs | null>(null);
  const [reminderTime, setReminderTime] = useState<Dayjs | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentContent, setCurrentContent] = useState<Content | null>(null);
  const [newContent, setNewContent] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
          
  const contents = useSelector((state: RootState) => state.content.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate
  
  const handleSubmit = () => {
    if (!content) {
      message.error('Please enter a task before adding.');
      return;
    }
    
    const id = Date.now();
    const contentPayload = {
      id,
      content,
      description,
      completed: false,
    };
             
    dispatch(addContent(contentPayload));

    if (reminderDate && reminderTime) {
      const reminderTimestamp = reminderDate
        .set('hour', reminderTime.hour())
        .set('minute', reminderTime.minute())
        .valueOf();
      
      dispatch(setReminder({ id, reminderTime: reminderTimestamp }));
      scheduleReminder(id, content, reminderTimestamp);
    }

    message.success('Task added successfully!');
    setContent('');
    setDescription('');
    setReminderDate(null);
    setReminderTime(null);
  };

  const handleUpdate = () => {
    if (currentContent) {
      dispatch(updateContent({ ...currentContent, content: newContent, description: newDescription }));
      setIsEditing(false);
      setCurrentContent(null);
      setNewContent('');
      setNewDescription('');
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContent(id));
    message.success('Content removed successfully!');
  };
  
//   const handleToggleComplete = (id: number) => {
//     dispatch(toggleComplete(id));
//     const task = contents.find(t => t.id === id);
//     if (task?.completed) {
//       message.success('Content marked as completed!');
//       navigate('/success');  // Navigate to the success page
//     }
//   };

const handleToggleComplete = (id: number) => {
  // Dispatch the action to toggle completion status
  dispatch(toggleComplete(id));

  // Find the updated task from the contents list
  const task = contents.find(t => t.id === id);

  if (task) {
    if (task.completed) {
      // If the task is completed, navigate to the success page
       navigate('/success');
      message.success('Content marked as completed!');
  
    } else {
      // Optionally, you can handle the case where the task is not completed (e.g., show a message)
      message.info('Content marked as incomplete.');
    }
  }
};


//   const scheduleReminder = (id: number, content: string, reminderTimestamp: number) => {
//     const now = Date.now();
//     const delay = reminderTimestamp - now;

 
//     if (delay > 0) {
//       setTimeout(() => {
//         const interval = setInterval(() => {
//           if (Date.now() >= reminderTimestamp) {
//             message.warning(`Reminder: ${content}`);
//             reminderTimestamp += 300000; // Extend reminder by 5 minutes
//           }
//         }, 300000); 

//         return () => clearInterval(interval);
//       }, delay);
//     } else {
//       message.warning(`Reminder: ${content}`);
//     }
//   };

const scheduleReminder = (id: number, content: string, reminderTimestamp: number) => {
  const now = Date.now();
  const delay = reminderTimestamp - now;

  
  if (delay > 0) {
    setTimeout(() => {
      const interval = setInterval(() => {
        const currentTime = Date.now();

        if (currentTime >= reminderTimestamp) {
          message.warning(`Reminder: ${content}`);
          clearInterval(interval); 
        } else {
          
          message.warning(`Upcoming Reminder: ${content}`);
        }
      }, 30000);
      
    }, delay);
  }
};

  const handleEdit = (item: Content) => {
    setCurrentContent(item);
    setNewContent(item.content);
    setNewDescription(item.description);
    setIsEditing(true);
  };

  return (
    <div>
      <Form className="content-form">
        <Form.Item>
          <Input.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            style={{ marginTop: '10px' }}
          />
        </Form.Item>
        <Form.Item>
          <DatePicker
            value={reminderDate}
            onChange={setReminderDate}
            format="YYYY-MM-DD"
            placeholder="Set reminder date"
          />
        </Form.Item>
        <Form.Item>
          <TimePicker
            value={reminderTime}
            onChange={setReminderTime}
            format="HH:mm"
            placeholder="Set reminder time"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Add Content
          </Button>
        </Form.Item>
      </Form>

      <List
        bordered
        dataSource={contents}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => handleEdit(item)}>Edit</Button>,
              <Button danger onClick={() => handleDelete(item.id)}>Delete</Button>,
              <Button onClick={() => handleToggleComplete(item.id)}>
                {item.completed ? 'Undo' : 'Complete'}
              </Button>,
            ]}
          >
            <div>
              <div style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                <strong>{item.content}</strong>
              </div>
              <div>{item.description}</div>
            </div>
          </List.Item>
        )}
      />

      <Modal
        title="Edit Content"
        open={isEditing}
        onCancel={() => setIsEditing(false)}
        onOk={handleUpdate}
      >
        <Input.TextArea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter content"
        />
        <Input.TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter description"
          style={{ marginTop: '10px' }}
        />
      </Modal>
    </div>
  );
};

export default ContentManager;


