
// // src/redux/contentSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Content {
//   id: number;
//   content: string;
//   description: string;
//   completed: boolean;
//   reminderTime?: number; // Optional field for reminder time
// }

// interface ContentState {
//   items: Content[];
// }

// const initialState: ContentState = {
//   items: [],
// };

// const contentSlice = createSlice({
//   name: 'content',
//   initialState,
//   reducers: {
//     addContent: (state, action: PayloadAction<Content>) => {
//       state.items.push(action.payload);
//     },
//     updateContent: (state, action: PayloadAction<Content>) => {
//       const index = state.items.findIndex(content => content.id === action.payload.id);
//       if (index !== -1) {
//         state.items[index] = action.payload;
//       }
//     },
//     deleteContent: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter(content => content.id !== action.payload);
//     },
//     toggleComplete: (state, action: PayloadAction<number>) => {
//       const content = state.items.find(content => content.id === action.payload);
//       if (content) {
//         content.completed = !content.completed;
//       }
//     },
//     setReminder: (state, action: PayloadAction<{ id: number; reminderTime: number }>) => {
//       const { id, reminderTime } = action.payload;
//       const content = state.items.find(content => content.id === id);
//       if (content) {
//         content.reminderTime = reminderTime; // Set reminder time for the content
//       }
//     },
//   },
// });

// export const { addContent, updateContent, deleteContent, toggleComplete, setReminder } = contentSlice.actions;
// export default contentSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Content {
  id: number;
  content: string;
  description: string;
  completed: boolean;
  reminderTime?: number; // Optional reminder time
}

interface ContentState {
  items: Content[];
}

const initialState: ContentState = {
  items: [],
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<Content>) => {
      state.items.push(action.payload);
    },
    updateContent: (state, action: PayloadAction<Content>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteContent: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items[index].completed = !state.items[index].completed;
      }
    },
    setReminder: (state, action: PayloadAction<{ id: number; reminderTime: number }>) => {
      const { id, reminderTime } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index].reminderTime = reminderTime;
      }
    },
  },
});

export const { addContent, updateContent, deleteContent, toggleComplete, setReminder } = contentSlice.actions;
export default contentSlice.reducer;
