import React, { useState } from 'react';
import store from '../stores/TaskStore';

function Task(props) {
  let { item } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState(item.description);
  const [priority, setPriority] = useState(item.priority);
  const [originalDescription, setOriginalDescription] = useState(item.description);
  const [originalPriority, setOriginalPriority] = useState(item.priority);

  const handleSave = () => {
    store.saveItem(item.id, { description, priority });
    setIsEditable(false);
  };

  const handleCancel = () => {
    setDescription(originalDescription);
    setPriority(originalPriority);
    setIsEditable(false);
  };

  const handleEdit = () => {
    setOriginalDescription(description);
    setOriginalPriority(priority);
    setIsEditable(true);
  };

  return (
    <div>
      {isEditable ? (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <input type="button" value="save" onClick={handleSave} />
          <input type="button" value="cancel" onClick={handleCancel} />
        </div>
      ) : (
        <div>
          <span>{description}</span>
          <span>{priority}</span>
          <input type="button" value="select" onClick={handleEdit} />
        </div>
      )}
    </div>
  );
}

export default Task;
