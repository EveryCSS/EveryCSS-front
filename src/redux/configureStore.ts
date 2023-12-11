import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from '@/redux/modules/example';

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
